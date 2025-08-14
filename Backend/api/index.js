// --- Imports and setup ---
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();
const session = require('express-session');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://genfolio-eight.vercel.app',
    'https://genfolio-one.vercel.app',
    'https://genfolioupdates.vercel.app'
  ],
  credentials: true
}));
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key', // use a strong secret in production!
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, // true for HTTPS (Render uses HTTPS)
    sameSite: 'none' // required for cross-site cookies
  }
}));

app.use((req, res, next) => {
  console.log('Cookies:', req.headers.cookie);
  console.log('Session:', req.session);
  next();
});

// --- MongoDB/Mongoose setup ---
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/Genfolio';
mongoose.connect(mongoUri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed password
  createdAt: { type: Date, default: Date.now }
}, { collection: 'user' });

const profileSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  fullName: String,
  title: String,
  email: String,
  phone: String,
  location: String,
  aboutMe: String,
  workExperience: String,
  education: String,
  projects: String,
  resume: String,
  github: String,
  linkedin: String,
  twitter: String,
  skills: String,
  profileImage: String,
  submittedAt: {
    type: Date,
    default: Date.now,
    get: function(value) {
      if (!value) return value;
      // Convert UTC to IST (UTC+5:30)
      const istOffset = 5.5 * 60 * 60 * 1000;
      return new Date(value.getTime() + istOffset);
    }
  },
}, { collection: 'userdata', versionKey: false, toJSON: { getters: true }, toObject: { getters: true } });

const User = mongoose.model('User', userSchema);
const Profile = mongoose.model('Profile', profileSchema);

// --- In-memory portfolio management ---
let portfolios = {};

app.post('/api/user', (req, res) => {
  const portfolioId = uuidv4();
  portfolios[portfolioId] = req.body;
  res.json({ success: true, portfolioId });
});

app.get('/user', (req, res) => {
  // For backward compatibility, return the first portfolio or empty object
  const firstPortfolioId = Object.keys(portfolios)[0];
  res.json(firstPortfolioId ? portfolios[firstPortfolioId] : {});
});

app.get('/portfolio/:id', (req, res) => {
  const { id } = req.params;
  const portfolio = portfolios[id];
  if (!portfolio) {
    return res.status(404).json({ error: 'Portfolio not found' });
  }
  res.json(portfolio);
});

app.get('/portfolios', (req, res) => {
  const portfolioList = Object.keys(portfolios).map(id => ({
    id,
    name: portfolios[id].fullName || 'Unnamed Portfolio',
    title: portfolios[id].title || '',
    createdAt: new Date().toISOString()
  }));
  res.json(portfolioList);
});

// --- Generate About Me endpoint ---
app.post('/generate-about', async (req, res) => {
  const { input } = req.body;
  if (!input) {
    return res.status(400).json({ error: 'Input is required' });
  }
  // Simple length-based token determination
  const inputLength = input.length;
  let maxTokens = 200; // Default for medium length - increased for better completion
  if (inputLength < 50) {
    maxTokens = 150; // Short - increased for better completion
  } else if (inputLength > 150) {
    maxTokens = 250; // Long - increased for better completion
  }
  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { 
            role: "system", 
            content: "Write a natural About Me section using ALL the information provided in the user input. Include every detail, field, or piece of information mentioned by the user - whether it's name, hobbies, education, location, work experience, skills, projects, or any other personal information. Do not ignore or skip any details mentioned in the input. Start directly with the content - do not use phrases like 'here's about me', 'this is about me', or any other introductory text. Always complete your sentences with proper punctuation." 
          },
          { 
            role: "user", 
            content: `Create an About Me section based ONLY on this information: ${input}. Use only the details provided here and do not add any additional information. Make sure to finish each sentence completely.` 
          }
        ],
        max_tokens: maxTokens,
        temperature: 0.7
      })
    });
    if (!groqResponse.ok) {
      throw new Error(`Groq API error: ${groqResponse.status}`);
    }
    const data = await groqResponse.json();
    let output = data.choices[0].message.content;
    // Ensure the output ends with a period for completeness
    output = output.trim();
    if (!output.endsWith('.')) {
      output += '.';
    }
    res.json({ output });
  } catch (error) {
    console.error('Error calling Groq API:', error);
    res.status(500).json({ error: 'Failed to generate About Me' });
  }
});

// --- Profile save endpoint (MongoDB) ---
// Save or update the profile for the logged-in user
app.post('/api/profile', async (req, res) => {
  try {
    // Remove session check to allow guest profile creation
    // if (!req.session.user || !req.session.user.id) {
    //   return res.status(401).json({ error: 'Not logged in' });
    // }
    // Use userId from session if available, otherwise generate a guest id
    let userId = req.session && req.session.user && req.session.user.id;
    if (!userId) {
      // For guests, use a unique identifier from the request or generate one
      userId = req.body.userId || (req.body.email ? req.body.email : uuidv4());
    }
    const profileData = { ...req.body, userId };
    // Upsert: update if exists, otherwise create
    const profile = await Profile.findOneAndUpdate(
      { userId },
      profileData,
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(500).json({ error: 'Failed to save profile' });
  }
});

// --- Profile fetch endpoint (MongoDB) ---
// Get the profile for the logged-in user
app.get('/api/profile', async (req, res) => {
  try {
    // Remove session check to allow guest profile fetch
    // if (!req.session.user || !req.session.user.id) {
    //   return res.status(401).json({ error: 'Not logged in' });
    // }
    let userId = req.session && req.session.user && req.session.user.id;
    if (!userId) {
      userId = req.query.userId || req.query.email;
    }
    if (!userId) {
      return res.status(400).json({ error: 'User identifier required' });
    }
    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json({ success: true, profile });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// --- User Registration ---
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
      username,
      email,
      password: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: 'User registered!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// --- User Login ---
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      req.session.user = { id: user._id, username: user.username, email: user.email };
      res.json({ message: 'Login successful', username: user.username });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// --- Get Username endpoint ---
app.get('/api/get-username', (req, res) => {
  if (req.session && req.session.user) {
    return res.json({ username: req.session.user.username });
  }
  res.status(401).json({ error: 'Not logged in' });
});

// --- Logout endpoint ---
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
});

// --- Root endpoint ---
app.get('/', (req, res) => res.send('API is working'));

// In-memory storage for shared portfolios
const sharedPortfolios = {};

// Save shared portfolio
app.post('/api/portfolio-share', (req, res) => {
  const { uuid, template, data } = req.body;
  if (!uuid || !template || !data) {
    return res.status(400).json({ error: 'uuid, template, and data are required' });
  }
  sharedPortfolios[uuid] = { template, data };
  res.json({ success: true });
});

// Get shared portfolio by uuid
app.get('/api/portfolio-share/:uuid', (req, res) => {
  const { uuid } = req.params;
  const portfolio = sharedPortfolios[uuid];
  if (!portfolio) {
    return res.status(404).json({ error: 'Portfolio not found' });
  }
  res.json(portfolio);
});

const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
exports.default = app;
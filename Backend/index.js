const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Genfolio');
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', ()=>{
  console.log("Connected to MongoDB");
});

const userSchema=new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});
const User= mongoose.model('User', userSchema)

// Store portfolios with UUID keys
let portfolios = {};

app.post('/user', (req, res) => {
  const portfolioId = uuidv4();
  portfolios[portfolioId] = req.body;
  res.json({ success: true, portfolioId });
});

app.get('/user', (req, res) => {
  // For backward compatibility, return the first portfolio or empty object
  const firstPortfolioId = Object.keys(portfolios)[0];
  res.json(firstPortfolioId ? portfolios[firstPortfolioId] : {});
});

// New endpoint to get portfolio by ID
app.get('/portfolio/:id', (req, res) => {
  const { id } = req.params;
  const portfolio = portfolios[id];
  
  if (!portfolio) {
    return res.status(404).json({ error: 'Portfolio not found' });
  }
  
  res.json(portfolio);
});

// New endpoint to get all portfolios (for admin purposes)
app.get('/portfolios', (req, res) => {
  const portfolioList = Object.keys(portfolios).map(id => ({
    id,
    name: portfolios[id].fullName || 'Unnamed Portfolio',
    title: portfolios[id].title || '',
    createdAt: new Date().toISOString()
  }));
  res.json(portfolioList);
});

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

app.post('/register', async (req, res)=>{
  const {username, email, password} = req.body;
  const saltRounds=10;
  try{
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
      username,
      email,
      password: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: 'User registered!' });
  }catch(error){
    console.log(error);
    res.status(500).json({error: 'Registration failed'});
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      console.log("Login successful");
      res.json({ message: 'Login successful' });
    } else {
      console.log("Login failed");
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/', (req, res) => res.send('API is working'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
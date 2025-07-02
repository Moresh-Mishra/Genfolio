const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/genfolio');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
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

app.post('/generate-about', async (req, res) => {
  const { input } = req.body;
  if (!input) {
    return res.status(400).json({ error: 'Input is required' });
    // routing to Landing.jsx
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

app.post('/api/profile', async (req, res) => {
  try {
    const profileData = req.body;
    if (!profileData.userId) {
      return res.status(400).json({ error: 'userId is required' });

    }
    const profile = new Profile(profileData);
    await profile.save();
    res.json({ success: true, profile });
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(500).json({ error: 'Failed to save profile' });
  }
});

app.get('/', (req, res) => res.send('API is working'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cors());

let userData = {};

app.post('/user', (req, res) => {
  userData = req.body;
  res.json({ success: true });
});

app.get('/user', (req, res) => {
  res.json(userData);
});

app.post('/generate-about', async (req, res) => {
  const { input } = req.body;
  if (!input) {
    return res.status(400).json({ error: 'Input is required' });
  }
  
  // Simple length-based token determination
  const inputLength = input.length;
  let maxTokens = 120; // Default for medium length
  
  if (inputLength < 50) {
    maxTokens = 80; // Short
  } else if (inputLength > 150) {
    maxTokens = 150; // Long
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
            content: "Write a natural About Me section without any prefixes or summaries. Start directly with the content." 
          },
          { 
            role: "user", 
            content: `Create an About Me section based on: ${input}` 
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
    const output = data.choices[0].message.content;
    res.json({ output });
  } catch (error) {
    console.error('Error calling Groq API:', error);
    res.status(500).json({ error: 'Failed to generate About Me' });
  }
});

app.get('/', (req, res) => res.send('API is working'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
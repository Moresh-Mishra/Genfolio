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

app.get('/', (req, res) => res.send('API is working'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
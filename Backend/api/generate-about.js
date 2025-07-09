export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { input } = req.body;
  if (!input) {
    return res.status(400).json({ error: 'Input is required' });
  }
  const inputLength = input.length;
  let maxTokens = 200;
  if (inputLength < 50) {
    maxTokens = 150;
  } else if (inputLength > 150) {
    maxTokens = 250;
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
    output = output.trim();
    if (!output.endsWith('.')) {
      output += '.';
    }
    res.json({ output });
  } catch (error) {
    console.error('Error calling Groq API:', error);
    res.status(500).json({ error: 'Failed to generate About Me' });
  }
} 
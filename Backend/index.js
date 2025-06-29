const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());

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

app.post('/generate-pdf', async (req, res) => {
  const { html, fileName = 'portfolio.pdf' } = req.body;
  
  if (!html) {
    return res.status(400).json({ error: 'HTML content is required' });
  }

  let browser;
  try {
    // Launch browser
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Define PDF page dimensions (A4 size in pixels at 96 DPI)
    const PAGE_WIDTH = 1600;
    const PAGE_HEIGHT = 1123;

    // Set a large desktop viewport - wider to prevent side cutting
    await page.setViewport({ width: 1600, height: 2000 });

    // Remove or override the mobile viewport meta tag
    let desktopHtml = html.replace(
      /<meta[^>]*name=["']viewport["'][^>]*>/i,
      '<meta name="viewport" content="width=1600">'
    );

    // Set content and wait for any dynamic content to load
    await page.setContent(desktopHtml, { waitUntil: 'networkidle0' });
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Calculate content bounding box and scale to fit one page
    const { contentWidth, contentHeight } = await page.evaluate(() => {
      const body = document.body;
      const rect = body.getBoundingClientRect();
      return {
        contentWidth: rect.width,
        contentHeight: rect.height
      };
    });

    // Compute scale factors for width and height, use the smaller one
    const scaleX = PAGE_WIDTH / contentWidth;
    const scaleY = PAGE_HEIGHT / contentHeight;
    const scale = Math.min(scaleX, scaleY, 1); // Don't upscale, only downscale if needed

    // Inject CSS to force single-page layout
    await page.addStyleTag({
      content: `
        html, body { overflow: hidden !important; }
        * { box-sizing: border-box !important; }
      `
    });

    // Generate PDF with fixed size
    const pdfBuffer = await page.pdf({
      width: `${PAGE_WIDTH}px`,
      height: `${PAGE_HEIGHT}px`,
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    });

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Length', pdfBuffer.length);
    
    // Send the PDF buffer
    res.send(pdfBuffer);

  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

app.get('/', (req, res) => res.send('API is working'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
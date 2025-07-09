let portfolios = global.portfolios || {};
if (!global.portfolios) global.portfolios = portfolios;
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const portfolioId = uuidv4();
    portfolios[portfolioId] = req.body;
    res.json({ success: true, portfolioId });
  } else if (req.method === 'GET') {
    const firstPortfolioId = Object.keys(portfolios)[0];
    res.json(firstPortfolioId ? portfolios[firstPortfolioId] : {});
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 
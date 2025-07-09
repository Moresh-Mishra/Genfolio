let portfolios = global.portfolios || {};
if (!global.portfolios) global.portfolios = portfolios;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const portfolio = portfolios[id];
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }
    res.json(portfolio);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 
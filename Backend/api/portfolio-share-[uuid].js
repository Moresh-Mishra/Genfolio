let sharedPortfolios = global.sharedPortfolios || {};
if (!global.sharedPortfolios) global.sharedPortfolios = sharedPortfolios;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { uuid } = req.query;
    const portfolio = sharedPortfolios[uuid];
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }
    res.json(portfolio);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 
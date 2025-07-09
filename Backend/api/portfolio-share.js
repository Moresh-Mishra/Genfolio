let sharedPortfolios = global.sharedPortfolios || {};
if (!global.sharedPortfolios) global.sharedPortfolios = sharedPortfolios;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { uuid, template, data } = req.body;
    if (!uuid || !template || !data) {
      return res.status(400).json({ error: 'uuid, template, and data are required' });
    }
    sharedPortfolios[uuid] = { template, data };
    res.json({ success: true });
  } else if (req.method === 'GET') {
    // List all shared portfolios (for admin/debug)
    res.json(sharedPortfolios);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 
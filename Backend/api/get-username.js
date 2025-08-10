export default function handler(req, res) {
  // No session support in Vercel serverless by default
  res.status(401).json({ error: 'Not logged in' });
} 
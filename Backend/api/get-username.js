import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    res.json({ username: decoded.username, email: decoded.email, userId: decoded.userId });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
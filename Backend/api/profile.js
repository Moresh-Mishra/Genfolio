import dbConnect from './_dbConnect';
import Profile from './_ProfileModel';

import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  await dbConnect();
  // Authenticate user via JWT
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  let decoded;
  try {
    decoded = jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET || 'your_jwt_secret');
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  const userId = decoded.userId || decoded.email;
  if (req.method === 'POST') {
    try {
      const profileData = { ...req.body, userId };
      const profile = await Profile.findOneAndUpdate(
        { userId },
        profileData,
        { new: true, upsert: true }
      );
      res.json({ success: true, profile });
    } catch (error) {
      console.error('Error saving profile:', error);
      res.status(500).json({ error: 'Failed to save profile' });
    }
  } else if (req.method === 'GET') {
    try {
      const profile = await Profile.findOne({ userId });
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.json({ success: true, profile });
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ error: 'Failed to fetch profile' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
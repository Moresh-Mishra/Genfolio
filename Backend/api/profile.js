import dbConnect from './_dbConnect';
import Profile from './_ProfileModel';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    try {
      let userId = req.body.userId || (req.body.email ? req.body.email : undefined);
      if (!userId) {
        return res.status(400).json({ error: 'User identifier required' });
      }
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
      let userId = req.query.userId || req.query.email;
      if (!userId) {
        return res.status(400).json({ error: 'User identifier required' });
      }
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
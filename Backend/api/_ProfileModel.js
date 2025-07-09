import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  fullName: String,
  title: String,
  email: String,
  phone: String,
  location: String,
  aboutMe: String,
  workExperience: String,
  education: String,
  projects: String,
  resume: String,
  github: String,
  linkedin: String,
  twitter: String,
  skills: String,
  profileImage: String,
  submittedAt: {
    type: Date,
    default: Date.now,
    get: function(value) {
      if (!value) return value;
      // Convert UTC to IST (UTC+5:30)
      const istOffset = 5.5 * 60 * 60 * 1000;
      return new Date(value.getTime() + istOffset);
    }
  },
}, { collection: 'userdata', versionKey: false, toJSON: { getters: true }, toObject: { getters: true } });

export default mongoose.models.Profile || mongoose.model('Profile', profileSchema); 
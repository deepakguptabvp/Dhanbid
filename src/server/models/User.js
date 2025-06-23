// ===== 📁 src/models/User.js =====
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: {
    type: String,
    required: true,
    unique: true, // ensures no duplicates
  },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
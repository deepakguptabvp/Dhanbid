// src/server/utils/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './src/server/.env' });
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit with failure
  }
};

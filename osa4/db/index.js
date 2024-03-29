const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URL;
    await mongoose.connect(mongoUrl);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

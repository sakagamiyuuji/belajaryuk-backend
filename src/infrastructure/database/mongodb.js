const mongoose = require('mongoose');
const config = require('../config/env');

async function connectDatabase() {
  try {
    await mongoose.connect(config.database.uri, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    throw err;
  }
}

module.exports = { connectDatabase };

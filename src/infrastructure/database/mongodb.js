const mongoose = require('mongoose');
const config = require('../config/env');

async function connectDatabase() {
  await mongoose.connect(config.database.uri, {
    serverSelectionTimeoutMS: 10000,
  });
  console.log('MongoDB connected');
}

module.exports = { connectDatabase };

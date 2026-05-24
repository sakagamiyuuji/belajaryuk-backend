require('dotenv').config();

const config = {
  port: process.env.PORT || 3004,
  jwt: {
    secret: process.env.JWT_SECRET || 'dev-secret-change-in-production',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/belajaryuk',
  },
  app: {
    resetPasswordUrl: process.env.RESET_PASSWORD_URL || 'http://localhost:3004/reset-password',
    corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:3000')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  },
};

module.exports = config;

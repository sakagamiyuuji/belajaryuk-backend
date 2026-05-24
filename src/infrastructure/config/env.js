require('dotenv').config();

function requireEnv(name) {
  const value = process.env[name];
  if (!value || !String(value).trim()) {
    throw new Error(
      `Missing required environment variable: ${name}. Set it in Render Dashboard → Environment.`
    );
  }
  return value;
}

const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  requireEnv('MONGODB_URI');
  requireEnv('JWT_SECRET');
}

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
  email: {
    resendApiKey: process.env.RESEND_API_KEY || null,
    from: process.env.EMAIL_FROM || 'BelajarYuk <onboarding@resend.dev>',
    appName: process.env.APP_NAME || 'BelajarYuk',
  },
};

module.exports = config;

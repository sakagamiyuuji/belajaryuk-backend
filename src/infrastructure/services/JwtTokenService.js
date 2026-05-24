const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const AppError = require('../../domain/errors/AppError');
const config = require('../config/env');

class JwtTokenService {
  generateAccessToken(payload) {
    return jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    });
  }

  verifyAccessToken(token) {
    try {
      return jwt.verify(token, config.jwt.secret);
    } catch {
      throw new AppError('Invalid or expired token', 401);
    }
  }

  generateResetToken() {
    return crypto.randomBytes(32).toString('hex');
  }
}

module.exports = JwtTokenService;

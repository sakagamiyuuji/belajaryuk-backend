class ITokenService {
  generateAccessToken(_payload) {
    throw new Error('Method not implemented');
  }

  verifyAccessToken(_token) {
    throw new Error('Method not implemented');
  }

  generateResetToken() {
    throw new Error('Method not implemented');
  }
}

module.exports = ITokenService;

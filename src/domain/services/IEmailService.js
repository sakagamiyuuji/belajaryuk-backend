class IEmailService {
  async sendPasswordResetEmail(_email, _resetToken) {
    throw new Error('Method not implemented');
  }
}

module.exports = IEmailService;

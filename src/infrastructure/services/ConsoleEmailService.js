const config = require('../config/env');

class ConsoleEmailService {
  async sendPasswordResetEmail(email, resetToken) {
    const resetUrl = `${config.app.resetPasswordUrl}?token=${resetToken}`;

    console.log('\n--- Password Reset Email ---');
    console.log(`To: ${email}`);
    console.log(`Reset URL: ${resetUrl}`);
    console.log(`Token: ${resetToken}`);
    console.log('----------------------------\n');
  }
}

module.exports = ConsoleEmailService;

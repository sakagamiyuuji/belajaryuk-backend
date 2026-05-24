const config = require('../config/env');
const ConsoleEmailService = require('./ConsoleEmailService');
const ResendEmailService = require('./ResendEmailService');

function createEmailService() {
  if (config.email.resendApiKey) {
    console.log('Email: Resend (live delivery)');
    return new ResendEmailService();
  }

  console.warn(
    'Email: console only (RESEND_API_KEY not set). Password reset links are logged, not sent.'
  );
  return new ConsoleEmailService();
}

module.exports = createEmailService;

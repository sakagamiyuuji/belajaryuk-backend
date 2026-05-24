const AppError = require('../../domain/errors/AppError');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESET_TOKEN_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

class ForgotPasswordUseCase {
  constructor(userRepository, tokenService, emailService) {
    this.userRepository = userRepository;
    this.tokenService = tokenService;
    this.emailService = emailService;
  }

  async execute({ email }) {
    if (!email) {
      throw new AppError('Email is required', 400);
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      throw new AppError('Invalid email format', 400);
    }

    const user = await this.userRepository.findByEmail(normalizedEmail);

    // Always return success to prevent email enumeration
    if (!user) {
      return { message: 'If the email exists, a reset link has been sent' };
    }

    const resetToken = this.tokenService.generateResetToken();
    const resetPasswordExpires = new Date(Date.now() + RESET_TOKEN_EXPIRY_MS).toISOString();

    await this.userRepository.update(user.id, {
      resetPasswordToken: resetToken,
      resetPasswordExpires,
    });

    await this.emailService.sendPasswordResetEmail(normalizedEmail, resetToken);

    return { message: 'If the email exists, a reset link has been sent' };
  }
}

module.exports = ForgotPasswordUseCase;

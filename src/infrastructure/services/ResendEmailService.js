const { Resend } = require('resend');
const config = require('../config/env');

class ResendEmailService {
  constructor() {
    this.resend = new Resend(config.email.resendApiKey);
    this.from = config.email.from;
    this.appName = config.email.appName;
  }

  async sendPasswordResetEmail(email, resetToken) {
    const resetUrl = `${config.app.resetPasswordUrl}?token=${resetToken}`;

    const { error } = await this.resend.emails.send({
      from: this.from,
      to: email,
      subject: `Reset Password — ${this.appName}`,
      html: buildPasswordResetHtml({
        appName: this.appName,
        resetUrl,
        expiryHours: 1,
      }),
      text: [
        `Halo,`,
        ``,
        `Kami menerima permintaan reset password untuk akun ${this.appName}.`,
        `Buka link berikut (berlaku 1 jam):`,
        resetUrl,
        ``,
        `Jika Anda tidak meminta reset password, abaikan email ini.`,
      ].join('\n'),
    });

    if (error) {
      throw new Error(error.message || 'Resend API error');
    }
  }
}

function buildPasswordResetHtml({ appName, resetUrl, expiryHours }) {
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="utf-8"></head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 520px; margin: 0 auto; padding: 24px;">
  <h2 style="margin: 0 0 16px;">Reset Password</h2>
  <p>Halo,</p>
  <p>Kami menerima permintaan untuk mengatur ulang password akun <strong>${appName}</strong>.</p>
  <p style="margin: 24px 0;">
    <a href="${resetUrl}" style="display: inline-block; background: #2563eb; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600;">Atur Ulang Password</a>
  </p>
  <p style="font-size: 14px; color: #555;">Link berlaku <strong>${expiryHours} jam</strong>. Jika tombol tidak berfungsi, salin URL ini ke browser:</p>
  <p style="font-size: 13px; word-break: break-all; color: #2563eb;">${resetUrl}</p>
  <p style="font-size: 14px; color: #777; margin-top: 32px;">Jika Anda tidak meminta reset password, abaikan email ini.</p>
</body>
</html>`;
}

module.exports = ResendEmailService;

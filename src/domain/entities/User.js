class User {
  constructor({ id, email, passwordHash, resetPasswordToken, resetPasswordExpires, createdAt, updatedAt }) {
    this.id = id;
    this.email = email;
    this.passwordHash = passwordHash;
    this.resetPasswordToken = resetPasswordToken;
    this.resetPasswordExpires = resetPasswordExpires;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toPublic() {
    return {
      id: this.id,
      email: this.email,
      createdAt: this.createdAt,
    };
  }
}

module.exports = User;

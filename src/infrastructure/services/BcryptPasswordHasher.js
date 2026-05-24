const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 12;

class BcryptPasswordHasher {
  async hash(password) {
    return bcrypt.hash(password, SALT_ROUNDS);
  }

  async compare(password, hash) {
    return bcrypt.compare(password, hash);
  }
}

module.exports = BcryptPasswordHasher;

class IPasswordHasher {
  async hash(_password) {
    throw new Error('Method not implemented');
  }

  async compare(_password, _hash) {
    throw new Error('Method not implemented');
  }
}

module.exports = IPasswordHasher;

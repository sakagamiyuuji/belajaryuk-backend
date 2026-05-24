/**
 * @typedef {import('../entities/User')} User
 */
class IUserRepository {
  async findByEmail(_email) {
    throw new Error('Method not implemented');
  }

  async findById(_id) {
    throw new Error('Method not implemented');
  }

  async findByResetToken(_token) {
    throw new Error('Method not implemented');
  }

  /** @returns {Promise<User>} */
  async create(_data) {
    throw new Error('Method not implemented');
  }

  async update(_id, _data) {
    throw new Error('Method not implemented');
  }
}

module.exports = IUserRepository;

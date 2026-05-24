const AppError = require('../../domain/errors/AppError');

class GetProfileUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userId) {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user.toPublic();
  }
}

module.exports = GetProfileUseCase;

const AppError = require('../../domain/errors/AppError');

class GetSubjectDetailUseCase {
  constructor(curriculumRepository) {
    this.curriculumRepository = curriculumRepository;
  }

  async execute(subjectId) {
    if (!subjectId) {
      throw new AppError('Subject id is required', 400);
    }

    const subject = await this.curriculumRepository.findSubjectById(subjectId);
    if (!subject) {
      throw new AppError('Subject not found', 404);
    }

    return { subject };
  }
}

module.exports = GetSubjectDetailUseCase;

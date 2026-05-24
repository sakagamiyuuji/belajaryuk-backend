const AppError = require('../../domain/errors/AppError');

class GetMaterialDetailUseCase {
  constructor(curriculumRepository) {
    this.curriculumRepository = curriculumRepository;
  }

  async execute(materialId) {
    if (!materialId) {
      throw new AppError('Material id is required', 400);
    }

    const material = await this.curriculumRepository.findMaterialById(materialId);
    if (!material) {
      throw new AppError('Material not found', 404);
    }

    return { material };
  }
}

module.exports = GetMaterialDetailUseCase;

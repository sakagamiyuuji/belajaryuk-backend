class ListSubjectsUseCase {
  constructor(curriculumRepository) {
    this.curriculumRepository = curriculumRepository;
  }

  async execute() {
    const subjects = await this.curriculumRepository.findAllSubjects();
    return { subjects };
  }
}

module.exports = ListSubjectsUseCase;

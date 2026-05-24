class CurriculumController {
  constructor(listSubjectsUseCase, getSubjectDetailUseCase, getMaterialDetailUseCase) {
    this.listSubjectsUseCase = listSubjectsUseCase;
    this.getSubjectDetailUseCase = getSubjectDetailUseCase;
    this.getMaterialDetailUseCase = getMaterialDetailUseCase;
  }

  listSubjects = async (req, res, next) => {
    try {
      const result = await this.listSubjectsUseCase.execute();
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  getSubjectDetail = async (req, res, next) => {
    try {
      const result = await this.getSubjectDetailUseCase.execute(req.params.id);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  getMaterialDetail = async (req, res, next) => {
    try {
      const result = await this.getMaterialDetailUseCase.execute(req.params.id);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = CurriculumController;

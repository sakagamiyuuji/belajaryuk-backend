const express = require('express');

function createCurriculumRoutes(curriculumController) {
  const router = express.Router();

  router.get('/subjects', curriculumController.listSubjects);
  router.get('/subjects/:id', curriculumController.getSubjectDetail);
  router.get('/materials/:id', curriculumController.getMaterialDetail);

  return router;
}

module.exports = createCurriculumRoutes;

const express = require('express');

function createAuthRoutes(authController, authMiddleware) {
  const router = express.Router();

  router.post('/register', authController.register);
  router.post('/login', authController.login);
  router.post('/forgot-password', authController.forgotPassword);
  router.post('/reset-password', authController.resetPassword);
  router.get('/me', authMiddleware, authController.getProfile);

  return router;
}

module.exports = createAuthRoutes;

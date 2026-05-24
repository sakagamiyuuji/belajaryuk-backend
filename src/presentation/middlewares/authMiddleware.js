const AppError = require('../../domain/errors/AppError');

function createAuthMiddleware(tokenService) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new AppError('Authentication required', 401));
    }

    const token = authHeader.split(' ')[1];
    const payload = tokenService.verifyAccessToken(token);

    req.userId = payload.sub;
    req.userEmail = payload.email;
    next();
  };
}

module.exports = createAuthMiddleware;

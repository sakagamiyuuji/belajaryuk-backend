const { connectDatabase } = require('../infrastructure/database/mongodb');
const UserRepository = require('../infrastructure/repositories/UserRepository');
const BcryptPasswordHasher = require('../infrastructure/services/BcryptPasswordHasher');
const JwtTokenService = require('../infrastructure/services/JwtTokenService');
const createEmailService = require('../infrastructure/services/createEmailService');

const RegisterUseCase = require('../application/usecases/RegisterUseCase');
const LoginUseCase = require('../application/usecases/LoginUseCase');
const ForgotPasswordUseCase = require('../application/usecases/ForgotPasswordUseCase');
const ResetPasswordUseCase = require('../application/usecases/ResetPasswordUseCase');
const GetProfileUseCase = require('../application/usecases/GetProfileUseCase');
const ListSubjectsUseCase = require('../application/usecases/ListSubjectsUseCase');
const GetSubjectDetailUseCase = require('../application/usecases/GetSubjectDetailUseCase');
const GetMaterialDetailUseCase = require('../application/usecases/GetMaterialDetailUseCase');

const AuthController = require('../presentation/controllers/AuthController');
const CurriculumController = require('../presentation/controllers/CurriculumController');
const createAuthMiddleware = require('../presentation/middlewares/authMiddleware');
const createAuthRoutes = require('../presentation/routes/authRoutes');
const createCurriculumRoutes = require('../presentation/routes/curriculumRoutes');
const CurriculumRepository = require('../infrastructure/repositories/CurriculumRepository');

async function createContainer() {
  await connectDatabase();

  const userRepository = new UserRepository();
  const passwordHasher = new BcryptPasswordHasher();
  const tokenService = new JwtTokenService();
  const emailService = createEmailService();

  const registerUseCase = new RegisterUseCase(userRepository, passwordHasher);
  const loginUseCase = new LoginUseCase(userRepository, passwordHasher, tokenService);
  const forgotPasswordUseCase = new ForgotPasswordUseCase(userRepository, tokenService, emailService);
  const resetPasswordUseCase = new ResetPasswordUseCase(userRepository, passwordHasher);
  const getProfileUseCase = new GetProfileUseCase(userRepository);

  const authController = new AuthController(
    registerUseCase,
    loginUseCase,
    forgotPasswordUseCase,
    resetPasswordUseCase,
    getProfileUseCase
  );

  const curriculumRepository = new CurriculumRepository();
  const listSubjectsUseCase = new ListSubjectsUseCase(curriculumRepository);
  const getSubjectDetailUseCase = new GetSubjectDetailUseCase(curriculumRepository);
  const getMaterialDetailUseCase = new GetMaterialDetailUseCase(curriculumRepository);

  const curriculumController = new CurriculumController(
    listSubjectsUseCase,
    getSubjectDetailUseCase,
    getMaterialDetailUseCase
  );

  const authMiddleware = createAuthMiddleware(tokenService);
  const authRoutes = createAuthRoutes(authController, authMiddleware);
  const curriculumRoutes = createCurriculumRoutes(curriculumController);

  return { authRoutes, curriculumRoutes };
}

module.exports = { createContainer };

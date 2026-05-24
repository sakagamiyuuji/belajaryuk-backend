const { connectDatabase } = require('./src/infrastructure/database/mongodb');
const UserModel = require('./src/infrastructure/database/models/UserModel');
const SubjectModel = require('./src/infrastructure/database/models/SubjectModel');
const BcryptPasswordHasher = require('./src/infrastructure/services/BcryptPasswordHasher');
const CurriculumRepository = require('./src/infrastructure/repositories/CurriculumRepository');
const CURRICULUM_SEED = require('./src/infrastructure/database/seed/curriculumData');

const DEFAULT_USER = {
  email: 'test@example.com',
  password: '12345678',
};

async function seedUser() {
  const existingUser = await UserModel.findOne({ email: DEFAULT_USER.email });

  if (existingUser) {
    console.log(`User "${DEFAULT_USER.email}" already exists, skipping.`);
    return;
  }

  const passwordHasher = new BcryptPasswordHasher();
  const passwordHash = await passwordHasher.hash(DEFAULT_USER.password);

  await UserModel.create({
    email: DEFAULT_USER.email,
    passwordHash,
  });

  console.log(`User "${DEFAULT_USER.email}" created successfully.`);
}

async function seedCurriculum() {
  const curriculumRepository = new CurriculumRepository();
  const { created, skipped } = await curriculumRepository.seedCurriculum(CURRICULUM_SEED);

  console.log(
    `Curriculum seed done: ${created.subjects} subject(s), ${created.chapters} chapter(s), ${created.materials} material(s) created; ${skipped.subjects + skipped.chapters + skipped.materials} item(s) skipped (already exist).`
  );
}

async function seed() {
  await connectDatabase();
  await seedUser();
  await seedCurriculum();
}

seed()
  .then(async () => {
    await SubjectModel.db.close();
    process.exit(0);
  })
  .catch(async (err) => {
    console.error('Seed failed:', err.message);
    await SubjectModel.db.close().catch(() => {});
    process.exit(1);
  });

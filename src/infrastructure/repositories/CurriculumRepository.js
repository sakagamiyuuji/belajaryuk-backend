const Subject = require('../../domain/entities/Subject');
const Chapter = require('../../domain/entities/Chapter');
const Material = require('../../domain/entities/Material');
const SubjectModel = require('../database/models/SubjectModel');
const ChapterModel = require('../database/models/ChapterModel');
const MaterialModel = require('../database/models/MaterialModel');

class CurriculumRepository {
  _mapMaterial(doc, { summary = false } = {}) {
    const material = new Material({
      id: doc._id.toString(),
      chapterId: doc.chapterId.toString(),
      title: doc.title,
      contentType: doc.contentType,
      contentBody: doc.contentBody,
      videoUrl: doc.videoUrl,
      likesCount: doc.likesCount,
      orderIndex: doc.orderIndex,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
    });

    return summary ? material.toSummary() : material.toDetail();
  }

  _mapChapter(doc, materials) {
    const chapter = new Chapter({
      id: doc._id.toString(),
      subjectId: doc.subjectId.toString(),
      title: doc.title,
      orderIndex: doc.orderIndex,
      materials,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
    });

    return chapter.toDetail();
  }

  _mapSubject(doc, chapters) {
    const subject = new Subject({
      id: doc._id.toString(),
      title: doc.title,
      description: doc.description,
      iconUrl: doc.iconUrl,
      orderIndex: doc.orderIndex,
      chapters,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
    });

    return subject.toDetail();
  }

  async findAllSubjects() {
    const docs = await SubjectModel.find().sort({ orderIndex: 1 });
    return docs.map((doc) =>
      new Subject({
        id: doc._id.toString(),
        title: doc.title,
        description: doc.description,
        iconUrl: doc.iconUrl,
        orderIndex: doc.orderIndex,
      }).toListItem()
    );
  }

  async findSubjectById(id) {
    const subjectDoc = await SubjectModel.findById(id);
    if (!subjectDoc) return null;

    const chapterDocs = await ChapterModel.find({ subjectId: id }).sort({ orderIndex: 1 });
    const chapterIds = chapterDocs.map((c) => c._id);

    const materialDocs = await MaterialModel.find({
      chapterId: { $in: chapterIds },
    }).sort({ orderIndex: 1 });

    const materialsByChapter = new Map();
    for (const materialDoc of materialDocs) {
      const chapterId = materialDoc.chapterId.toString();
      if (!materialsByChapter.has(chapterId)) {
        materialsByChapter.set(chapterId, []);
      }
      materialsByChapter.get(chapterId).push(this._mapMaterial(materialDoc, { summary: true }));
    }

    const chapters = chapterDocs.map((chapterDoc) =>
      this._mapChapter(chapterDoc, materialsByChapter.get(chapterDoc._id.toString()) || [])
    );

    return this._mapSubject(subjectDoc, chapters);
  }

  async findMaterialById(id) {
    const doc = await MaterialModel.findById(id);
    if (!doc) return null;
    return this._mapMaterial(doc);
  }

  async seedCurriculum(subjectsData) {
    const created = { subjects: 0, chapters: 0, materials: 0 };
    const skipped = { subjects: 0, chapters: 0, materials: 0 };

    for (const subjectData of subjectsData) {
      const { chapters, ...subjectFields } = subjectData;

      let subjectDoc = await SubjectModel.findOne({ title: subjectFields.title });
      if (subjectDoc) {
        skipped.subjects += 1;
      } else {
        subjectDoc = await SubjectModel.create(subjectFields);
        created.subjects += 1;
      }

      for (const chapterData of chapters) {
        const { materials, ...chapterFields } = chapterData;

        let chapterDoc = await ChapterModel.findOne({
          subjectId: subjectDoc._id,
          title: chapterFields.title,
        });

        if (chapterDoc) {
          skipped.chapters += 1;
        } else {
          chapterDoc = await ChapterModel.create({
            ...chapterFields,
            subjectId: subjectDoc._id,
          });
          created.chapters += 1;
        }

        for (const material of materials || []) {
          const existingMaterial = await MaterialModel.findOne({
            chapterId: chapterDoc._id,
            title: material.title,
          });

          if (existingMaterial) {
            skipped.materials += 1;
            continue;
          }

          await MaterialModel.create({
            ...material,
            chapterId: chapterDoc._id,
          });
          created.materials += 1;
        }
      }
    }

    return { created, skipped };
  }
}

module.exports = CurriculumRepository;

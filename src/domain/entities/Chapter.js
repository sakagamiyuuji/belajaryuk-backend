class Chapter {
  constructor({ id, subjectId, title, orderIndex, materials, createdAt, updatedAt }) {
    this.id = id;
    this.subjectId = subjectId;
    this.title = title;
    this.orderIndex = orderIndex;
    this.materials = materials;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toDetail() {
    return {
      id: this.id,
      subjectId: this.subjectId,
      title: this.title,
      orderIndex: this.orderIndex,
      materials: this.materials || [],
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

module.exports = Chapter;

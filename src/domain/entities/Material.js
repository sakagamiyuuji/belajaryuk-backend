class Material {
  constructor({
    id,
    chapterId,
    title,
    contentType,
    contentBody,
    videoUrl,
    likesCount,
    orderIndex,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.chapterId = chapterId;
    this.title = title;
    this.contentType = contentType;
    this.contentBody = contentBody;
    this.videoUrl = videoUrl;
    this.likesCount = likesCount;
    this.orderIndex = orderIndex;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toSummary() {
    return {
      id: this.id,
      chapterId: this.chapterId,
      title: this.title,
      contentType: this.contentType,
      likesCount: this.likesCount,
      orderIndex: this.orderIndex,
    };
  }

  toDetail() {
    return {
      id: this.id,
      chapterId: this.chapterId,
      title: this.title,
      contentType: this.contentType,
      contentBody: this.contentBody,
      videoUrl: this.videoUrl,
      likesCount: this.likesCount,
      orderIndex: this.orderIndex,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

module.exports = Material;

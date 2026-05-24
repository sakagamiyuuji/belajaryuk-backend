class Subject {
  constructor({ id, title, description, iconUrl, orderIndex, chapters, createdAt, updatedAt }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.iconUrl = iconUrl;
    this.orderIndex = orderIndex;
    this.chapters = chapters;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toListItem() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      iconUrl: this.iconUrl,
      orderIndex: this.orderIndex,
    };
  }

  toDetail() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      iconUrl: this.iconUrl,
      orderIndex: this.orderIndex,
      chapters: this.chapters || [],
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

module.exports = Subject;

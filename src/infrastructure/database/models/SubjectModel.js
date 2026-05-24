const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    iconUrl: {
      type: String,
      default: null,
    },
    orderIndex: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

subjectSchema.index({ orderIndex: 1 });

module.exports = mongoose.model('Subject', subjectSchema);

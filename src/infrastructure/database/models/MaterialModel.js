const mongoose = require('mongoose');

const CONTENT_TYPES = ['text', 'video'];

const materialSchema = new mongoose.Schema(
  {
    chapterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chapter',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    contentType: {
      type: String,
      enum: CONTENT_TYPES,
      required: true,
    },
    contentBody: {
      type: String,
      default: null,
    },
    videoUrl: {
      type: String,
      default: null,
    },
    likesCount: {
      type: Number,
      default: 0,
      min: 0,
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

materialSchema.index({ chapterId: 1, orderIndex: 1 });

module.exports = mongoose.model('Material', materialSchema);
module.exports.CONTENT_TYPES = CONTENT_TYPES;

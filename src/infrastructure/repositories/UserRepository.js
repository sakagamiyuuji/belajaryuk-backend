const User = require('../../domain/entities/User');
const UserModel = require('../database/models/UserModel');

class UserRepository {
  _mapDocument(doc) {
    if (!doc) return null;

    return new User({
      id: doc._id.toString(),
      email: doc.email,
      passwordHash: doc.passwordHash,
      resetPasswordToken: doc.resetPasswordToken,
      resetPasswordExpires: doc.resetPasswordExpires
        ? doc.resetPasswordExpires.toISOString()
        : null,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
    });
  }

  async findByEmail(email) {
    const doc = await UserModel.findOne({ email });
    return this._mapDocument(doc);
  }

  async findById(id) {
    const doc = await UserModel.findById(id);
    return this._mapDocument(doc);
  }

  async findByResetToken(token) {
    const doc = await UserModel.findOne({ resetPasswordToken: token });
    return this._mapDocument(doc);
  }

  async create({ email, passwordHash }) {
    const doc = await UserModel.create({ email, passwordHash });
    return this._mapDocument(doc);
  }

  async update(id, data) {
    const updateData = {};

    if (data.passwordHash !== undefined) {
      updateData.passwordHash = data.passwordHash;
    }
    if (data.resetPasswordToken !== undefined) {
      updateData.resetPasswordToken = data.resetPasswordToken;
    }
    if (data.resetPasswordExpires !== undefined) {
      updateData.resetPasswordExpires = data.resetPasswordExpires
        ? new Date(data.resetPasswordExpires)
        : null;
    }

    const doc = await UserModel.findByIdAndUpdate(id, updateData, { new: true });
    return this._mapDocument(doc);
  }
}

module.exports = UserRepository;

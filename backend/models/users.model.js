const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: String,
      required: true,
      default: false,
    },
  },
  {
    timeStamps: true,
  }
);

userSchema.methods.matchPassword = async (password, correctPassword) => {
  return await bcrypt.compare(password, correctPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;

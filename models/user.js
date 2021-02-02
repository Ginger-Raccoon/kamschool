const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
    },
  },
  telephone: {
    type: String,
    required: true,
    validate: {
      validator(telephone) {
        return validator.isMobilePhone(telephone, "ru-RU");
      },
    },
  },
});

module.exports = mongoose.model('user', userSchema);

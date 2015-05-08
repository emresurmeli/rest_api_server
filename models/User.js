'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  gender: {
  	male: Boolean,
  	female: Boolean
  }
});

module.exports = mongoose.model('User', userSchema);
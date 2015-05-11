'use strict';

var mongoose = require('mongoose');

// My schema is based on a dating application, this is the user information
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: {
  	male: Boolean,
  	female: Boolean
  },
  genderOfInterest: {
  	male: Boolean,
  	female: Boolean
  }
});

module.exports = mongoose.model('User', userSchema);
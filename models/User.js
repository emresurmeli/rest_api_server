'use strict';

var mongoose = require('mongoose');
// use mongoose validator for data validations 
var validate = require('mongoose-validator');

// Emulated this format from the mongoose-validator github page
var userNameVal = [
  validate({
    validator: 'isLength',
    arguments: [1, 15],
    message: 'Name should be between 1 and 15 characters.'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: false,
    message: 'Name should contain alpha-numeric characters only.'
  })
];

var userAgeVal = [
  validate({
    validator: function(val) {
      return val > 0;
    },
    message: 'Age must be a positive number.'
  })
];

// My schema is based on a dating application, this is the user information
var userSchema = mongoose.Schema({
  name: {type: String, required: true, validate: userNameVal},
  email: String,
  age: {type: Number, required: false, validate: userAgeVal},
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
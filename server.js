'use strict';

var mongoose = require('mongoose');
var express = require('express');
var app = express();

var usersRoutes = express.Router();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/users_dev');

require('./routes/users_routes')(usersRoutes);

app.use('/api', usersRoutes);

app.listen(process.env.PORT || 3000, function() {
  console.log('server running on port ' + (process.env.PORT || 3000));
});
'use strict';

var User = require('../models/User');
var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json()); 

  router.get('/users', function(req, res) {
    User.find({}, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  });

  router.post('/users', function(req, res) {
    var newUser = new User(req.body); 
    newUser.save(function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  });

  router.put('/users/:id', function(req, res) {
    var updatedUser = req.body;
    delete updatedUser._id;

    User.update({'_id': req.params.id}, updatedUser, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      res.json({msg: 'success'}); 
    });
  });

  router.delete('/users/:id', function(req, res) {
    User.remove({'_id': req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      res.json({msg: 'success'});
    });
  });
};
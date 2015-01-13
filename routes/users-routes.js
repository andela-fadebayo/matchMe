/*Andela MEAN final stack project - matchMe
Fiyinfoluwa S. Adebayo
12th January, 2015*/

//require express and body parser
var express = require('express');
var bodyParser = require('body-parser');

//create a new express router instance
var usersRouter = express.Router();

//require Users mongoose database
var Users = require('./../config/users-db');

//body parser encoder for POST and PUT requests
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

//redirect root '/' to '/api'
usersRouter.route('/')
  .get(function (request, response) {
    response.redirect('/api/users');
  });

usersRouter.route('/api')
  .get(function (request, response) {
    response.redirect('/api/users');
  });

usersRouter.route('/api/users')
  .get(function (request, response) {
    //get all users from matchMe database
    Users.find(function (err, allUsers) {
      if (err) return console.error(err);
      response.json(allUsers);
    });
  })
  .post(parseUrlencoded, function (request, response) {
    //grab POST request data from users and save in matchMe database
    Users.create(request.body, function (err, savedUser) {
      if(err) return console.error(err);
      response.status(201).json('New user created.');
    });
  });

usersRouter.route('/:name')
  .get(function (request, response) {
    //search for users based on their username
    Users.find({ username: request.params.name }, function (err, findUser) {
      if(err) {
        return console.error(err);
      } 
      else if (findUser.length === 0) {
        response.json("No user found with name '" + request.params.name + "'");
      }
      else {
        response.json(findUser);
      }
    });
  })
  .delete(function (request, response) {
    Users.findOneAndRemove({ username: request.params.name }, function (err, deleteUser) {
      if(err) return console.error(err);
      response.json('User deleted');
    });
  });

usersRouter.route('/:username/edit')
  .put(parseUrlencoded, function (request, response) {
    var query = { username: request.params.username };
    var update = request.body;
    var options = { new: true };
    Users.findOneAndUpdate(query, update, options, function (err, editUser) {
      if(err) return console.error(err);
      response.json(editUser);
    });
  });

//export usersRouter
module.exports = usersRouter;
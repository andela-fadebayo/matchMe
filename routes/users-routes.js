/*Andela MEAN final stack project - matchMe
Fiyinfoluwa S. Adebayo
12th January, 2015*/

//require express
var express = require('express');

//create a new express router instance
var usersRouter = express.Router();

//first, i'd test with a fixture

var users = [{
  "first_name": "Simeon",
  "last_name": "Flinxx",
  "username": "klintt",
  "sex": "Male",
  "age": 30,
  "state": "Lagos",
  "country": "Nigeria",
  "interest": [ "sports", "hiking", "swimming" ]
}]

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
    response.json(users);
  });


module.exports = usersRouter;
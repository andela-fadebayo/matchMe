/*Andela MEAN final stack project - matchMe
Fiyinfoluwa S. Adebayo
12th January, 2015*/

'use strict';

//require express
var express = require('express');

//create a new instance of express and assign to 'app'
var app = express();

//require users-routes file for all routes
var usersRoutes = require('./routes/users-routes');

//Allow for cross domain and access to others
var allowCrossDomain = function (request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  next();
};

app.use(allowCrossDomain);

//use users-routes file for all routes linked with users
app.use('/', usersRoutes);
app.use('/api', usersRoutes);
app.use('/api/users', usersRoutes);

//export app to be used by other files
module.exports = app;

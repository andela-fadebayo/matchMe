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

//use users-routes file for all routes linked with users
app.use('/', usersRoutes);
app.use('/api', usersRoutes);
app.use('/api/users', usersRoutes);

module.exports = app;

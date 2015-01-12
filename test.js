/*Andela MEAN final stack project - matchMe
Fiyinfoluwa S. Adebayo
12th January, 2015*/

var supertest = require('supertest');
var app = require('./app');

describe('my GET request to the api root path', function() {

  it('on GET, returns a 200 status code', function (done) {
    
    supertest(app)
      .get('/', '/api', '/api/users')
      .expect(200)
      .end(function (error) {
        if(error) throw error;
        done();
      });
  });
});

// describe('my redirect request to api-users', function() {

//   it('on GET, redirects the user', function (done) {

//     supertest(app)
//       .get('/', '/api/users')
//       .expect(200)
//       .end(function (error) {
//         if(error) throw error;
//         done();
//       });
//   });
// });
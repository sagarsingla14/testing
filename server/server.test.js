const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', () => {
  it('Should return Hello World !!' , (done) => {
    request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error : 'Server Error'
      });
    })
    .end(done);
  });
});


// describe('Users', () => {
  it('Finding me in friends !', (done) => {
    request(app)
    .get('/about')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Sagar',
        age: 19
      })
    })
    .end(done);
  });
// });

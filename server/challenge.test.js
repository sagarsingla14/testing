const express = require('express');
const expect = require('expect');
const request = require('supertest');

const app = require('./challenge').app;
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

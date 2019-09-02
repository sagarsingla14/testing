const express = require('express');
const expect = require('expect');
const request = require('supertest');

var app = express();

app.get('/about', (req,res) => {
  var users = [{
    name: 'Sagar',
    age: 19
  },
  {
    name: 'Rishika',
    age: 18
  },
  {
    name: 'Mukul',
    age: 19
  }];
  res.status(200).send(users);
});

module.exports.app = app;
app.listen(2000);




// var users = [{"Sagar" 20} , {"Mukul"  19} , {"Rishika" 18}];
// console.log(users);

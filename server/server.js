const express = require('express');
var app = express();

app.get('/' , (req,res) => {
  res.status(404).send({
    error : 'Server Error',
    name : 'Todo App v1.0'
  });
});

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

app.listen(3000);

module.exports.app = app;

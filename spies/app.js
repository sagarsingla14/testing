const db = require('./db.js');
console.log('Hello World');

module.exports.handleSignUp = (email, password) => {

  var user = db.saveUser({
    email : email,
    password : password
  });

  var inp = db.inputProper({
      email : email,
      password : password
  });
};

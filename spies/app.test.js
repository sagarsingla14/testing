
// Express have built in Spy
const expect = require('expect');

const rewire = require('rewire');

var app  = rewire('./app');
// app.__set__


describe('App Test', () => {
// Simple Way --
  it('Should Call the spy' , () => {
    var spy = expect.createSpy();
    spy('Sagar');
    expect(spy).toHaveBeenCalledWith('Sagar');
  });


// To check whether a function is inside another function
  var toCheck = {
    saveUser : expect.createSpy(),
    inputProper : expect.createSpy()
  };

  app.__set__('db',toCheck);

  var email = 'sagarrock1499@gmail.com';
  var password = '************';

  app.handleSignUp(email,password);
  it('Should Call Save User with user object', () => {
    expect(toCheck.saveUser).toHaveBeenCalled();
  });

  it('Should Check the input is proper' ,() => {
    expect(toCheck.inputProper).toHaveBeenCalled();
  });
});

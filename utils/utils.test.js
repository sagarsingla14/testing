const expect = require('expect');
const utils = require('./utils.js');


it('Should add two numbers',() => {
  var result = utils.add(40,44);
  expect(result).toBe(84).toBeA('number');
});

it('Should Square Two numbers',() => {
  var res = utils.square(18);
});


it('Name to be set !!', () => {
  var user = {Place: 'Delhi',Age: 20};
  var result = utils.setName(user,'Sagar Singla');
  expect(result).toInclude({
    firstName : "Sagar",
    secondName : "Singla"
  });
});

//  expect(result).toNotBe(84).toBeA('number');
// expect(result).toNotBe(84).toBeA('string');
// expect(arr).toExclude(1);
// expect(arr).toInclude(1);

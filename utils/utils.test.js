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

it('Should Return Add Async' , (done) => {
  utils.asyncAdd(10, 20 , (sum) => {
    expect(sum).toBe(30).toBeA('number');
    done();
  });
});

it('Should return Async Sqaure', (done) => {
  utils.asyncSquare(10 , (square) => {
    expect(square).toBe(100).toBeA('number');
    done();
  });
});





//  expect(result).toNotBe(84).toBeA('number');
// expect(result).toNotBe(84).toBeA('string');
// expect(arr).toExclude(1);
// expect(arr).toInclude(1);

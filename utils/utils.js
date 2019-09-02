module.exports.add = (a,b) => a+b;

module.exports.square = (a) => a*a;

module.exports.setName = (user ,fullname) => {
  var name = fullname.split(' ');
  user.firstName = name[0];
  user.secondName = name[1];
  return user;
};

module.exports.asyncAdd = (a , b ,callback) => {
  setTimeout(() => {
    callback(a + b);
  },100);
};

module.exports.asyncSquare = (x , callback) => {
  setTimeout(() => {
    callback(x*x);
  },100);
};

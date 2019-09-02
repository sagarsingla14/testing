module.exports.add = (a,b) => a+b;

module.exports.square = (a) => a*a;

module.exports.setName = (user ,fullname) => {
  var name = fullname.split(' ');
  user.firstName = name[0];
  user.secondName = name[1];
  return user;
};

const jwt = require('jsonwebtoken'),
  secret = "thesistergg";
  
module.exports = {
  sign: (payload) => {
    return jwt.sign(payload, secret, {expiresIn: '1D'});
  },
  verify: (token) => {
    return jwt.verify(token, secret);
  }
}
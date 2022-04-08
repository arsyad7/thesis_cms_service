const r = require('express').Router(),
  { login, register } = require('../controllers/auth');

r.post('/login', login);
r.post('/register', register);

module.exports = r;
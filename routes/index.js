const r = require('express').Router(),
  auth = require('./auth'),
  create = require('./create'),
  get = require('./get');

r.get('/', (req, res) => {
  res.send('Hello World');
})
r.use('/auth', auth);
r.use('/', create);
r.use('/', get)

module.exports = r;
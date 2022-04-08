const r = require('express').Router(),
  auth = require('./auth'),
  create = require('./create');

r.get('/', (req, res) => {
  res.send('Hello World');
})
r.use('/auth', auth);
r.use('/', create);

module.exports = r;
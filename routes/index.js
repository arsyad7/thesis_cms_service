const r = require('express').Router();

r.get('/', (req, res) => {
  res.send('Hello World');
})

module.exports = r;
const r = require('express').Router(),
  { getProduct, getUser, getVendor, getStatus, getContractType, getDepartement, getTransactionContract } = require('../controllers/get');

r.get('/products', getProduct);
r.get('/users', getUser);
r.get('/vendors', getVendor);
r.get('/status', getStatus);
r.get('/contract-type', getContractType);
r.get('/departments', getDepartement);
r.get('/transactions', getTransactionContract);

module.exports = r;
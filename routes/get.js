const r = require('express').Router(),
  { getProduct, getUser, getVendor, getStatus, getContractType, getDepartement, getTransactionContract, getRoles } = require('../controllers/get'),
  { Authentication } = require('../middlewares/auth');

r.use(Authentication);
r.get('/products', getProduct);
r.get('/users', getUser);
r.get('/vendors', getVendor);
r.get('/status', getStatus);
r.get('/contract-type', getContractType);
r.get('/departments', getDepartement);
r.get('/transactions', getTransactionContract);
r.get('/roles', getRoles);

module.exports = r;
const r = require('express').Router(),
  { getProduct, getUser, getVendor, getStatus, getContractType, getDepartement, getTransactionContract, getRoles, getTransactionById, getProductById, getVendorById, getStatusById, getContractTypeById, getUserById, getDepartmentById, getRolesById } = require('../controllers/get'),
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
r.get('/transactions/:id', getTransactionById);
r.get('/products/:id', getProductById);
r.get('/users/:id', getUserById);
r.get('/vendors/:id', getVendorById);
r.get('/status/:id', getStatusById);
r.get('/contract-type/:id', getContractTypeById);
r.get('/departments/:id', getDepartmentById);
r.get('/roles/:id', getRolesById);

module.exports = r;
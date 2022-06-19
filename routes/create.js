const r = require('express').Router(),
  { createProduct, createVendor, createStatus, createContractType, createDepartement, createTransactionContract, createRole } = require('../controllers/create')

r.post('/product', createProduct);
r.post('/vendor', createVendor);
r.post('/status', createStatus);
r.post('/contract-type', createContractType);
r.post('/departement', createDepartement);
r.post('/transaction', createTransactionContract);
r.post('/role', createRole);

module.exports = r
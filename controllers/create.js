const { tm_product, tm_vendor, tm_status, tm_contract_type, tm_department, tt_contract_header, tm_role } = require('../models');

module.exports = {
  createProduct: async (req, res, next) => {
    try {
      const { name, description = '' } = req.body;
      if (!name) throw { status: 400, message: 'mohon masukkan nama produk' };

      const produk = await tm_product.create({ name, description });
      res.status(201).json(produk);
    } catch (e) {
      next(e)
    }
  },
  createVendor: async (req, res, next) => {
    try {
      let { name, npwp, address, phone, email } = {...req.body};

      if (!name) throw { status: 400, message: 'mohon masukkan nama' };
      if (!npwp) throw { status: 400, message: 'mohon masukkan npwp' };
      if (!address) throw { status: 400, message: 'mohon masukkan alamat' };
      if (!phone) throw { status: 400, message: 'mohon masukkan phone number' }
      if (phone.slice(0, 2) !== '62') {
        if (phone.slice(0, 1) !== '0') throw { status: 400, message: 'Phone number harus diawali 62' }
        phone = `62${phone.slice(1)}`
      }
      if (!/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email || ''))
        throw { status: 400, message: 'Format email tidak valid' };

      const vendor = await tm_vendor.create({ name, npwp, address, phone, email })
      res.status(201).json(vendor);
    } catch (e) {
      next(e)
    }
  },
  createStatus: async (req, res, next) => {
    try {
      const { name } = req.body;
      if (!name) throw { status: 400, message: 'mohon masukkan nama' };
      const status = await tm_status.create({ name })
      res.status(201).json(status)
    } catch (e) { next(e) }
  },
  createContractType: async (req, res, next) => {
    try {
      const { name, description = '' } = req.body;
      if (!name) throw { status: 400, message: 'mohon masukkan nama produk' };

      const contractType = await tm_contract_type.create({ name, description });
      res.status(201).json(contractType)
    } catch (e) { next(e) }
  },
  createDepartement: async (req, res, next) => {
    try {
      const { name } = req.body;
      if (!name) throw { status: 400, message: 'mohon masukkan nama' };
      const status = await tm_department.create({ name })
      res.status(201).json(status)
    } catch (e) { next(e) }
  },
  createTransactionContract: async (req, res, next) => {
    try {
      const keys = ['product_id', 'name_jobs', 'location_jobs', 'est_period_start_jobs', 'est_period_end_jobs', 'est_amount_jobs', 'description', 'vendor_id', 'status_id', 'contract_type_id', 'created'],
        payload = { creator: req.user.id };

      for (let i = 0; i < keys.length; i++) {
        if (!Object.keys(req.body).includes(keys[i])) throw { status: 400, message: `mohon masukkan ${keys[i]}` }
        payload[keys[i]] = req.body[keys[i]]
      }

      const contract = await tt_contract_header.create(payload);
      res.status(201).json(contract);
    } catch (e) { next(e) }
  },
  createRole: async (req, res, next) => {
    try {
      const { name, suspend = '' } = req.body;
      if (!name) throw { status: 400, message: 'mohon masukkan nama' };
      const role = await tm_role.create({ name, suspend });
      res.status(201).json(role);
    } catch (e) {
      next(e)
    }
  }
}
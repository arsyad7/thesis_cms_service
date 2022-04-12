const { tm_product, tm_vendor, tm_status, tm_contract_type, tm_users, tm_department, tt_contract_header } = require('../models');

module.exports = {
  getProduct: async (req, res, next) => {
    try {
      const { page, perPage } = req.query,
        limit = perPage ? +perPage : 20,
        offset = page ? page * limit : 0,
        products = await tm_product.findAndCountAll({ limit, offset });
      res.status(200).json({ products, totalPage: Math.ceil(products.count / limit), currentPage: page ? page : 0 })
    } catch (e) {
      next(e)
    }
  },
  getVendor: async (req, res, next) => {
    try {
      const { page, perPage } = req.query,
        limit = perPage ? +perPage : 20,
        offset = page ? page * limit : 0,
        vendors = await tm_vendor.findAndCountAll({ limit, offset });
      res.status(200).json({ vendors, totalPage: Math.ceil(vendors.count / limit), currentPage: page ? page : 0 })
    } catch (e) {
      next(e)
    }
  },
  getStatus: async (req, res, next) => {
    try {
      const { page, perPage } = req.query,
        limit = perPage ? +perPage : 20,
        offset = page ? page * limit : 0,
        status = await tm_status.findAndCountAll({ limit, offset });
      res.status(200).json({ status, totalPage: Math.ceil(status.count / limit), currentPage: page ? page : 0 })
    } catch (e) {
      next(e)
    }
  },
  getContractType: async (req, res, next) => {
    try {
      const { page, perPage } = req.query,
        limit = perPage ? +perPage : 20,
        offset = page ? page * limit : 0,
        contract_types = await tm_contract_type.findAndCountAll({ limit, offset });
      res.status(200).json({ contract_types, totalPage: Math.ceil(contract_types.count / limit), currentPage: page ? page : 0 })
    } catch (e) {
      next(e)
    }
  },
  getUser: async (req, res, next) => {
    try {
      const { page, perPage, orderBy, sortBy, userId, departmentId } = req.query,
        limit = perPage ? +perPage : 20,
        offset = page ? page * limit : 0,
        query = {limit, where: {}, offset, order: [[ orderBy ? orderBy : 'id', sortBy ? sortBy : 'DESC']]};

      if (userId) query.where.id = userId;
      if (departmentId) query.where.departement_id = departmentId;

      const users = await tm_users.findAndCountAll(query);
      res.status(200).json({ users, totalPage: Math.ceil(users.count / limit), currentPage: page ? page : 0 })
    } catch (e) {
      next(e)
    }
  },
  getDepartement: async (req, res, next) => {
    try {
      const { page, perPage } = req.query,
        limit = perPage ? +perPage : 20,
        offset = page ? page * limit : 0,
        departements = await tm_department.findAndCountAll({ limit, offset });
      res.status(200).json({ departements, totalPage: Math.ceil(departements.count / limit), currentPage: page ? page : 0 })
    } catch (e) {
      next(e)
    }
  },
  getTransactionContract: async (req, res, next) => {
    try {
      const { page, perPage } = req.query,
        limit = perPage ? +perPage : 20,
        offset = page ? page * limit : 0,
        transactions = await tt_contract_header.findAndCountAll({ limit, offset });
      res.status(200).json({ transactions, totalPage: Math.ceil(transactions.count / limit), currentPage: page ? page : 0 })
    } catch (e) {
      next(e)
    }
  }
}
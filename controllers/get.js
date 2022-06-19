const { tm_product, tm_vendor, tm_status, tm_contract_type, tm_users, tm_department, tt_contract_header, tm_role } = require('../models');
const tm_roles = require('../models/tm_roles');

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
        transactions = await tt_contract_header.findAndCountAll({ limit, offset, include: [{ model: tm_users }, { model: tm_vendor }, { model: tm_contract_type }, { model: tm_status }] });
      res.status(200).json({ transactions, totalPage: Math.ceil(transactions.count / limit), currentPage: page ? page : 0 })
    } catch (e) {
      next(e)
    }
  },  
  getRoles: async (req, res, next) => {
    try {
      const { page, perPage} = req.query,
        limit = perPage ? +perPage : 20,
        offset = page ? page * limit : 0,
        roles = await tm_role.findAndCountAll({limit, offset});
      res.status(200).json({roles, totalPage: Math.ceil(roles.count / limit), currentPage: page ? page : 0})
    } catch (err) {
      next(err)
    }
  },
  getTransactionById: async (req, res, next) => {
    try {
      const { id } = req.params,
        transaction = await tt_contract_header.findOne({ where: { id }, include: [{ model: tm_users }, { model: tm_vendor }, { model: tm_contract_type }, { model: tm_status }] });
      if (!transaction) throw { status: 404, message: "transaction not found" };
      res.status(200).json(transaction)
    } catch (e) {
      next(e)
    }
  },
  getProductById: async (req, res, next) => {
    try {
      const { id } = req.params,
        product = await tm_product.findOne({ where: { id } });
      if (!product) throw { status: 404, message: "product not found" };
      res.status(200).json(product)
    } catch (e) {
      next(e)
    }
  },
  getVendorById: async (req, res, next) => {
    try {
      const { id } = req.params,
        vendor = await tm_vendor.findOne({ where: { id } });
      if (!vendor) throw { status: 404, message: "vendor not found" };
      res.status(200).json(vendor)
    } catch (e) {
      next(e)
    }
  },
  getStatusById: async (req, res, next) => {
    try {
      const { id } = req.params,
        status = await tm_status.findOne({ where: { id } });
      if (!status) throw { status: 404, message: "Status not found" };
      res.status(200).json(status)
    } catch (e) {
      next(e)
    }
  },
  getContractTypeById: async (req, res, next) => {
    try {
      const { id } = req.params,
        contract_type = await tm_contract_type.findOne({ where: { id } });
      if (!contract_type) throw { status: 404, message: "COntract Type not found" };
      res.status(200).json(contract_type)
    } catch (e) {
      next(e)
    }
  },
  getUserById: async (req, res, next) => {
    try {
      const { id } = req.params,
        user = await tm_users.findOne({ where: { id } });
      if (!user) throw { status: 404, message: "user not found"};
      res.status(200).json(user)
    } catch (e) {
      next(e)
    }
  },
  getDepartmentById: async (req, res, next) => {
    try {
      const { id } = req.params,
        departement = await tm_department.findOne({ where: { id } });
      if (!departement) throw { status: 404, message: "department not found" };
      res.status(200).json(departement)
    } catch (e) {
      next(e)
    }
  },
  getRolesById: async (req, res, next) => {
    try {
      const { id } = req.params,
        role = await tm_role.findOne({ where: { id } });
      if (!role) throw { status: 404, message: "role not found" };
      res.status(200).json(role) 
    } catch (e) {
      next(e)
    }
  }
}
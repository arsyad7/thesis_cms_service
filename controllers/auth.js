const { tm_users, sequelize } = require('../models'),
  { password: valpass } = require('../helpers/validate'),
  { compare } = require('../helpers/bcryptjs'),
  { sign } = require('../helpers/jwt');

module.exports = {
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username) throw { status: 400, message: 'mohon masukkan username' };
      if (!password) throw { status: 400, message: 'mohon masukkan password' };

      const user = await tm_users.findOne({ where: { username: sequelize.where(sequelize.fn('LOWER', sequelize.col('username')), username.toLowerCase()) } });
      if (!user) throw { status: 404, message: 'akun belum terdaftar' };

      const isPassValid = compare(password, user.password);
      if (!isPassValid) throw { status: 400, message: 'password salah' };

      const token = sign({ username: user.username, id: user.id, departement_id: user.departement_id, role_id: user.role_id });
      res.status(200).json({ access_token: token })
    } catch (e) {
      next(e)
    }
  },
  register: async (req, res, next) => {
    try {
      const { username, password, departement_id } = req.body;

      if (!username) throw { status: 400, message: 'mohon masukkan username' };
      if (!departement_id) throw { status: 400, message: 'mohon masukkan departement user' };
      valpass(password);

      const isUsernameUnique = await tm_users.findOne({ where: { username: username.toLowerCase() } });
      if (isUsernameUnique) throw { status: 400, message: 'username sudah terdaftar' };

      const user = await tm_users.create({ username: username.toLowerCase(), ...req.body });
      res.status(201).json(user)
    } catch (e) {
      next(e)
    }
  }
}
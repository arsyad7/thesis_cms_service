
module.exports = {
  login: async (req, res, next) => {
    try {
      res.status(200).json('ini login')
    } catch (e) {
      next()
    }
  },
  register: async (req, res, next) => {
    try {
      const { username, password, departement_id } = req.body;
      
      res.status(201).json('ini register')
    } catch (e) {
      next(e)
    }
  }
}
const { verify } = require('../helpers/jwt');

exports.Authentication = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw { status: 401, message: 'Authentication Error' }

    const _authorization = authorization.split(' ');
    if (_authorization[0] !== 'Bearer') throw { status: 401, message: 'Invalid Format Authentication' };
    if (!_authorization[1]) throw { status: 401, message: 'Authentication Error' }

    const payload = verify(_authorization[1])
    if (!payload) throw { status: 401, message: 'Invalid Token' }

    req.user = payload
    next()
  } catch (e) {
    next(e)
  }
}
const { hashSync, compareSync, genSaltSync } = require('bcryptjs');

module.exports = {
	hash: password => hashSync(password, genSaltSync(10)),
	compare: (password, hash_password) => compareSync(password, hash_password)
}
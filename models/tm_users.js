'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class tm_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tm_users.hasOne(models.tm_department, { foreignKey: 'departement_id' });
      tm_users.hasMany(models.tt_contract_header, { foreignKey: 'creator' });
    }
  };
  tm_users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    departement_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tm_users',
    timestamps: false,
    hooks: {
      beforeCreate(user) {
        user.password = hash(user.password)
      }
    }
  });
  return tm_users;
};
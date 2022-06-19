'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tm_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tm_role.hasMany(models.tm_users, { foreignKey: 'role_id' });
    }
  };
  tm_role.init({
    name: DataTypes.STRING,
    suspend: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tm_role',
    timestamps: false
  });
  return tm_role;
};
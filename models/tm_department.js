'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tm_department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tm_department.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tm_department',
  });
  return tm_department;
};
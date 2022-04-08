'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tm_contract_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tm_contract_type.hasMany(models.tt_contract_header, { foreignKey: 'contract_type_id' });
    }
  };
  tm_contract_type.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tm_contract_type',
    timestamps: false,
    freezeTableName: 'tm_contract_type'
  });
  return tm_contract_type;
};
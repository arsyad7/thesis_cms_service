'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tm_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tm_status.hasMany(models.tt_contract_header, { foreignKey: 'status_id' });
    }
  };
  tm_status.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tm_status',
    timestamps: false,
    freezeTableName: 'tm_status'
  });
  return tm_status;
};
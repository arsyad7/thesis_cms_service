'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tm_contract_header extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tm_contract_header.init({
    product_id: DataTypes.INTEGER,
    name_jobs: DataTypes.STRING,
    location_jobs: DataTypes.STRING,
    est_period_start_jobs: DataTypes.DATE,
    est_period_end_jobs: DataTypes.DATE,
    est_amount_jobs: DataTypes.INTEGER,
    description: DataTypes.STRING,
    vendor_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    contract_type_id: DataTypes.INTEGER,
    creator: DataTypes.INTEGER,
    created: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tm_contract_header',
  });
  return tm_contract_header;
};
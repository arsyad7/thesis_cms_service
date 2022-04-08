'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tt_contract_header extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tt_contract_header.belongsTo(models.tm_product, { foreignKey: 'product_id' });
      tt_contract_header.belongsTo(models.tm_vendor, { foreignKey: 'vendor_id' });
      tt_contract_header.belongsTo(models.tm_status, { foreignKey: 'status_id' });
      tt_contract_header.belongsTo(models.tm_contract_type, { foreignKey: 'contract_type_id' });
      tt_contract_header.belongsTo(models.tm_users, { foreignKey: 'creator' });
      tt_contract_header.hasMany(models.tt_attachment_header, { foreignKey: 'header' });
    }
  };
  tt_contract_header.init({
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
    modelName: 'tt_contract_header',
    timestamps: false,
    freezeTableName: 'tt_contract_header'
  });
  return tt_contract_header;
};
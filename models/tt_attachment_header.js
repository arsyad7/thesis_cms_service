'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tt_attachment_header extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tt_attachment_header.belongsTo(models.tt_contract_header, { foreignKey: 'header' });
      tt_attachment_header.hasMany(models.tt_attachment_details, { foreignKey: 'attachement_id' });
    }
  };
  tt_attachment_header.init({
    header: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tt_attachment_header',
    timestamps: false
  });
  return tt_attachment_header;
};
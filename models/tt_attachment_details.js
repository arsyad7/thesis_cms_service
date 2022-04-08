'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tt_attachment_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tt_attachment_details.belongsTo(models.tt_attachment_header, { foreignKey: 'attachement_id' });
    }
  };
  tt_attachment_details.init({
    attachement_id: DataTypes.INTEGER,
    path: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tt_attachment_details',
    timestamps: false
  });
  return tt_attachment_details;
};
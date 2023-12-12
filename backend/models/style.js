'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Style extends Model {
    static associate(models) {
      this.hasMany(models.Design, { foreignKey: 'style_id' });
    }
  }
  Style.init({
    id: DataTypes.INTEGER,
    style_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Style',
  });
  return Style;
};

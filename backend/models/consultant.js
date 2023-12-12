'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consultant extends Model {
    static associate(models) {
      this.hasMany(models.Design, { foreignKey: 'consultant_id' });
    }
  }
  Consultant.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Consultant',
  });
  return Consultant;
};

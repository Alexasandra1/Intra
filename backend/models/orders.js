'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      this.belongsTo(models.Design, { foreignKey: 'design_id' });
    }
  }
  Orders.init({
    id: DataTypes.INTEGER,
    customer_name: DataTypes.STRING,
    customer_phone: DataTypes.STRING,
    customer_email: DataTypes.STRING,
    design_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};

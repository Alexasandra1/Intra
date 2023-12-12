'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Design extends Model {
    static associate(models) {
      this.belongsTo(models.IntraUser, { foreignKey: 'designer_id' });
      this.belongsTo(models.Style, { foreignKey: 'style_id' });
      this.belongsTo(models.Design_photos, { foreignKey: 'photo_id' });
      this.belongsTo(models.Consultant, { foreignKey: 'consultant_id' });
      this.belongsTo(models.Room_type, { foreignKey: 'room_id' });
      this.hasMany(models.Orders, { foreignKey: 'design_id' });
    }
  }
  Design.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    designer_id: DataTypes.INTEGER,
    year: DataTypes.STRING,
    style_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    photo_id: DataTypes.INTEGER,
    consultant_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Design',
  });
  return Design;
};

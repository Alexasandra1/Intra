'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room_type extends Model {
    static associate(models) {
      this.hasMany(models.Design, { foreignKey: 'room_id' });
    }
  }
  Room_type.init({
    id: DataTypes.INTEGER,
    room: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room_type',
  });
  return Room_type;
};

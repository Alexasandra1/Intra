'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Design_photos extends Model {
    static associate(models) {
      this.hasMany(models.Design, { foreignKey: 'photo_id' });
    }
  }
  Design_photos.init({
    id: DataTypes.INTEGER,
    photos: DataTypes.Array(DataTypes.BLOB('long'))
  }, {
    sequelize,
    modelName: 'Design_photos',
  });
  return Design_photos;
};

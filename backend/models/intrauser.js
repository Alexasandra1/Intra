'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.Role, { foreignKey: 'role_id' });
      this.hasMany(models.Design, { foreignKey: 'designer_id' });
    }
  }
  User.init({
    id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

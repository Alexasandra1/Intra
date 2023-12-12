'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.hasMany(models.IntraUser, { foreignKey: 'role_id' });
    }
  }
  Role.init({
    id: DataTypes.INTEGER,
    role_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};

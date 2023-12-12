'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IntraUser', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      role_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Role',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      name: {
        type: Sequelize.STRING
      },
      login: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.BLOB('long')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IntraUser');
  }
};
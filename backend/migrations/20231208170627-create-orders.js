'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_name: {
        type: Sequelize.STRING
      },
      customer_phone: {
        type: Sequelize.STRING
      },
      customer_email: {
        type: Sequelize.STRING
      },
      design_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Design',
          key:'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
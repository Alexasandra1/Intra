'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Design', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      designer_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'IntraUser',
          key:'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      year: {
        type: Sequelize.STRING
      },
      style_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Style',
          key:'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      price: {
        type: Sequelize.DECIMAL
      },
      photo_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Design_photos',
          key:'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      consultant_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Consultant',
          key:'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      room_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Room_type',
          key:'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Design');
  }
};
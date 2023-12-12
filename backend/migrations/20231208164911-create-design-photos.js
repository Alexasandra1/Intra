'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Design_photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photos: {
        type: Sequelize.ARRAY(Sequelize.BLOB('long'))
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Design_photos');
  }
};
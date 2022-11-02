'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('seasons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: Sequelize.ENUM('Winter', 'Spring', 'Summer', 'Fall'),
      year: Sequelize.DATEONLY,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      } });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('seasons');
  }
};

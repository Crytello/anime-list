'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mangas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title_jp: Sequelize.STRING,
      title_eng: Sequelize.STRING,
      title_ger: Sequelize.STRING,
      status: Sequelize.STRING,
      end_date: Sequelize.DATEONLY,
      publisher: Sequelize.STRING,
      current_volume: Sequelize.INTEGER,
      total_number_volumes: Sequelize.INTEGER,
      release_year: Sequelize.DATEONLY,
      rating: Sequelize.INTEGER,
      image: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mangas');
  },
};

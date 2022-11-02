'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('animes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title_jp: Sequelize.STRING,
      title_eng: Sequelize.STRING,
      title_ger: Sequelize.STRING,
      status: Sequelize.ENUM('Upcoming', 'Ongoing', 'Beendet'),
      end_date:Sequelize.DATEONLY,
      studio:Sequelize.STRING,
      source:Sequelize.STRING,
      current_episode_downloaded:Sequelize.INTEGER,
      current_episode_watched:Sequelize.INTEGER,
      total_number_episodes:Sequelize.INTEGER,
      release_year:Sequelize.DATE,
      rating:Sequelize.INTEGER,
      image:Sequelize.STRING,
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
    await queryInterface.dropTable('animes');
  }
};

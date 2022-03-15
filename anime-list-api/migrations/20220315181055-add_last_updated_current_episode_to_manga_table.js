'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'mangas',
      'lastUpdatedAtCurrentEpisode',
      Sequelize.DATE
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'mangas',
      'lastUpdatedAtCurrentEpisode',
    );
  }
};

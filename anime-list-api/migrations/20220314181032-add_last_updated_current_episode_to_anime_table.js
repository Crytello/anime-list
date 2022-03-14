'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'animes',
      'lastUpdatedAtCurrentEpisode',
      Sequelize.DATE
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'animes',
      'lastUpdatedAtCurrentEpisode',
    );
  }
};

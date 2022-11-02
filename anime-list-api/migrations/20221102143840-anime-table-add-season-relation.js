'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'animes',
      'season_id', {
        type: Sequelize.INTEGER,
        references: {
            model: 'seasons',
            key: 'id',
        }
      },
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'animes',
      'season_id',
    );
  }
};

'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'animes',
      'title_ger',
      Sequelize.STRING
    );
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'animes',
      'title_ger',
    );
  }
};

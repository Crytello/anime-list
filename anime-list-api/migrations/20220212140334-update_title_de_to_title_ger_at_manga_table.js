'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn('mangas','title_de','title_ger');
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn('mangas','title_ger','title_de');
  }
};

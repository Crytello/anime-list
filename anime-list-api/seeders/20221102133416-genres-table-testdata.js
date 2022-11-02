'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'genres',
      [
        {
          title: 'Action',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Isekai',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Romance',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Shounen',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Comedy',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Drama',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genres', null, {});
  },
};

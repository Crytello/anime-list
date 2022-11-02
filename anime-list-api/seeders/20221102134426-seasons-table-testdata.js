'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'seasons',
      [
        {
          type: 'Winter',
          year: new Date('2019'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Spring',
          year: new Date('2019'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Summer',
          year: new Date('2019'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Fall',
          year: new Date('2019'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Winter',
          year: new Date('2020'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('seasons', null, {});
  },
};

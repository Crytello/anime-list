'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'mangas',
      [
        {
          title_jp: 'ワンパンマン',
          title_eng: 'One-Punch Man',
          title_ger: 'One-Punch Man',
          status: 'Ongoing',
          publisher: 'Kazé Manga',
          current_volume: 22,
          total_number_volumes: 24,
          release_year: new Date('2016'),
          rating: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title_jp: 'チェンソーマン',
          title_eng: 'Solo Leveling',
          title_ger: 'Solo Leveling',
          status: 'Ongoing',
          publisher: 'Altraverse GmbH',
          current_volume: '6',
          total_number_volumes: '6',
          release_year: new Date('2020'),
          rating: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mangas', null, {});
  },
};

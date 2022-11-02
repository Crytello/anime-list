'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'animes',
      [
        {
          title_jp: 'ドクターストーン',
          title_eng: 'Dr. Stone',
          title_ger: 'Dr. Stone',
          status: 'Beendet',
          end_date: new Date('2019-03-12'),
          studio: 'TMS Entertainment',
          source: 'Crunchyroll',
          current_episode_downloaded: 24,
          current_episode_watched: 24,
          total_number_episodes: 24,
          release_year: new Date('2019'),
          rating: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title_jp: 'チェンソーマン',
          title_eng: 'Chainsaw Man',
          title_ger: 'Chainsaw Man',
          status: 'Ongoing',
          studio: 'MAPPA',
          source: 'Crunchyroll',
          current_episode_downloaded: '0',
          current_episode_watched: '3',
          total_number_episodes: '12',
          release_year: new Date('2019'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('animes', null, {});
  },
};

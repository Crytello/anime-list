module.exports = (sequelize, Sequelize) => {
  const Anime = sequelize.define('anime', {
    title_jp: {
      type: Sequelize.STRING,
    },
    title_eng: {
      type: Sequelize.STRING,
    },
    title_ger: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM('Upcoming', 'Ongoing', 'Beendet'),
    },
    end_date: {
      type: Sequelize.DATEONLY,
    },
    studio: {
      type: Sequelize.STRING,
    },
    source: {
      type: Sequelize.STRING,
    },
    current_episode_downloaded: {
      type: Sequelize.INTEGER,
    },
    current_episode_watched: {
      type: Sequelize.INTEGER,
    },
    total_number_episodes: {
      type: Sequelize.INTEGER,
    },
    release_year: {
      type: Sequelize.DATE,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.STRING,
    },
  });

  return Anime;
};

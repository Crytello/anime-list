module.exports = (sequelize, Sequelize) => {
    const Anime = sequelize.define("anime", {
      title_jp: {
        type: Sequelize.STRING
      },
      title_eng: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('coming up', 'ongoing', 'finished')
      },
      end_date: {
        type: Sequelize.DATEONLY
      },
      studio: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      current_episode_downloaded: {
        type: Sequelize.INTEGER
      },
      current_episode_watched: {
        type: Sequelize.INTEGER
      },
      total_number_episodes: {
        type: Sequelize.INTEGER
      },
      release_year: {
        type: Sequelize.DATEONLY
      },
      rating: {
        type: Sequelize.INTEGER
      }
    });
  
    return Anime;
  };
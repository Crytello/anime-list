module.exports = (sequelize, Sequelize) => {
    const Manga = sequelize.define('manga', {
      title_jp: {
        type: Sequelize.STRING
      },
      title_eng: {
        type: Sequelize.STRING
      },
      title_ger: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('Upcoming', 'Ongoing', 'Beendet')
      },
      end_date: {
        type: Sequelize.DATE
      },
      publisher: {
        type: Sequelize.STRING
      },
      current_volume: {
        type: Sequelize.INTEGER
      },
      total_number_volumes: {
        type: Sequelize.INTEGER
      },
      release_year: {
        type: Sequelize.DATEONLY
      }, 
      rating: {
        type: Sequelize.INTEGER
      },
      image: { 
        type: Sequelize.STRING,
      }
    });
  
    return Manga;
  };
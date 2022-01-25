module.exports = (sequelize, Sequelize) => {
    const Season = sequelize.define('season', {
        type: {
          type: Sequelize.ENUM('Winter', 'Spring', 'Summer', 'Fall')
        },
        year: {
          type: Sequelize.DATE
        },
      });
  
    return Season;
  };
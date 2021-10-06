module.exports = (sequelize, Sequelize) => {
    const ReleaseSeason = sequelize.define('releaseSeason', {
      title: {
        type: Sequelize.ENUM('winter', 'spring', 'summer', 'fall')
      }
    });
  
    return ReleaseSeason;
  };
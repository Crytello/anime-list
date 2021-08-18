module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define("group", {
      title: {
        type: Sequelize.STRING
      }
    });
  
    return Group;
  };
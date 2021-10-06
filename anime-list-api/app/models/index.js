const dbConfig = require('../../config/db.config')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.anime = require('./anime.model.js')(sequelize, Sequelize);
db.genre = require('./genre.model.js')(sequelize, Sequelize);
db.group = require('./group.model.js')(sequelize, Sequelize);
db.releaseSeason = require('./release-season.model.js')(sequelize, Sequelize);

db.anime.belongsToMany(db.genre, {
    through: 'anime_genre',
    as: 'genres',
    foreignKey: 'anime_id',
  });

db.genre.belongsToMany(db.anime, {
    through: 'anime_genre',
    as: 'animes',
    foreignKey: 'genre_id',
});

db.releaseSeason.hasMany(db.anime, { as: 'animes' });
db.anime.belongsTo(db.releaseSeason, {
  foreignKey: 'release_season_id',
  as: 'release_season',
});

db.group.hasMany(db.anime, { as: 'animes' });
db.anime.belongsTo(db.group, {
  foreignKey: 'group_id',
  as: 'group',
});

module.exports = db;
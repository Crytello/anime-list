const dbConfig = require('../../config/db.config')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
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
db.manga = require('./manga.model.js')(sequelize, Sequelize);
db.genre = require('./genre.model.js')(sequelize, Sequelize);
db.season = require('./season.model.js')(sequelize, Sequelize);

db.anime.belongsToMany(db.genre, {
    through: 'anime_genre',
    as: 'genres',
    foreignKey: 'anime_id',
});

db.anime.belongsToMany(db.season, {
  through: 'anime_season',
  as: 'seasons',
  foreignKey: 'anime_id',
});

db.manga.belongsToMany(db.genre, {
  through: 'manga_genre',
  as: 'genres',
  foreignKey: 'manga_id',
});

db.genre.belongsToMany(db.anime, {
    through: 'anime_genre',
    as: 'animes',
    foreignKey: 'genre_id',
});

db.genre.belongsToMany(db.manga, {
  through: 'manga_genre',
  as: 'mangas',
  foreignKey: 'genre_id',
});

db.season.belongsToMany(db.anime, {
  through: 'anime_season',
  as: 'animes',
  foreignKey: 'season_id',
});

module.exports = db;
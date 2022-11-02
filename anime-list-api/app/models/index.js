const dbConfig = require('../../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
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

db.genre.belongsToMany(db.anime, {
  through: 'anime_genre',
  as: 'animes',
  foreignKey: 'genre_id',
});

db.manga.belongsToMany(db.genre, {
  through: 'manga_genre',
  as: 'genres',
  foreignKey: 'manga_id',
});

db.genre.belongsToMany(db.manga, {
  through: 'manga_genre',
  as: 'mangas',
  foreignKey: 'genre_id',
});

db.anime.belongsTo(db.season, {
  foreignKey: 'season_id',
  sourceKey: 'season_id',
  as: 'seasons',
});
db.season.hasMany(db.anime, {
  foreignKey: 'season_id',
  as: 'animes',
});

module.exports = db;

const db = require("../models");
const Anime = db.anime;
const Op = db.Sequelize.Op;

// Create and Save a new Anime
exports.create = (anime) => {
    return Anime.create({
        id: anime.id,
        title_jp: anime.title_jp,
        title_eng: anime.title_eng, 
        status: anime.status, 
        end_date: anime.end_date, 
        studio: anime.studio, 
        source: anime.source, 
        current_episode_downloaded: anime.current_episode_downloaded, 
        current_episode_watched: anime.current_episode_watched, 
        total_number_episodes: anime.total_number_episodes, 
        release_year: anime.release_year, 
        rating: anime.rating,  
        releaseSeasonId: anime.releaseSeasonId, 
        release_season_id: anime.release_season_id, 
        groupId: anime.groupId, 
        group_id: anime.group_id
      }).catch((err) => {
          console.log(">> Error while creating Anime: ", err);
        });
};

// Retrieve all Animes from the database.
exports.findAll = () => {
    return Anime.findAll({
        include: [
          {
            model: Anime,
            as: "animes",
            attributes: [
                "id",
                "title_jp", 
                "title_eng", 
                "status", 
                "end_date", 
                "studio", 
                "source", 
                "current_episode_downloaded", 
                "current_episode_watched", 
                "total_number_episodes", 
                "release_year", 
                "rating", 
                "createdAt", 
                "updatedAt", 
                "releaseSeasonId", 
                "release_season_id", 
                "groupId", 
                "group_id"
            ],
            through: {
              attributes: [],
            }
          },
        ],
      })
        .then((animes) => {
          return animes;
        })
        .catch((err) => {
          console.log(">> Error while retrieving Animes: ", err);
        });
};

// Find a single Anime with an id
exports.findOne = (req, res) => {
  
};

// Update an Anime by the id in the request
exports.update = (req, res) => {
  
};

// Delete an Anime with the specified id in the request
exports.delete = (req, res) => {
  
};
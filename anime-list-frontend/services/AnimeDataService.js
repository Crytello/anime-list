import http from "../http-common";

class AnimeDataService {
    getAll() {
        return http.get("/animes");
      }
}

export default new AnimeDataService();
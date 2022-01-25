<template>
    <h3>AnimeList</h3>
    Neuen Anime hinzufügen:
    <label for="title_jp">Japanischer Titel:</label>
    <input id="title_jp" v-model="anime.title_jp" />
    <label for="title_eng">Englischer Titel:</label>
    <input id="title_eng" v-model="anime.title_eng" />
    <label for="studio">Studio:</label>
    <input id="studio" v-model="anime.studio" />
    <label for="source">Quelle:</label>
    <input id="source" v-model="anime.source" />
    <label for="current_episode_downloaded">Aktuelle Folge gedownloaded:</label>
    <input id="current_episode_downloaded" v-model="anime.current_episode_downloaded" />
    <label for="current_episode_watched">Aktuelle Folge geguckt:</label>
    <input id="current_episode_watched" v-model="anime.current_episode_watched" />
    <label for="total_number_episodes">Gesamtanzahl Folgen:</label>
    <input id="total_number_episodes" v-model="anime.total_number_episodes" />
    <label for="season">Staffel:</label>
    <input id="season" v-model="anime.season" />
    <label for="end_date">Enddatum:</label>
    <input id="end_date" v-model="anime.end_date" />
    <label for="status">Status:</label> 
    <select v-model="anime.status" label="statusOptions">  
      <option v-for="statusOption in statusOptions" :key="statusOption.value">
        {{statusOption.title}}
      </option>
    </select>
    <label for="release_season">Season:</label>
    <input id="release_season" v-model="anime.release_season" />
    <label for="release_year">Jahr:</label>
    <input id="release_year" v-model="anime.release_year" />
    <label for="rating">Bewertung (1-10):</label>
    <input id="rating" v-model="anime.rating" />
    <button @click="saveAnime()" type="submit">Anime hinzufügen</button>


    <form @submit.prevent>
        <AnimeListTableView :animes='animes' 
                            :deleteAnime='deleteAnime' 
                            :updateAnime='updateAnime'/>

    

    
  </form>
</template>
<script>
import AnimeListTableView from '@/components/AnimeListTableView.vue';
import axios from "axios";
export default {
  data() {
    return {
      statusOptions: [
          {
            title: "Upcoming", value: "Upcoming"
          },
          {
            title: "Ongoing", value: "Ongoing"
          },
          {
            title: "Beendet", value: "Beendet"
          }
        ],
        animes: [],
        anime: {
          title_jp: "",
          title_eng: "",
          season: "",
          release_season: "",
          release_year: "",
        }
    }
  },
  created () {
    this.getAllAnimes();
  },
  methods: {
    async getAllAnimes() {
      try {
        const response = await axios.get("http://localhost:8081/animes/");
        this.animes = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async saveAnime() {
      try {
          await axios.post("http://localhost:8081/animes", this.anime)
          .then(function ( response ) {
            //handle success
            console.log(response)
          }.bind(this));
      } catch (err) {
        console.log(err);
      }
    },
    deleteAnime(anime) {
        this.animes.splice(this.animes.indexOf(anime), 1);
    },
    updateAnime(anime) {
        this.animes.splice(this.animes.indexOf(anime), anime)
    }
  },
    components: {
        AnimeListTableView
    },
}</script>
<style></style>
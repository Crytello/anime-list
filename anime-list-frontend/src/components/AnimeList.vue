<template>
    <h3>AnimeList</h3>
    Neuen Anime hinzufügen:
    <label for="title_jp">Japanischer Titel:</label>
    <input id="title_jp" v-model="anime.title_jp" />
    <label for="title_eng">Englischer Titel:</label>
    <input id="title_eng" v-model="anime.title_eng" />
    <label for="season">Staffel:</label>
    <input id="season" v-model="anime.season" />
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
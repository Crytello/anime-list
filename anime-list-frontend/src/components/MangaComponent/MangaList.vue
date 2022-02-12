<template>
  <form @submit.prevent>
    <MangaListTableView :mangas='mangas' 
                            :deleteManga='deleteManga' 
                            :updateManga='updateManga'/>
  </form>

  <h3>MangaList</h3>
  Neuen Manga hinzufügen:
  <label for="title_jp">Japanischer Titel:</label>
  <input id="title_jp" v-model="manga.title_jp" />
  <label for="title_eng">Englischer Titel:</label>
  <input id="title_eng" v-model="manga.title_eng" />
  <label for="title_ger">Deutscher Titel:</label>
  <input id="title_ger" v-model="manga.title_ger" />
  <label for="publisher">Verlag:</label>
  <input id="publisher" v-model="manga.publisher" />
  <label for="end_date">Enddatum:</label>
  <input id="end_date" v-model="manga.end_date" />
  <label for="current_volume">Aktueller Band:</label>
  <input id="current_volume" v-model="manga.current_volume" />
  <label for="status">Status:</label> 
  <select v-model="manga.status" label="statusOptions">  
    <option v-for="statusOption in statusOptions" :key="statusOption.value">
      {{statusOption.title}}
    </option>
  </select>
  <label for="total_number_volumes">Gesamzanzahl Bände:</label>
  <input id="total_number_volumes" v-model="manga.total_number_volumes" />
  <label for="release_year">Jahr:</label>
  <input id="release_year" v-model="manga.release_year" />
  <label for="rating">Bewertung von 1-10:</label>
  <input id="rating" v-model="manga.rating" />
  <input type="file" class="form-control-file" name="manga-image">
  <button @click="saveManga()" type="submit">Manga hinzufügen</button> 
</template>
<script>
import MangaListTableView from '@/components/MangaComponent/MangaListTableView.vue';
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
        mangas: [],
        manga: {
          title_jp: "",
          title_eng: "",
          season: "",
          release_season: "",
          release_year: "",
        }
    }
  },
  created () {
    this.getAllMangas();
  },
  methods: {
    async getAllMangas() {
      try {
        const response = await axios.get("http://localhost:8081/mangas/");
        this.mangas = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async saveManga() {
      try {
        console.log(this.manga)
          await axios.post("http://localhost:8081/mangas", this.manga)
          .then(function ( response ) {
            console.log(response)
          }.bind(this));
      } catch (err) {
        console.log(err);
      }
    },
    deleteManga(manga) {
      this.mangas.splice(this.mangas.indexOf(manga), 1);
    },
    updateManga(manga) {
      this.mangas.splice(this.mangas.indexOf(manga), manga)
    }
  },
    components: {
        MangaListTableView
    },
}</script>
<style></style>
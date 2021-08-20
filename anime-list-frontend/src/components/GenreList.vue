<template>
  <div class="panel is-primary">
    <p class="panel-heading">
      Genres
    </p>
    <div class="panel-block">
      <input v-model="filter" class="input is-primary" type="text" placeholder="Suche">
    </div>
    <a class="panel-block" v-for="genre in filteredGenres" v-bind:key="genre.title">
      <button class="button is-primary">Bearbeiten</button>
      <button class="button is-primary">Löschen</button>
      {{genre.title}}
    </a>
  </div>

<button @click="openGenreModal()" class="button is-primary">Genre hinzufügen</button>

  <div class="modal" ref="genreModal">
    <div class="modal-background"></div>
      <div class="modal-content">
        Neues Genre hinzufügen:
        <label for="title">Genre Titel</label>
        <input id="title" v-model="genre.title" />
        <button @click="saveGenre()" type="submit">Genre speichern</button>
      </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        filter:'',
        genres: [],
        genre: {
          title: "",
        },
    }
  },
  created () {
    this.getAllGenres();
  },
  methods: {
    async getAllGenres() {
      try {
        const response = await axios.get("http://localhost:8081/genres/");
        this.genres = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async saveGenre() {
      try {
          await axios.post("http://localhost:8081/genres", this.genre)
          .then(function ( response ) {
            console.log(response)
          }.bind(this));
      } catch (err) {
        console.log(err);
      }
      window.location.reload()
    },
    openGenreModal() {
      this.$refs.genreModal.classList.add('is-active');
    }
  },
    components: {
    },
    computed: {
      filteredGenres() {
      return this.genres.filter(genre => {
      const title = genre.title.toString().toLowerCase();
      const searchTerm = this.filter.toLowerCase();

      return title.includes(searchTerm);
    });
  }
    }
}</script>
<style></style>
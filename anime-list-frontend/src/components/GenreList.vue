<template>
  <div class="panel is-primary">
    <p class="panel-heading">
      Genres
    </p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-primary" type="text" placeholder="Suche">
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <a class="panel-block" v-for="genre in genres" v-bind:key="genre.title">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      {{genre.title}}
    </a>
  </div>

  <button @click="openGenreModal()" type="submit">Genre hinzufügen</button>

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
            //handle success
            console.log(response)
          }.bind(this));
      } catch (err) {
        console.log(err);
      }
    },
    openGenreModal() {
      console.log(this.$refs.genreModal.classList.add('is-active'));
    }
  },
    components: {
    },
}</script>
<style></style>
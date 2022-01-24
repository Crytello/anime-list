<template>
  <div class="panel is-primary">
    <p class="panel-heading">
      Genres
    </p>
    <div class="panel-block">
      <input v-model="filter" class="input is-primary" type="text" placeholder="Suche">
    </div>
    <!-- <div class="panel-block">
      <nav class="pagination" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Voherige Seite</a>
      <a class="pagination-next">Nächste Seite</a>
      <ul class="pagination-list">
        <li>
          <a class="pagination-link" aria-label="Goto page 1">1</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 45">45</a>
        </li>
        <li>
          <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 47">47</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 86">86</a>
        </li>
      </ul>
      </nav>
    </div> -->
    <a class="panel-block" v-for="genre in filteredGenres" v-bind:key="genre.title">
      <router-link to="/genre/edit"><button class="button is-primary editIconButton"><svg-icon type="mdi" :path="penIcon" :size="20"></svg-icon></button></router-link>
      <button class="button is-primary deleteIconButton"><svg-icon type="mdi" :path="deleteIcon" :size="20"></svg-icon></button>
      <p class="genreTitel">{{genre.title}}</p>
    </a>
    <!-- <div class="panel-block">
      <nav class="pagination" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Voherige Seite</a>
      <a class="pagination-next">Nächste Seite</a>
      <ul class="pagination-list">
      <li>
        <a class="pagination-link" aria-label="Goto page 1">1</a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link" aria-label="Goto page 45">45</a>
      </li>
      <li>
        <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
      </li>
      <li>
        <a class="pagination-link" aria-label="Goto page 47">47</a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link" aria-label="Goto page 86">86</a>
      </li>
      </ul>
      </nav>
    </div> -->
    <div class="panel-block">
      <button @click="openGenreModal()" class="button  is-outlined is-fullwidth is-primary"><svg-icon type="mdi" :path="plusIcon" :size="20"></svg-icon> Neues Genre hinzufügen</button>
    </div>
    
  </div>

  <div class="modal" ref="genreModal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Neues Genre hinzufügen:</p>
        <button @click="closeGenreModal()" class="modal-close is-large" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <input class="input" type="text" placeholder="Neues Genre..." id="title" v-model="genre.title" />
      </section>
      <footer class="modal-card-foot">
        <button @click="saveGenre()" class="button is-success">Genre speichern</button>
        <button @click="closeGenreModal()" class="button">Abbrechen</button>
      </footer>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiBorderColor, mdiPlus, mdiDelete   } from '@mdi/js';
export default {
  data() {
    return {
        filter:'',
        genres: [],
        genre: {
          title: "",
        },
        penIcon: mdiBorderColor,
        plusIcon: mdiPlus ,
        deleteIcon: mdiDelete
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
      //TODO: doesnt work, need to reload after save
      window.location.reload();
    },
    openGenreModal() {
      this.$refs.genreModal.classList.add('is-active');
    },
    closeGenreModal() {
      this.$refs.genreModal.classList.remove('is-active');
    },
    async getGenre(id) {
      try {
        const response = await axios.get("http://localhost:8081/genre/" + id, this.genre);
        this.resGenre = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
    components: {
      SvgIcon
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
<style>
.genreTitel {
  padding-left: 50px;
}

.editIconButton {
  padding-left: 50px;
}
</style>
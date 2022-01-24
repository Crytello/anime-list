<template>
  <div class="panel is-primary">
    <p class="panel-heading">
      Genre
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      genre: {}
    }
  },
  created () {
    this.getGenre();
  },
  methods: {
    async getGenre() {
      try {
        const response = await axios.get("http://localhost:8081/genre/", this.genre);
        this.genres = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async updateGenre() {
      try {
          await axios.put("http://localhost:8081/genre", this.genre)
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
<style>
.genreTitel {
  padding-left: 50px;
}

.editIconButton {
  padding-left: 50px;
}
</style>
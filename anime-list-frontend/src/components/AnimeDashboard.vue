<template>
<div class="columns">
  <div class="card column" >
    <div class="card-content">
      <div class="media" v-for="anime in animes" v-bind:key="anime.title_jp">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{anime.title_jp}}</p>
          <p class="subtitle is-4">{{anime.title_eng}}</p>
          <div class="content">
            Aktuelle Folge {{anime.current_episode_watched}} von {{anime.total_number_episodes}}
            <br>
            <time>{{anime.updatedAt}}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        animes: [],
      
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
  },
    components: {
    },
}</script>
<style></style>
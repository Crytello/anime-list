<template>
<!-- <Header /> -->
<router-view/>
<div class="columns">
    <div class="column">
        <p class="title is-1">{{anime.title_jp}} (jp)</p>
    </div>
</div>
<div class="columns">
    <div class="column">
        <p class="subtitle">{{anime.title_eng}} (eng)</p>
    </div>
    <div class="column">
        <p class="subtitle">{{anime.title_ger}} (de)</p>
    </div>
</div>
<div class="columns">
    <div class="column is-one-quarter">
        <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        <div class="file">
            <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                <span class="file-icon">
                    <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                    Choose a file…
                </span>
                </span>
            </label>
        </div>
    </div>
    <div class="column">
        <label class="label" for="current_episode_downloaded">Aktuelle Folge im Download:</label>
        <input class="input" type="text" id="current_episode_downloaded" v-model="anime.current_episode_downloaded" />

        <label class="label" for="current_episode_watched">Aktuelle Folge Gesehen:</label>
        <input class="input" type="text" id="current_episode_watched" v-model="anime.current_episode_watched" />
    </div>
</div>
</template>
<script>
import axios from "axios";
export default({
  data () {
    return {
        anime: '',
        animeId: this.id
    }
  },
  methods: {
      async getAnime(){
        try {
        const response = await axios.get('http://localhost:8081/anime/' + this.animeId );
        this.anime = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  },
  created () {
      this.getAnime();
  },
  props: ['id'],
})
</script>
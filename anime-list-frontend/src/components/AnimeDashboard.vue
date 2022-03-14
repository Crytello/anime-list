<template>
<div class="panel-block">
      <input v-model="filter" class="input is-primary" type="text" placeholder="Suche">
</div>
<div class="card column anime-card-dashboard tile is-ancestor" v-for="anime in filteredAnimes" v-bind:key="anime.title_jp" >
    <div class="card-content tile is-parent is-12" >
      <div class="media tile is-child">
        <div class="media-left">
          <p>
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"  width="128" height="128">
          </p>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="title is-3">{{anime.title_jp}}</p>
            <p class="subtitle is-4">{{anime.title_eng}}</p>
            <p>
              Aktuelle Folge {{anime.current_episode_watched}} von {{anime.total_number_episodes}} 
            </p> 
            <p>
              Nächste Folge eintragen
              <button>
                <svg-icon type="mdi" :path="plus" :size="20"></svg-icon>
              </button>
            </p>
          </div>
        </div>
        <div class="media-right">
          <button><router-link to="/anime/edit/"><svg-icon type="mdi" :path="pen" :size="35"></svg-icon></router-link></button>
        </div>
        
        <div class="card-footer">
          <p class="card-footer-item">
            <small><time> Zuletzt bearbeitet am: {{anime.updatedAt}} </time></small>
          </p>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiBorderColor, mdiPlus   } from '@mdi/js';
export default {
  data() {
    return {
        animes: [],
        anime: '',
        filter:'',
        pen: mdiBorderColor,
        plus: mdiPlus ,
    }
  },
  created () {
    this.getAllAnimes();
  },
  methods: {
    async getAllAnimes() {
      try {
        const response = await axios.get('http://localhost:8081/animes/last-updated-episodes/');
        this.animes = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
    components: {
      SvgIcon
    },
    computed: {
      filteredAnimes() {
        return this.animes.filter(anime => {
          let title_eng = '';
          let title_jp = '';

          if(anime.title_eng){
            title_eng = anime.title_eng.toString().toLowerCase();
          }

          if(anime.title_jp){
            title_jp = anime.title_jp.toString().toLowerCase();
          }
          
          const searchTerm = this.filter.toLowerCase();

          return title_eng.includes(searchTerm) || title_jp.includes(searchTerm);
        });
      } 
    }
}</script>
<style>
.anime-card-dashboard {
  margin-top: 10px;
  display: block;
}

.is-ancestor {
  display:block
}
</style>
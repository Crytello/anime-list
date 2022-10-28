<template>
<div class="panel-block">
      <input v-model="filter" class="input is-primary" type="text" placeholder="Suche">
</div>

<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>

<AnimeDashboardCard :cardTitle='"LastUpdatedAnime"' :anime='lastUpdatedAnime'/>
<MangaDashboardCard :cardTitle='"LastUpdatedManga"' :manga='lastUpdatedManga'/>

</template>
<script>
import axios from 'axios';
import i18next from 'i18next';
import AnimeDashboardCard from '@/components/AnimeComponent/AnimeDashboardCard.vue';
import MangaDashboardCard from '@/components/MangaComponent/MangaDashboardCard.vue';
export default {
  data() {
    return {
        lastUpdatedAnime: '',
        lastUpdatedManga: '',
        defaultNS: 'dashboard',
        filter:'',
    }
  },
  created () {
    this.getLastUpdatedAnimeAndMangaEpisode();
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
    async getLastUpdatedAnimeAndMangaEpisode() {
      try {
        const animeEpisodeResponse = await axios.get('http://localhost:8081/animes/last-updated-episode');
        const mangaEpisodeResponse = await axios.get('http://localhost:8081/mangas/last-updated-episode');
        this.lastUpdatedAnime = animeEpisodeResponse.data;
        this.lastUpdatedManga = mangaEpisodeResponse.data;
        console.log(i18next.t('welcome'));
      } catch (err) {
        console.log(err);
      }
    }
  },
    components: {
      AnimeDashboardCard,
      MangaDashboardCard
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
</style>
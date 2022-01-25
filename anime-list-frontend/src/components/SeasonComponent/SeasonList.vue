<template>
<div class="panel is-primary">
    <p class="panel-heading">
      Seasons
    </p>
    <div class="panel-block">
      <input v-model="filter" class="input is-primary" type="text" placeholder="Suche">
    </div>
    <a class="panel-block" v-for="season in filteredSeasons" v-bind:key="season.type">
      <router-link to="/season/edit"><button class="button is-primary editIconButton"><svg-icon type="mdi" :path="penIcon" :size="20"></svg-icon></button></router-link>
      <button class="button is-primary deleteIconButton"><svg-icon type="mdi" :path="deleteIcon" :size="20"></svg-icon></button>
      <p class="seasonType">{{season.type}} - {{season.year}}</p>
    </a>
    <div class="panel-block">
      <button @click="openSeasonModal()" class="button  is-outlined is-fullwidth is-primary"><svg-icon type="mdi" :path="plusIcon" :size="20"></svg-icon> Neue Season hinzufügen</button>
    </div>
  </div>

  <div class="modal" ref="seasonModal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Neue Season hinzufügen:</p>
          <button @click="closeSeasonModal()" class="modal-close is-large" aria-label="close"></button>
        </header>
        <section class="modal-card-body select">
          <select v-model="season.type" label="seasonTypes">  
            <option v-for="seasonType in seasonTypes" :key="seasonType.value">
            {{seasonType.title}}
            </option>
          </select>
          <input class="input" type="text" placeholder="...im Jahr XXX" id="type" v-model="season.year" />
        </section>
        <footer class="modal-card-foot">
          <button @click="saveSeason()" class="button is-success">Season speichern</button>
          <button @click="closeSeasonModal()" class="button">Abbrechen</button>
        </footer>
      </div>
  </div>
</template>
<script>
//import SeasonListTableView from '@/components/SeasonComponent/SeasonListTableView.vue';
import axios from "axios";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiBorderColor, mdiPlus, mdiDelete   } from '@mdi/js';
export default {
  data() {
    return {
        filter:'',
        seasonTypes: [
          {
            title: "Winter", value: "Winter"
          },
          {
            title: "Spring", value: "Spring"
          },
          {
            title: "Summer", value: "Summer"
          },
          {
            title: "Fall", value: "Fall"
          }
        ],
        seasons: [],
        season: {
          type: "",
          year: "",
        },
        penIcon: mdiBorderColor,
        plusIcon: mdiPlus ,
        deleteIcon: mdiDelete
    }
  },
  created () {
    this.getAllSeasons();
  },
  methods: {
    async getAllSeasons() {
      try {
        const response = await axios.get("http://localhost:8081/seasons/");
        this.seasons = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async saveSeason() {
      try {
        console.log(this.season)
          await axios.post("http://localhost:8081/seasons", this.season)
          .then(function ( response ) {
            //handle success
            console.log(response)
          }.bind(this));
      } catch (err) {
        console.log(err);
      }
    },
    deleteSeason(season) {
        this.seasons.splice(this.seasons.indexOf(season), 1);
    },
    updateSeason(season) {
        this.seasons.splice(this.seasons.indexOf(season), season)
    },
    openSeasonModal() {
      this.$refs.seasonModal.classList.add('is-active');
    },
    closeSeasonModal() {
      this.$refs.seasonModal.classList.remove('is-active');
    },
  },
    components: {
        SvgIcon
    },
    computed: {
      filteredSeasons() {
      return this.seasons.filter(season => {
      const type = season.type.toString().toLowerCase();
      const year = season.year.toString().toLowerCase();
      const searchTerm = this.filter.toLowerCase();

      return type.includes(searchTerm) || year.includes(searchTerm);
      });
    } 
    }
}</script>
<style>
.seasonType {
  padding-left: 50px;
}

.editIconButton {
  padding-left: 50px;
}
</style>
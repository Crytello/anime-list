<template>
<div class="card latest-created-manga-card-dashboard">
  <div class="card-content">
    <div class="content">
        {{cardTitle}}
        {{anime}}
        HEEEE{{anime.title_jp}}
        <label class="label">EY</label>
        {{anime.status}}
      <p>
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"  width="128" height="128">
      </p>
      <p class="title is-3"></p>
      <p class="subtitle is-6"></p>
      <p>
        Aktuelle Folge 
      </p> 
      <button class="button">
        <svg-icon type="mdi" :path="plus" :size="20"></svg-icon>
      </button>
      <p>LAST CREATED MANGA OVERALL Nächste Folge eintragen</p>
      <button class="button"><router-link to="/anime/edit/"><svg-icon type="mdi" :path="pen" :size="35"></svg-icon></router-link></button>
    </div>
    <div class="card-footer">
      <p class="card-footer-item">
        <small><time> Zuletzt bearbeitet am:  </time></small>
      </p>
    </div>
  </div>
</div>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiBorderColor, mdiPlus } from '@mdi/js';
export default {
  props: ['cardTitle', 'anime'],
  data () {
    return {
      pen: mdiBorderColor,
      plus: mdiPlus ,
    }
  },
  components: {
    SvgIcon,
  }
}
</script>

<style>

</style>
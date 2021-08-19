<template>
 <input class="input is-rounded" type="text" placeholder="Rounded input">
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
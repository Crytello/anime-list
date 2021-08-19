<template>
   <Header />
  <router-view/>
</template>

<script>
import Header from "../src/components/layout/Header.vue"
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
</style>

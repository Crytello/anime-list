<template>
    <table class="table">
  <thead>
    <tr>
        <th scope="col">Löschen</th>
        <th scope="col">Bearbeiten</th>
        <th scope="col">Season</th>
        <th scope="col">Jahr</th>
    </tr>
  </thead>
  <tbody v-for="season in seasons" v-bind:key="season.type">
    <tr>
        <td><button @click="deleteManga(season)">Löschen</button></td>
        <td><button @click="updateManga(season)">Bearbeiten</button></td>
        <td><input v-model="season.type"/></td>
        <td><input v-model="season.year"/></td>
    </tr>
  </tbody>
</table>
</template>

<script>

export default({
  props: ['seasons', 'deleteSeason', 'updateSeason'],
})
</script>

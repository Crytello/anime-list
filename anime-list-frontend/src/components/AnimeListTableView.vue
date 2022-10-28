<template>
    <table class="table">
  <thead>
    <tr>
        <th scope="col">Löschen</th>
        <th scope="col">Bearbeiten</th>
        <th scope="col">Japanischer Titel / title_jp</th>
        <th scope="col">Englischer Titel / title_eng</th>
        <th scope="col">status</th>
        <th scope="col">Enddatum</th>
        <th scope="col">Studio</th>
        <th scope="col">Source</th>
        <th scope="col">Aktuelle Folge im Download</th>
        <th scope="col">Aktuelle Folge geguckt</th>
        <th scope="col">Gesamtanzahl Folgen</th>
        <th scope="col">Release</th>
        <th scope="col">Bewertung / Rating</th>
    </tr>
  </thead>
  <tbody v-for="anime in animes" v-bind:key="anime.title_jp">
    <tr>
        <td><button class="button" @click="deleteAnime(anime)">Löschen</button></td>
        <td><button class="button"><router-link :to="'/anime/edit/' + anime.id">Bearbeiten</router-link></button></td>
        <td><input v-model="anime.title_jp"/></td>
        <td><input v-model="anime.title_eng"/></td>
        <td><input v-model="anime.status"/></td>
        <td><input v-model="anime.end_date"/></td>
        <td><input v-model="anime.studio"/></td>
        <td><input v-model="anime.source"/></td>
        <td><input v-model="anime.current_episode_downloaded"/></td>
        <td><input v-model="anime.current_episode_watched"/></td>
        <td><input v-model="anime.total_number_episodes"/></td>
        <td><input v-model="anime.release_year"/></td>
        <td><input v-model="anime.rating"/></td>
    </tr>
  </tbody>
</table>
</template>

<script>

export default({
  props: ['animes', 'deleteAnime', 'updateAnime'],
})
</script>

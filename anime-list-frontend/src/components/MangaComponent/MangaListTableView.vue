<template>
    <table class="table">
  <thead>
    <tr>
        <th scope="col">Löschen</th>
        <th scope="col">Bearbeiten</th>
        <th scope="col">Japanischer Titel / title_jp</th>
        <th scope="col">Englischer Titel / title_eng</th>
        <th scope="col">Deutscher Titel / title_de</th>
        <th scope="col">status</th>
        <th scope="col">Enddatum</th>
        <th scope="col">Verlag</th>
        <th scope="col">Aktueller Band</th>
        <th scope="col">Gesamtanzahl Bände</th>
        <th scope="col">Releasejahr</th>
        <th scope="col">Bewertung / Rating</th>
    </tr>
  </thead>
  <tbody v-for="manga in mangas" v-bind:key="manga.title_jp">
    <tr>
        <td><button @click="deleteManga(manga)">Löschen</button></td>
        <td><button @click="updateManga(manga)">Bearbeiten</button></td>
        <td><input v-model="manga.title_jp"/></td>
        <td><input v-model="manga.title_eng"/></td>
        <td><input v-model="manga.title_de"/></td>
        <td><input v-model="manga.status"/></td>
        <td><input v-model="manga.end_date"/></td>
        <td><input v-model="manga.publisher"/></td>
        <td><input v-model="manga.current_volume"/></td>
        <td><input v-model="manga.total_number_volumes"/></td>
        <td><input v-model="manga.release_year"/></td>
        <td><input v-model="manga.rating"/></td>
    </tr>
  </tbody>
</table>
</template>

<script>

export default({
  props: ['mangas', 'deleteManga', 'updateManga'],
})
</script>

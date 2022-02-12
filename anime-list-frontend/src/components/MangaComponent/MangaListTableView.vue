<template>
  <div class="panel-block">
    <input v-model="filter" class="input is-primary" type="text" placeholder="Suche">
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Löschen</th>
        <th scope="col">Bearbeiten</th>
        <th scope="col">Japanischer Titel / title_jp</th>
        <th scope="col">Englischer Titel / title_eng</th>
        <th scope="col">Deutscher Titel / title_ger</th>
        <th scope="col">status</th>
        <th scope="col">Enddatum</th>
        <th scope="col">Verlag</th>
        <th scope="col">Aktueller Band</th>
        <th scope="col">Gesamtanzahl Bände</th>
        <th scope="col">Releasejahr</th>
        <th scope="col">Bewertung / Rating</th>
      </tr>
    </thead>
    <tbody v-for="manga in filteredMangas" v-bind:key="manga.title_jp">
      <tr>
        <td><button class="button"  @click="deleteManga(manga)">Löschen</button></td>
        <td><button class="button" @click="updateManga(manga)">Bearbeiten</button></td>
        <td>{{manga.title_jp}}</td>
        <td>{{manga.title_eng}}</td>
        <td>{{manga.title_ger}}</td>
        <td>{{manga.status}}</td>
        <td>{{manga.end_date}}</td>
        <td>{{manga.publisher}}</td>
        <td>{{manga.current_volume}}</td>
        <td>{{manga.total_number_volumes}}</td>
        <td>{{manga.release_year}}</td>
        <td>{{manga.rating}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default{
  props: ['mangas', 'deleteManga', 'updateManga'],
  data() {
    return {
        filter:'',
    }
  },
  computed : {
  filteredMangas() {
    return this.mangas.filter(manga => {
    const title_jp = manga.title_jp.toString().toLowerCase();
    const title_eng = manga.title_eng.toString().toLowerCase();
    const title_ger = manga.title_ger.toString().toLowerCase();
    const searchTerm = this.filter.toLowerCase();

    return title_jp.includes(searchTerm) || title_eng.includes(searchTerm) || title_ger.includes(searchTerm);
  });
},
  }
}
</script>

import * as VueRouter from 'vue-router';
import Dashboard from '../components/DashboardComponent/Dashboard.vue';
import AnimeList from '../components/AnimeList.vue';
import MangaList from '../components/MangaComponent/MangaList.vue';
//import KPopList from '../components/KPopList.vue';
import GenreList from '../components/GenreList.vue';
import GenreEdit from '../components/GenreEdit.vue';
import SeasonList from '../components/SeasonComponent/SeasonList.vue';
import Register from '../components/auth/Register.vue';
import AnimeEditView from '../components/AnimeEditView.vue';

const routes = [
  { 
    path: '/', 
    name: 'Dashboard',
    component: Dashboard, 
  },
  { 
    path: '/animes',
    name: 'AnimeList', 
    component: AnimeList, 
  },
  {
    path: '/mangas',
    name: 'MangaList', 
    component: MangaList, 
  },
  /* {
    path: '/kpop',
    name: 'KPopList', 
    component: KPopList, 
  }, */
  { 
    path: '/genres',
    name: 'Genres', 
    component: GenreList, 
  },
  { 
    path: '/seasons',
    name: 'Seasons', 
    component: SeasonList, 
  },
  { 
    path: '/genre/edit',
    name: 'GenreEdit', 
    component: GenreEdit, 
  },
  { 
    path: '/register',
    name: 'Register', 
    component: Register, 
  },
  { 
    path: '/anime/edit/:id',
    name: 'AnimeEditView', 
    component: AnimeEditView, 
    props: true
  },
]
  

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router;
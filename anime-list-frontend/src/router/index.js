import * as VueRouter from 'vue-router'
import AnimeDashboard from '../components/AnimeDashboard.vue'
import AnimeList from '../components/AnimeList.vue'
import GenreList from '../components/GenreList.vue'

const routes = [
  { 
    path: '/', 
    name: 'AnimeDashboard',
    component: AnimeDashboard, 
  },
  { 
    path: '/animes',
    name: 'AnimeList', 
    component: AnimeList, 
  },
  { 
    path: '/genres',
    name: 'Genres', 
    component: GenreList, 
  },
]
  

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router;
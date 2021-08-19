import * as VueRouter from 'vue-router'
import AnimeDashboard from '../components/AnimeDashboard.vue'
import AnimeList from '../components/AnimeList.vue'

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
]
  

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router;
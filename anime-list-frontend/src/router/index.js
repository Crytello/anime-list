import * as VueRouter from 'vue-router'
import AnimeDashboard from '../components/AnimeDashboard.vue'
import AnimeList from '../components/AnimeList.vue'

const routes = [
  { 
    path: '/', 
    name: 'AnimeList',
    component: AnimeList, 
  },
  { 
    path: '/dashboard',
    name: 'AnimeDashboard', 
    component: AnimeDashboard, 
  },
]
  

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router;
import * as VueRouter from 'vue-router'
import App from '../App.vue'

const routes = [
    { path: '/', component: App },
  ]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router;
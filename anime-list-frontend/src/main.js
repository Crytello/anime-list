import * as Vue from 'vue'
import router from './router'
import App from './App.vue'

const app  = Vue.createApp({
    render: ()=>Vue.h(App)
});

app.use(router);
app.mount('#app');



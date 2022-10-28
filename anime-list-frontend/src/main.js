import * as Vue from 'vue';
import router from './router';
import App from './App.vue';
import i18next from 'i18next';
import de from './locale/de.json';
import en from './locale/en.json';
import '../css/styles.css';

const app  = Vue.createApp({
    render: ()=>Vue.h(App)
});

i18next.init({
    lng: 'de',
    fallbackLng: 'de',
    whitelist: ['de', 'en'],
    resources: { de, en },
});

app.use(router);
app.mount('#app');
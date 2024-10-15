// import './assets/main.css'

import Buefy from 'buefy'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .use(VueCookies)
    .use(VueAxios, axios)
    .use(Buefy)
    .mount('#app')

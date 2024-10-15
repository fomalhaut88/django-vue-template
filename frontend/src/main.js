// import './assets/main.css'

import Buefy from 'buefy'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import Api from './api.js'
import App from './App.vue'
import router from './router'

const BACKEND_ROOT = (
  import.meta.env.VITE_BACKEND_ROOT ? import.meta.env.VITE_BACKEND_ROOT : ''
)

const app = createApp(App)

app.use(router)
app.use(VueCookies)
app.use(VueAxios, axios)
app.use(Buefy)

app.config.globalProperties.$api = new Api(axios, BACKEND_ROOT + '/api')
app.config.globalProperties.$user = null
app.config.globalProperties.$ADMIN_URL = BACKEND_ROOT + '/admin'

app.mount('#app')

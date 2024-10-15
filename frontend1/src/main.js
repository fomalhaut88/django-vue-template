import Vue from 'vue'
import VueResource from 'vue-resource'
import VueCookies from 'vue-cookies'
import Buefy from 'buefy'

import '@mdi/font/css/materialdesignicons.css'
import '@/assets/scss/main.scss'

Vue.use(Buefy)
Vue.use(VueResource)
Vue.use(VueCookies, { expires: -1 })

import App from './App.vue'
import Api from './api'
import router from './router'

const BACKEND_ROOT = (
  process.env.VUE_APP_BACKEND_ROOT ? process.env.VUE_APP_BACKEND_ROOT : ''
)

Vue.config.productionTip = false
Vue.http.options.root = BACKEND_ROOT + '/api'

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$api = new Api(this.$resource)
    Vue.prototype.$user = null
    Vue.prototype.$ADMIN_URL = BACKEND_ROOT + '/admin'
  },
}).$mount('#app')

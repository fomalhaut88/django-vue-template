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

Vue.config.productionTip = false
Vue.http.options.root = (
  process.env.VUE_APP_API_ROOT ? process.env.VUE_APP_API_ROOT : '/api'
)

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$api = new Api(this.$resource)
    Vue.prototype.$user = null
  },
}).$mount('#app')

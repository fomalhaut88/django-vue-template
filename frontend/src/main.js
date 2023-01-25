import Vue from 'vue'
import VueResource from 'vue-resource'
import Buefy from 'buefy'

import '@/assets/scss/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
  customIconPacks: {
    fas: {
      sizes: {
        'default': 'lg',
        'is-small': '1x',
        'is-medium': '2x',
        'is-large': '3x'
      },
      iconPrefix: ''
    }
  }
})
Vue.use(VueResource)

import App from './App.vue'
import Api from './api'
import router from './router'

Vue.config.productionTip = false
Vue.http.options.root = process.env.VUE_APP_API_ROOT

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$api = new Api(this.$resource)
  },
}).$mount('#app')

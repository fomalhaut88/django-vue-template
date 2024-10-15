import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NotesView from '@/views/NotesView.vue'
import Error404View from '@/views/Error404View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notes',
    name: 'NotesView',
    component: NotesView,
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404View,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

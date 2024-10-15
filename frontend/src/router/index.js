import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NotesView from '@/views/NotesView.vue'
import Error404View from '@/views/Error404View.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/notes', component: NotesView },
  { path: '/:pathMatch(.*)', component: Error404View },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

export default router

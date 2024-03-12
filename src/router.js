import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

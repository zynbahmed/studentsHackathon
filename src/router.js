import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import AddStudent from './pages/AddStudent.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/addstudent',
    component: AddStudent,
    name: 'AddStudent'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

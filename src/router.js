import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import AddStudent from './pages/AddStudent.vue'
import AddCourse from './pages/AddCourse.vue'

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
  },
  {
    path: '/addcourse',
    component: AddCourse,
    name: 'AddCourse'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

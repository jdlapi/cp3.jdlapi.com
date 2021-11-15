import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Series from '../views/Series.vue'
import Read from '../views/Read.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/series',
    name: 'Series',
    component: Series
  },
  {
    path: '/Read',
    name: 'Read',
    component: Read
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

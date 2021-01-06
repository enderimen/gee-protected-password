import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/passwords',
    name: 'MyPassword',
    component: () => import(/* webpackChunkName: "password" */ '@/views/MyPassword.vue')
  },
  {
    path: '/secure-notes',
    name: 'MyNotes',
    component: () => import(/* webpackChunkName: "notes" */ '@/views/MyNotes.vue')
  },
  {
    path: '/account',
    name: 'MyAccount',
    component: () => import(/* webpackChunkName: "account" */ '@/views/MyAccount.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '@/views/Settings.vue')
  },
  { path: "*", redirect: "/" },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router

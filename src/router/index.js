import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'passwords',
    component: () => import(/* webpackChunkName: "password" */ '@/views/MyPassword.vue')
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

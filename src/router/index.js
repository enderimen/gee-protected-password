import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/components/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '@/components/Signup.vue')
  },
  {
    path: '/',
    name: 'passwords',
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next()
      }else {
        next("/login")
      }
    },
    component: () => import(/* webpackChunkName: "password" */ '@/views/MyPassword.vue')
  },
  {
    path: '/passwords',
    name: 'MyPassword',
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next()
      }else {
        next("/login")
      }
    },
    component: () => import(/* webpackChunkName: "password" */ '@/views/MyPassword.vue')
  },
  {
    path: '/secure-notes',
    name: 'MyNotes',
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next()
      }else {
        next("/login")
      }
    },
    component: () => import(/* webpackChunkName: "notes" */ '@/views/MyNotes.vue')
  },
  {
    path: '/account',
    name: 'MyAccount',
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next()
      }else {
        next("/login")
      }
    },
    component: () => import(/* webpackChunkName: "account" */ '@/views/MyAccount.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next()
      }else {
        next("/login")
      }
    },
    component: () => import(/* webpackChunkName: "settings" */ '@/views/Settings.vue')
  },
  { path: "*", redirect: "/" },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router

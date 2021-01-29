import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/app.scss"

const language = localStorage.getItem("language");
document.documentElement.lang = language;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

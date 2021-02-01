import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from "vue-resource"
import "./styles/app.scss"

Vue.use(VueResource);

const language = localStorage.getItem("language");
document.documentElement.lang = language;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

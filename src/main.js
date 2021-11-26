import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from "vue-resource"
import { i18n } from '@/plugins/i18n';
import "./styles/app.scss"

Vue.use(VueResource);

const language = localStorage.getItem("language") || "tr";
document.documentElement.lang = language;
i18n.locale = language;

// axios.defaults.baseURL = "http://localhost:8080/";
// axios.defaults.headers["Accept-Language"] = language;

// console.log(language);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

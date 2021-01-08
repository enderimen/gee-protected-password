import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import password from "./password/password";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenWindow: false,
    componentOptions: {
      name: "app-new-note",
      title: "Yeni oluştur"
    }
  },
  getters,
  mutations,
  actions,
  modules: {
    password
  }
})

import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import password from "./module/password";
import account from "./module/account";
import note from "./module/note";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenWindow: false,
    currentTheme: "",
    textureName: "",
    componentOptions: {
      name: "",
      title: ""
    }
  },
  getters,
  mutations,
  actions,
  modules: {
    password,
    account,
    note
  }
})

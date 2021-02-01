import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import password from "./module/password";
import account from "./module/account";
import note from "./module/note";
import user from "./module/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenWindow: false,
    currentTheme: "",
    textureName: "",
    searchQuery: "",
    language: "tr",
    isLogin: false,
    token: "",
    apiKey: "AIzaSyB1RFrinX_xmm4DugHGhfR421JMdAtG0UQ",
    authenticationMessage: {
      email: null,
      password: null
    },
    componentOptions: {
      name: "",
      title: ""
    },
    currentItem: {
    }
  },
  getters,
  mutations,
  actions,
  modules: {
    password,
    account,
    note,
    user
  }
})

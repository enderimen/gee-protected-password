import Vue  from 'vue';
import { api } from "@/api";

const state = {
  userInfo: {}
};

const getters = {
    getUser(state) {
      return state.userInfo;
    },
    getUserListSize() {
      return state.userInfo.length;
    }
};

const mutations = {
    editUser(state, editedUserInfo) {
      state.userInfo = editedUserInfo;
    },
    setUserInfo(state, newUser) {
      state.userInfo = newUser;
    }
};

const actions = {
  editUser({commit}, authData) {
    Vue.http.put(`${api.baseUrl}users.json`, authData);
    commit("editUser", authData);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
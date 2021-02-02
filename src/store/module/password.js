import Vue from "vue";
import { api } from "@/api";
const state = {
    passwordList: [],
    passwordDetail: {}
};
const getters = {
    getPasswordList(state, getters, rootState) {
      if(rootState.searchQuery !== "") {
        return state.passwordList.filter(passwordItem => {
          return passwordItem.title.toLowerCase().match(rootState.searchQuery) || passwordItem.name.toLowerCase().match(rootState.searchQuery);
        });
      }
      return state.passwordList;
    },
    getPassword(state) {
      return (productId) => state.passwordList.find(passwordItem => passwordItem.id === parseInt(productId))
    },
    getPasswordListSize(state) {
      return state.passwordList.length;
    },
    getPasswordDetail(state) {
      return state.passwordDetail;
    }
};
const mutations = {
    setPasswordDetail(state, passwordItem) {
      state.passwordDetail = passwordItem ? passwordItem : state.passwordList[0];
    },
    savePassword(state, passwordData) {
      state.passwordList.push(passwordData);
    },
    editPassword(state, editedPassword) {
      state.passwordList.splice(state.passwordList.findIndex(password => password.id === parseInt(editedPassword.id)), 1, editedPassword);
    }
};
const actions = {
  savePassword({commit}, password) {
    Vue.http.post(`${api.databaseUrl}passwords.json`, password).then((response) => {
      commit("savePassword", password);
    });
  },
  fetchPasswordList({commit, state}) {
    Vue.http.get(`${api.databaseUrl}passwords.json`).then((response) => {
      let data = response.data;

      for (let key in data) {
        data[key].key = key;
        commit("savePassword", data[key]);
      }

      commit("setPasswordDetail", state.passwordList[0])
    });
  },
  editPassword({commit}, editedPassword) {
    let config = {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      }
    };

    Vue.http.put(`${api.databaseUrl}passwords/${editedPassword.key}.json`, editedPassword, config).then((response => {
      commit("editPassword", editedPassword)
    }));
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
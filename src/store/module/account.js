import Vue from "vue";
import { api } from "@/api";

const state = {
    accountList: []
};
const getters = {
    getAccountList(state, getters, rootState) {
      if(rootState.searchQuery !== "") {
        return state.accountList.filter(accountItem => {
          return accountItem.title.toLowerCase().match(rootState.searchQuery) || accountItem.email.toLowerCase().match(rootState.searchQuery);
        });
      }
      return state.accountList;
    },
    getAccount(state) {
      return (accountId) => state.accountList.find(account => account.id === parseInt(accountId));
    },
    getAccountListSize(state) {
      return state.accountList.length;
    }
};
const mutations = {
    saveAccount(state, accountData) {
      state.accountList.push(accountData);
    },
    deleteAccount(state, accountId) {
      state.accountList.splice(state.accountList.findIndex(account => account.key === accountId), 1);
    },
    editAccount(state, editedAccount) {
      state.accountList.splice(state.accountList.findIndex(account => account.id === parseInt(editedAccount.id)), 1, editedAccount);
    }
  };
  const actions = {
    initAccountList({commit}) {
      Vue.http.get(`${api.databaseUrl}accounts.json`).then(response => {
        const data = response.data;

        for (const key in data) {
          data[key].key = key;
          commit("saveAccount", data[key]);
        }
      });
    },
    saveAccount({commit}, accountData) {
      Vue.http.post(`${api.databaseUrl}accounts.json`, accountData).then(() => {
        commit("saveAccount", accountData);
      }).catch(error => `Hesap verileri getirilirken hata ile karşılaşıldı. Hata detayı: ${error}`);
    },
    deleteAccount({commit}, accountId) {
      Vue.http.delete(`${api.databaseUrl}accounts/${accountId}.json`).then(() => {
        commit("deleteAccount", accountId);
      });
    },
    editAccount({commit}, editedAccount) {
      Vue.http.put(`${api.databaseUrl}accounts/${editedAccount.key}.json`, editedAccount).then(() => {
        commit("editAccount", editedAccount);
      });
    },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
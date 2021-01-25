const state = {
    accountList: [
      {
          id: 1,
          title: "E-Posta 1",
          email: "imen.ender@gmail.com",
          password: "sdasdsd",
          lastModified: "Today at 12:09 PM",
          created: "Today at 03:25 AM"
        },
        {
          id: 2,
          title: "E-Posta 2",
          email: "imen.ender@gmail.com",
          password: "sdasdsd",
          lastModified: "Today at 12:09 PM",
          created: "Today at 02:25 AM"
        },
        {
          id: 3,
          title: "E-Posta 3",
          email: "imen.ender@gmail.com",
          password: "sdasdsd",
          lastModified: "Today at 12:09 PM",
          created: "Today at 07:25 AM"
        },
        {
          id: 4,
          title: "E-Posta 4",
          email: "imen.ender@gmail.com",
          password: "sdasdsd",
          lastModified: "Today at 12:09 PM",
          created: "Today at 07:25 AM"
        }
    ]
};
const getters = {
    getAccountList(state) {
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
      state.accountList.splice(state.accountList.findIndex(account => account.id === parseInt(accountId)), 1);
    },
    editAccount(state, editAccountId) {
      state.accountList.splice(state.accountList.findIndex(account => account.id === parseInt(editAccountId.id)), 1, editAccountId);
    }
};
const actions = {
};

export default {
  state,
  getters,
  mutations,
  actions,
};
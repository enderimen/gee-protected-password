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
    getAccount(state, accountId) {
      return state.accountList.filter(account => account.id === parseInt(accountId));
    }
};
const mutations = {
    deleteAccount(state, accountId) {
      state.accountList.splice(state.accountList.findIndex(account => account.id === parseInt(accountId)), 1);
    },
    editAccount(state) {
      return state.accountList;
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
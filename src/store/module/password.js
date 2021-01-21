const state = {
    passwordList: [
      {
          id: 1,
          title: "Google Gmail",
          name: "imen.ender@gmail.com",
          password: "sdasdasdasasdsdsdasdasds",
          website: "https://www.gmail.com",
          lastModified: "Today at 12:09 PM",
          created: "Today at 03:25 AM"
        },
        {
          id: 2,
          title: "Yahoo",
          name: "erdi.imen@gmail.com",
          password: "sdasdasdasaasdasdasd",
          website: "https://www.gmail.com",
          lastModified: "Today at 12:09 PM",
          created: "Today at 02:25 AM"
        },
        {
          id: 3,
          title: "Google Gmail",
          name: "imen.ender@gmail.com",
          password: "sdasda",
          website: "https://www.gmail.com",
          lastModified: "Today at 12:09 PM",
          created: "Today at 07:25 AM"
        }
    ],
    passwordDetail: {
      id: 1,
      title: "Test Account",
      name: "test@gmail.com",
      password: "sdasdasdasasdsdsdasdas",
      website: "https://www.gee.com",
      lastModified: "Today at 12:09 PM",
      created: "Today at 03:25 AM"
    }
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
    },
};
const actions = {
};

export default {
  state,
  getters,
  mutations,
  actions,
};
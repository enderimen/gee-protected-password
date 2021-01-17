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
    },
    searchQuery: ""
};
const getters = {
    getPasswordList(state) {
      if(state.searchQuery !== "") {
        return state.passwordList.filter(passwordItem => {
          return passwordItem.title.toLowerCase().match(state.searchQuery.toLowerCase()) || passwordItem.name.toLowerCase().match(state.searchQuery.toLowerCase());
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
    setSearchQuery(state, searchText){
      state.searchQuery = searchText;
    },
    setPasswordDetail(state, passwordItem) {
      state.passwordDetail = passwordItem;
    },
    savePassword(state, passwordData) {
      state.passwordList.push(passwordData);
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
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
          name: "imen.ender@gmail.com",
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
    isOpenWindow: false,
    componentOptions: {
      name: "app-",
      title: "Yeni oluştur"
    },
    searchQuery: ""
  },
  getters: {
    getIsOpenWindow(state) {
      return state.isOpenWindow;
    },
    getPasswordList(state) {
      if(state.searchQuery !== "") {
        return state.passwordList.filter(passwordItem => passwordItem.title.toLowerCase().match(state.searchQuery.toLowerCase()));
      }
      return state.passwordList;
    },
    getPassword(state) {

      return (productId) => state.passwordList.find(passwordItem => passwordItem.id === parseInt(productId))
    },
    getPasswordDetail(state) {
      return state.passwordDetail;
    }
  },
  mutations: {
    setIsOpenWindow(state, status) {
      state.isOpenWindow = status;
    },
    setSearchQuery(state, searchText){
      state.searchQuery = searchText;
    },
    setPasswordDetail(state, passwordItem) {
      state.passwordDetail = passwordItem;
    }
  },
  actions: {
  },
  modules: {
  }
})

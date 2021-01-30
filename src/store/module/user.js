const state = {
  userInfo: {
    id: 1,
    name: "Ender İMEN",
    email: "imen.ender@gmail.com",
    password: "1234",
    lastModified: "Today at 03:25 AM",
    created: "Today at 03:25 AM"
  }
};

const getters = {
    getUser(state) {
      return state.userInfo;
    }
};

const mutations = {
    editUser(state, editedUserInfo) {
      state.userInfo = editedUserInfo;
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
export default {
  namespaced: true,
  state: {
    strict: true,
    users: [],
  },
  getters: {
    getUsersNames(state) {
      return state.users.map((user) => user.name);
    },
  },
  mutations: {
    addUser(state, name) {
      state.users.push({ name });
      state.users = [...state.users, { name }];
    },
    updateUserAvatar(state, index, avatar) {
      Vue.set(state.users[index], "avatar", avatar);
      state.users[index].avatar = avatar;
    },
  },
};

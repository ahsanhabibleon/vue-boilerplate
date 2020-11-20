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
      // 1st solution:
      // it will work as expected and trigger getUsersNames()
      state.users.push({ name });

      // 2nd solution
      // even though we are recreating the entire array,
      // it will behave in the same way as first solution
      // more details: https://vuejs.org/v2/guide/list.html#Replacing-an-Array
      state.users = [...state.users, { name }];
    },
    updateUserAvatar(state, index, avatar) {
      // 1st solution:
      // it will properly update an array item, but also it will trigger getUsersNames()
      Vue.set(state.users[index], "avatar", avatar);

      // 2nd solution:
      // it's going to work only if we modify addUser() function and include avatar property there:
      // "state.users.push({name, avatar: null})"
      // the benefit of this approach is that getUsersNames() won't be triggered
      state.users[index].avatar = avatar;
    },
  },
};

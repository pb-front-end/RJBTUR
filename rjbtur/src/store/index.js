import { createStore } from 'vuex'

const index = {
  namespaced: true,
  state: {
    user: undefined
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setUser({commit}, user) {
      commit('setUser', user);
    }
  }
};

const modules = { index };

export default createStore({modules})

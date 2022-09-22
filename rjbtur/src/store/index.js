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
    },

    logoff({commit}) {
      commit('setUser', undefined);
    }
  }
};

const modules = { index };

export default createStore({modules})

import { createStore } from 'vuex'

const index = {
  namespaced: true,
  state: {
    user: undefined,
    selectedService: '',
    selectedOption: '',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setSelectedService(state, selectedService) {
      state.selectedService = selectedService;
    },
    setSelectedOption(state, selectedOption) {
      state.selectedOption = selectedOption;
    }
  },
  actions: {
    setUser({commit}, user) {
      commit('setUser', user);
    },
    setSelectedService({commit}, selectedService) {
      commit('setSelectedService', selectedService);
    },
    setSelectedOption({commit}, selectedOption) {
      commit('setSelectedOption', selectedOption);
    },
    logoff({commit}) {
      commit('setUser', undefined);
    }
  }
};

const modules = { index };

export default createStore({modules})

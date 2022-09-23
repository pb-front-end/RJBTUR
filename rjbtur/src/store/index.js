import { createStore } from 'vuex';

const getUserById = id => {
  const users = JSON.parse(
    localStorage.getItem('users')
  );

  return users.find(user => { return user.id === id });
}

const getLoggedUser = () => {
  const userId = parseInt(localStorage.getItem('userId'));

  if (!userId) return;

  return getUserById(userId);
}

const index = {
  namespaced: true,
  state: {
    user: getLoggedUser(),
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
      localStorage.setItem('userId', user.id);
      commit('setUser', user);
    },
    setSelectedService({commit}, selectedService) {
      commit('setSelectedService', selectedService);
    },
    setSelectedOption({commit}, selectedOption) {
      commit('setSelectedOption', selectedOption);
    },
    logoff({commit}) {
      localStorage.setItem('userId', '');
      commit('setUser', undefined);
    }
  }
};

const modules = { index };

export default createStore({modules})

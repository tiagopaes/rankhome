import Vue from 'vue'
import Vuex from 'vuex';
import User from './User';
import Ranking from './Ranking'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    User,
    Ranking
  },
  state: {},
  actions: {},
  mutations: {},
  getters: {},
});

export default store;

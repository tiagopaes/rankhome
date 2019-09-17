import Vue from 'vue'
import Vuex from 'vuex';
import User from './User';

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    User,
  },
  state: {},
  actions: {},
  mutations: {},
  getters: {},
});

export default store;

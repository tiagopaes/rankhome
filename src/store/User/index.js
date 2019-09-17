import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import StorageService from '@/services/StorageService';

const state = () => ({
  token: StorageService.get('token') ? StorageService.get('token') : null,
  info: StorageService.get('userInfo')
    ? StorageService.get('userInfo')
    : null
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

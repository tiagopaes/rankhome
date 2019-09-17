import StorageService from '@/services/StorageService'

export default {
  setToken(state, payload) {
    state.token = payload
    StorageService.set('token', payload);
  },
  setInfo(state, payload) {
    state.info = payload
    StorageService.set('userInfo', payload);
  }
}

import HttpService from '@/services/HttpService'

export default {
  register({ commit }, payload) {
    return new Promise((resolve, reject) => {
      HttpService.post('/auth/register', payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => reject(error.response.data))
    })
  },
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      HttpService.post('/auth/login', payload)
        .then(response => {
          commit('setToken', response.data.api_token);
          commit('setInfo', response.data);
          resolve(response.data)
        })
        .catch(error => reject(error.response.data))
    })
  }
};

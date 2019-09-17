import StorageService from '@/services/StorageService'
import HttpService from '@/services/HttpService'

export default {
  register({ commit }, _payload) {
    return new Promise((resolve, reject) => {
      HttpService.post('/auth/register', _payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => reject(error.response.data))
    })
  },
  // setToken({ commit }, _payload) {
  //   commit("setToken", _payload);
  //   StorageService.set("token", _payload);
  // },
  // setInfo({ commit }, _payload) {
  //   commit("setInfo", _payload);
  //   StorageService.set("decodedToken", _payload);
  // },
  // login({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post(consts.ENDPOINTS.LOGIN, payload)
  //       .then(response => {
  //         resolve(response.data.data.login_info);
  //       })
  //       .catch(error => reject(error.message || error.response.data.code));
  //   });
  // }
};

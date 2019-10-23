import HttpService from "@/services/HttpService";

export default {
  create({ commit }, payload) {
    return new Promise((resolve, reject) => {
      HttpService.post("/ranking", payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error.response.data));
    });
  },
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      HttpService.get("/ranking")
        .then(response => {
          commit("setRankings", response.data);
          resolve(response.data);
        })
        .catch(error => reject(error.response.data));
    });
  },
  delete({ commit }, payload) {
    return new Promise((resolve, reject) => {
      HttpService.delete(`/ranking/${payload}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error.response.data));
    });
  },
  update({ commit }, payload) {
    return new Promise((resolve, reject) => {
      HttpService.put(`/ranking/${payload.id}`, payload.data)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error.response.data));
    });
  }
};

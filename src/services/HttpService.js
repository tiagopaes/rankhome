import axios from "axios";
import StorageService from "@/services/StorageService";

const apiBaseUrl = process.env.VUE_APP_API_URL;
const apiToken = StorageService.get("token") ? StorageService.get("token") : "";

const http = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "Content-Type": "application/json"
  }
});

export default {
  post(endpoint, params) {
    return http.post(endpoint, params);
  },
  get(endpoint) {
    return http.get(endpoint);
  },
  delete(endpoint) {
    return http.delete(endpoint);
  }
};

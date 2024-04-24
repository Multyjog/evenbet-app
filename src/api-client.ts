import axios, { AxiosInstance } from "axios";
import router from "./router";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://poker.evenbetpoker.com/api/web/v2",
  params: {
    clientId: "default",
  },
});

const apiTokenRefreshClient: AxiosInstance = axios.create({
  baseURL: "https://poker.evenbetpoker.com/api/web",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: {
    clientId: "default",
  },
});

apiClient.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    const originalRequest = error.config;
    const errorResponse = error.response;
    // Checking unathorized err
    if (errorResponse.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await apiTokenRefreshClient
          .post("/auth/token", {
            refreshToken: localStorage.getItem("refreshToken"),
          })
          .then((res) => {
            localStorage.setItem("authToken", res.data.token);
            localStorage.setItem("refreshToken", res.data["refresh-token"]);
            return res;
          });

        originalRequest.params.auth = newToken;
        return axios(originalRequest);
      } catch (refreshError: any) {
        // Checking is refresh token expired
        if (refreshError.response && refreshError.response.status === 422) {
          localStorage.clear();
          router.push({ path: `/${refreshError.response.status}` });
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

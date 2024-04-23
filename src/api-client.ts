import axios, { AxiosInstance, AxiosResponse } from "axios";

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
    console.log("Orig request", originalRequest);
    console.log("ERROR", errorResponse);

    if (errorResponse.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Refresh the token
      const newToken = await apiTokenRefreshClient
        .post("/auth/token", {
          refreshToken: localStorage.getItem("refreshToken"),
        })
        .then((res) => {
          localStorage.setItem("authToken", res.data.token);
          localStorage.setItem("refreshToken", res.data["refresh-token"]);
          return res;
        });

      console.log("SETTING NEW TOKEN:", newToken);
      originalRequest.params.auth = newToken;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default apiClient;

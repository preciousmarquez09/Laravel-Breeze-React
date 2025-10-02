import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  withCredentials: true,
});

// 🔹 Interceptor for handling CSRF token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 419) {
      // 419 = CSRF token mismatch (expired/invalid)
      try {
        // Refresh CSRF cookie
        await api.get("/sanctum/csrf-cookie");

        // Retry the original request
        return api(error.config);
      } catch (csrfError) {
        return Promise.reject(csrfError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;

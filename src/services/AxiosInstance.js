// axiosInstance.js
import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000/api_v1',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // eslint-disable-line no-param-reassign
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;

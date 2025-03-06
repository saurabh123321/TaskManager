import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Your backend URL

const api = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor to include the token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api;
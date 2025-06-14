// src/services/api.ts
// Axios 實例與 API 服務
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

export default api;

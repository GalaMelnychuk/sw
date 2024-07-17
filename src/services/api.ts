import axios from 'axios';
import Config from 'react-native-config';

export const api = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('API Error:', error.response || error.message);
    return error.response || error.message;
  },
);

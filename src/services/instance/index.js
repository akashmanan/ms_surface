import Base64 from '@utils/base64';
import axios from 'axios';
import Config from '../../utils/apiURLs';

export const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Authorization: 'Basic ' + Base64.btoa('nasipadang:every1!day'),
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 15000,
  withCredentials: true,
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

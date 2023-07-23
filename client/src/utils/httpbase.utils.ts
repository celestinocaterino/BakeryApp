import axios from 'axios';

import { API_URL, JWT_TOKEN } from '../constants/config';
import {
  getTokenFromStorage,
  setLocalSession,
  setLocalStorage
} from './storage.utils';

export const httpBase = (isFile = false) => {
  const token = getTokenFromStorage();

  const api = axios.create();

  api.interceptors.request.use(
    (config) => {
      config.baseURL = `${API_URL}api/v1`;

			//@ts-ignore
      config.headers = {
        Accept: 'application/json',
        'Content-Type': isFile ? 'multipart/form-data' : 'application/json',
        Authorization: `Bearer ${getTokenFromStorage()}`
      };
      config.responseType = 'json';

      return config;
    },
    // Do something before request is sent
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const code = error.code;
      const status = error.response.status;
      const data = error.response.data;

      if (code === 'ERR_NETWORK') {
        // have a toast here
      }

      //add object conditionally

      if (status && status === 404) {
        // have a toast here
      } else if (status && status === 500) {
        
        // have a toast here
      } else if (status && data.message.length > 0) {
        // have a toast here
      } else {
        // do nothing
      }
      return Promise.reject(error);
    }
  );

  return api;
};

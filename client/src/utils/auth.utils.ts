import jwtDecode from 'jwt-decode';
import { USER_INFO, JWT_TOKEN } from '../constants/config';
import {
  getLocalStorage,
  setLocalStorage,
  clearLocalStorage,
  clearLocalSession,
  getLocalSession
} from './storage.utils';

export const getUserDetailsFromToken = (token: string) => {
  try {
    const decoded = jwtDecode(token);
    if (decoded) {
      setLocalStorage(USER_INFO, decoded);
      return decoded;
    }
  } catch (e) {
    return false;
  }
};

export const getToken = () => {
  return getLocalStorage(JWT_TOKEN) || getLocalSession(JWT_TOKEN) || false;
};

export const isAuthenticated = () => {
  return getToken() ? true : false;
};

export const getUserData = () => {
  return getLocalStorage(USER_INFO);
};

export const logout = () => {
  clearLocalStorage(JWT_TOKEN);
  clearLocalStorage(USER_INFO);
  clearLocalSession(JWT_TOKEN);
  clearLocalSession(USER_INFO);
};

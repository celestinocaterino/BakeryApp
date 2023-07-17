import { JWT_TOKEN } from '../constants/config';
/**
 * Store string record in the storage
 *
 * @param {string} key
 * @param {string | array | object} value
 */
export const setLocalStorage = (key: string, value: unknown) => {
  if (value && typeof value === 'string') {
    localStorage.setItem(key, value);
  } else {
    localStorage.setItem(key, JSON.stringify(value)); // convert arrays or objects into strings
  }
};

/**
 * Retrieve record from the storage using the key
 *
 * @param {string} key
 */
export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  try {
    if (data) {
      return JSON.parse(data); // converts a JSON string into a Javascript Object
    }
  } catch (e) {
    return data;
  }
};

/**
 * Clear records from the storage using the key
 *
 * @param {string} key
 */
export const clearLocalStorage = (key: string) => localStorage.removeItem(key);

/**
 * Store string record in the storage
 *
 * @param {string} key
 * @param {string | array | object} value
 */
export const setLocalSession = (key: string, value: unknown) => {
  if (value && typeof value === 'string') {
    sessionStorage.setItem(key, value);
  } else {
    sessionStorage.setItem(key, JSON.stringify(value)); // convert arrays or objects into strings
  }
};

/**
 * Retrieve record from the storage using the key
 *
 * @param {string} key
 */
export const getLocalSession = (key: string) => {
  const data = sessionStorage.getItem(key);
  try {
    if (data) {
      return JSON.parse(data); // converts a JSON string into a Javascript Object
    }
  } catch (e) {
    return data;
  }
};

/**
 * Clear records from the storage using the key
 *
 * @param {string} key
 */
export const clearLocalSession = (key: string) => sessionStorage.removeItem(key);

export const getTokenFromStorage = (): string | null => {
  const localStorageToken = getLocalStorage(JWT_TOKEN);
  const sessionStorageToken = getLocalSession(JWT_TOKEN);

  if (localStorageToken) {
    return localStorageToken;
  } else if (sessionStorageToken) {
    return sessionStorageToken;
  } else {
    return null;
  }
};
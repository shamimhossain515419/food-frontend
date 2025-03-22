/* eslint-disable no-undef */
import Cookies from 'js-cookie';

export const setToCookies = (key, value, options = { expires: 10, path: '/' }) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return Cookies.set(key, value, options);
};

export const getFromCookies = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return Cookies.get(key);
};

export const removeFromCookies = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return Cookies.remove(key);
};

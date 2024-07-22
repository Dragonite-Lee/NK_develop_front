import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  try {
    cookies.set(name, value, { path: '/', ...options });
    console.log(`Cookie set: ${name}=${value}`);
  } catch (error) {
    console.error('Error setting cookie:', error);
  }
};

export const getCookie = (name) => {
  return cookies.get(name)
}

export const removeCookie = (name) => {
  return cookies.remove(name);
}
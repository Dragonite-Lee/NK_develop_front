import axios from "axios"

export const client = axios.create({
  // baseURL: process.env.REACT_APP_API,
  baseURL: "http://localhost:8080/",
  headers: {
      "Content-Type": "application/json",
  },
});
axios.defaults.withCredentials = true;
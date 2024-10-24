import axios from "axios"

export const client = axios.create({
  // baseURL: process.env.REACT_APP_API,
  baseURL: "http://ec2-52-78-180-130.ap-northeast-2.compute.amazonaws.com:8080/",
  headers: {
      "Content-Type": "application/json",
  },
});
axios.defaults.withCredentials = true;
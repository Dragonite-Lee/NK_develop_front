import axios from "axios"

export const client = axios.create({
  // baseURL: process.env.REACT_APP_API,
  baseURL: "http://ec2-43-201-63-229.ap-northeast-2.compute.amazonaws.com/",
  headers: {
      "Content-Type": "application/json",
  },
});
axios.defaults.withCredentials = true;
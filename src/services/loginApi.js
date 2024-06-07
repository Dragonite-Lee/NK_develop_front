
import axios from "axios"

import { getCookie, setCookie } from "../utils/cookie";

const client = axios.create({
  // baseURL: process.env.REACT_APP_API,
  baseURL: "http://localhost:8080/",
  headers: {
      "Content-Type": "application/json",
  },
});

axios.defaults.withCredentials = true;
const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

export const loginApi = {
  login: (data) => client.post('api/login', data),

  refreshToken: (data) => client.post('api/refresh', data)
}


export const refreshTokenApi = async () => {
  const refreshToken = getCookie("refreshToken");

  if (refreshToken) {
    await loginApi.refreshToken(refreshToken).then((response) => {
      onLoginSuccess(response);
    }).catch((error) => {
      console.log("[refreshTokenApi Error] : " + error);
    })
  }
}

export const onLoginSuccess = response => {
  const { accessToken, refreshToken } = response.data;

  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  setCookie("refreshToken", refreshToken, {
    path: '/',
    secure: true,
    maxAge: 60 * 60 * 24 * 30
  });

  setTimeout(refreshTokenApi, JWT_EXPIRY_TIME - 10 * 60 * 1000);//accessToken 만료하기 10분 전에 로그인 연장
}
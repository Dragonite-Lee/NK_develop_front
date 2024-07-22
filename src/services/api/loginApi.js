import { client } from "..";

import { getCookie, setCookie } from "../../utils/cookie";

const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

export const loginApi = {
  login: (data) => client.post('/api/login', data),

  refreshToken: (data) => client.post('/api/refresh', data)
}


export const refreshTokenApi = async () => {
  const refreshToken = getCookie("refreshToken");
  
  if (refreshToken) {
    // console.log("실행됨",refreshToken)
    await loginApi.refreshToken(refreshToken).then((response) => {
      onLoginSuccess(response);
    }).catch((error) => {
      // console.log("[refreshTokenApi Error] : " + error);
    })
  }
}

export const onLoginSuccess = response => {
  const { accessToken, refreshToken } = response.data;

  client.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  
  setCookie("refreshToken", refreshToken, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: false,
    sameSite: 'none'
  });

  
  // console.log("login성공시")
  setTimeout(refreshTokenApi, JWT_EXPIRY_TIME - 10 * 60 * 1000);//accessToken 만료하기 10분 전에 로그인 연장
}

export const userApi = async (type, username) => {
  const data = await client.get(`/api/${type}/${username}`);
  return data;
}
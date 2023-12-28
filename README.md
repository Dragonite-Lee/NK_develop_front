## NK학원개발 프로젝트 Front-end   

## 사용 스펙
- React (18.2.0 버전)
- Tailwind css (3.4 버전)
- zustand (4.4.7 버전)
- react-query (5.15.0 버전)

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Tailwindcss-06B6D4?style=for-the-badge&logo=Tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=purple"><img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=Zustand&logoColor=white">


## 폴더 구조
📦src  
 ┣ 📂assets  
 ┣ 📂components  
 ┣ 📂services  
 ┣ 📂store

 ┣📜App.css  
 ┣📜index.css    
 ┣📜App.js  
 ┣📜index.js
 ┣📜reportWebVitals.js  
 ┗📜setupTests.js  
- assets

이미지 혹은 폰트 파일 관리 (파비콘과 같이 index.html에서 직접 사용하여 컴파일 시 필요없는 이미지를 제외하곤 assets에서 관리)  

- components

공용 컴포넌트 관리

- services

비동기 함수 관리 (axios, react-query

- story

전역상태 관리
// import { useQuery } from "@tanstack/react-query";

// import { testDataAxios } from "./services/test";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD

import Main from './container/Main';
import Login from './container/Login';
=======
import 'tailwindcss/base.css';  // tailwind CSS 파일 경로에 따라 수정
import 'tailwindcss/components.css';  // tailwind CSS 파일 경로에 따라 수정
import 'tailwindcss/utilities.css';  // tailwind CSS 파일 경로에 따라 수정

import Main from './container/Main';
>>>>>>> 4c3c391 (숙제 목록 디자인 적용 중)
import './App.css';

function App() {

  //쿼리 사용예제
  // const {data} = useQuery({
  //   queryKey: ['test_data'],
  //   queryFn: () => testDataAxios()
  //     .then((res) => res.data),
  // });
  // console.log(data)
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
<<<<<<< HEAD
          <Route path="/login" element={<Login />}></Route>
=======

>>>>>>> 4c3c391 (숙제 목록 디자인 적용 중)
        </Routes>
      </BrowserRouter>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 4c3c391 (숙제 목록 디자인 적용 중)

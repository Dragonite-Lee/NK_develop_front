// import { useQuery } from "@tanstack/react-query";

// import { testDataAxios } from "./services/test";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import Login from './container/Login';
import Main from './container/student/Main';
import HomeworkList from './container/student/homework/HomeworkList';
import NoticeList from './container/student/notice/NoticeList';
import './App.css';
import { refreshTokenApi } from './services/loginApi';

function App() {
  useEffect(() => {
    refreshTokenApi();
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/main/homeworklist" element={<HomeworkList />}></Route>
          <Route path="/main/noticelist" element={<NoticeList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

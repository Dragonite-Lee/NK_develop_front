// import { useQuery } from "@tanstack/react-query";

// import { testDataAxios } from "./services/test";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import './App.css';
import Login from './container/Login';
import StuMain from './container/student/StuMain';
import StuHomeworkList from './container/student/homework/StuHomeworkList';
import StuNoticeList from './container/student/notice/StuNoticeList';
import StuHomeworkDetail from './container/student/homework/StuHomeworkDetail';
import StuNoticeDetail from './container/student/notice/StuNoticeDetail';
import ParMain from './container/parent/ParMain';
import ParNoticeList from './container/parent/notice/ParNoticeList';
import ParNoticeDetail from './container/parent/notice/ParNoticeDetail';
import ParBehaving from './container/parent/ParBehaving';


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
          <Route path="/student" element={<StuMain />}></Route>
          <Route path="/student/homeworklist" element={<StuHomeworkList />}></Route>
          <Route path="/student/homeworklist/:id" element={<StuHomeworkDetail />}></Route>
          <Route path="/student/noticelist" element={<StuNoticeList />}></Route>
          <Route path="/student/noticelist/:id" element={<StuNoticeDetail />}></Route>
          <Route path="/parent" element={<ParMain />}></Route>
          <Route path="/parent/noticelist" element={<ParNoticeList />}></Route>
          <Route path="/parent/noticelist/:id" element={<ParNoticeDetail />}></Route>
          <Route path="/parent/behaving" element={<ParBehaving />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import { useQuery } from "@tanstack/react-query";

// import { testDataAxios } from "./services/test";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import './App.css';
import Login from './container/Login';
import Main from './container/Main';
import HomeworkList from './container/student/homework/HomeworkList';
import NoticeList from './container/student/notice/NoticeList';
import HomeworkDetail from './container/student/homework/HomeworkDetail';
import NoticeDetail from './container/student/notice/NoticeDetail';

import ParentAd from './container/admin/ParentAd';
import StudentAd from './container/admin/StudentAd';
import TeacherAd from './container/admin/TeacherAd';

import { refreshTokenApi } from './services/loginApi';
import ClassroomAd from './container/admin/ClassroomAd';


function App() {
  // useEffect(() => {
  //   refreshTokenApi();
  // }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/main/homeworklist" element={<HomeworkList />}></Route>
          <Route path="/main/homeworklist/:id" element={<HomeworkDetail />}></Route>
          <Route path="/main/noticelist" element={<NoticeList />}></Route>
          <Route path="/main/noticelist/:id" element={<NoticeDetail />}></Route>
          
          <Route path="/main/parentAd" element={<ParentAd />}></Route>
          <Route path="/main/studentAd" element={<StudentAd />}></Route>
          <Route path="/main/teacherAd" element={<TeacherAd />}></Route>
          <Route path="/main/classroomAd" element={<ClassroomAd />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

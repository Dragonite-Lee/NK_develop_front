// import { useQuery } from "@tanstack/react-query";

// import { testDataAxios } from "./services/test";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import './App.css';

import { refreshTokenApi } from './services/api/loginApi';

const Login = lazy(() => import("./container/Login"));
const Main = lazy(() => import("./container/Main"));
const HomeworkList = lazy(() => import("./container/student/homework/HomeworkList"));
const NoticeList = lazy(() => import("./container/student/notice/NoticeList"));
const HomeworkDetail = lazy(() => import("./container/student/homework/HomeworkDetail"));
const NoticeDetail = lazy(() => import("./container/student/notice/NoticeDetail"));

const ParentAd = lazy(() => import("./container/admin/ParentAd"));
const StudentAd = lazy(() => import("./container/admin/StudentAd"));
const TeacherAd = lazy(() => import("./container/admin/TeacherAd"));
const ClassroomAd = lazy(() => import("./container/admin/ClassroomAd"));
const NoticeAd = lazy(() => import("./container/admin/NoticeAd"));
const NoticeAdWrite = lazy(() => import("./container/admin/notice/NoticeAdWrite"));
const NoticeAdDetail = lazy(() => import("./container/admin/notice/NoticeAdDetail"));
// import Login from './container/Login';
// import Main from './container/Main';
// import HomeworkList from './container/student/homework/HomeworkList';
// import NoticeList from './container/student/notice/NoticeList';
// import HomeworkDetail from './container/student/homework/HomeworkDetail';
// import NoticeDetail from './container/student/notice/NoticeDetail';

// import ParentAd from './container/admin/ParentAd';
// import StudentAd from './container/admin/StudentAd';
// import TeacherAd from './container/admin/TeacherAd';
// import ClassroomAd from './container/admin/ClassroomAd';
// import NoticeAd from './container/admin/NoticeAd';
// import NoticeAdWrite from './container/admin/notice/NoticeAdWrite';
// import NoticeAdDetail from './container/admin/notice/NoticeAdDetail';


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
          <Route path="/main/homeworklist/:id" element={<HomeworkDetail />}></Route>
          <Route path="/main/noticelist" element={<NoticeList />}></Route>
          <Route path="/main/noticelist/:id" element={<NoticeDetail />}></Route>
          
          <Route path="/main/parentAd" element={<ParentAd />}></Route>
          <Route path="/main/studentAd" element={<StudentAd />}></Route>
          <Route path="/main/teacherAd" element={<TeacherAd />}></Route>
          <Route path="/main/classroomAd" element={<ClassroomAd />}></Route>
          <Route path="/main/noticeAd" element={<NoticeAd />}></Route>
          <Route path="/main/noticeAd/noticeAdWrite/:id" element={<NoticeAdWrite />}></Route>
          <Route path="/main/noticeAd/:id" element={<NoticeAdDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

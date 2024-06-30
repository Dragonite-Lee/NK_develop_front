// import { useQuery } from "@tanstack/react-query";

// import { testDataAxios } from "./services/test";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';

import './App.css';

import { refreshTokenApi } from './services/api/loginApi';


const Login = lazy(() => import("./container/Login"));
const Main = lazy(() => import("./container/Main"));

const NoticeSt = lazy(() => import("./container/student/NoticeSt"));
const NoticeAdDetailSt = lazy(() => import("./container/student/notice/NoticeAdDetailSt"));
const NoticeTeDetailSt = lazy(() => import("./container/student/notice/NoticeTeDetailSt"));

const ParentAd = lazy(() => import("./container/admin/ParentAd"));
const StudentAd = lazy(() => import("./container/admin/StudentAd"));
const TeacherAd = lazy(() => import("./container/admin/TeacherAd"));
const ClassroomAd = lazy(() => import("./container/admin/ClassroomAd"));
const NoticeAd = lazy(() => import("./container/admin/NoticeAd"));
const NoticeAdWrite = lazy(() => import("./container/admin/notice/NoticeAdWrite"));
const NoticeAdNewWrite = lazy(() => import("./container/admin/notice/NoticeAdNewWrite"));
const NoticeAdDetail = lazy(() => import("./container/admin/notice/NoticeAdDetail"));

const StudentTe = lazy(() => import("./container/teacher/StudentTe"));
const HomeworkTe = lazy(() => import("./container/teacher/HomeworkTe"));
const NoticeTe = lazy(() => import("./container/teacher/NoticeTe"));
const NoticeAdDetailTe = lazy(() => import("./container/teacher/notice/NoticeAdDetailTe"));
const NoticeTeDetailTe = lazy(() => import("./container/teacher/notice/NoticeTeDetailTe"));
const NoticeTeWrite = lazy(() => import("./container/teacher/notice/NoticeTeWrite"));
const NoticeTeNewWrite = lazy(() => import("./container/teacher/notice/NoticeTeNewWrite"));
// import Login from './container/Login';
// import Main from './container/Main';
// import NoticeAdDetailSt from './container/student/notice/NoticeAdDetailSt';
// import NoticeTeDetailSt from './container/student/notice/NoticeTeDetailSt';
// import NoticeSt from './container/student/NoticeSt';

// import ParentAd from './container/admin/ParentAd';
// import StudentAd from './container/admin/StudentAd';
// import TeacherAd from './container/admin/TeacherAd';
// import ClassroomAd from './container/admin/ClassroomAd';
// import NoticeAd from './container/admin/NoticeAd';
// import NoticeAdWrite from './container/admin/notice/NoticeAdWrite';
// import NoticeAdNewWrite from './container/admin/notice/NoticeAdNewWrite';
// import NoticeAdDetail from './container/admin/notice/NoticeAdDetail';

// import StudentTe from './container/teacher/StudentTe';
// import HomeworkTe from './container/teacher/HomeworkTe';
// import NoticeTe from './container/teacher/NoticeTe';
// import NoticeAdDetailTe from './container/teacher/notice/NoticeAdDetailTe';
// import NoticeTeDetailTe from './container/teacher/notice/NoticeTeDetailTe';
// import NoticeTeNewWrite from './container/teacher/notice/NoticeTeNewWrite';
// import NoticeTeWrite from './container/teacher/notice/NoticeTeWrite';



function App() {
  useEffect(() => {
    refreshTokenApi();
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>로딩 중...</div>}>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/main" element={<Main />}></Route>
    
            <Route path="/main/noticeSt" element={<NoticeSt />}></Route>
            <Route path="/main/noticeSt/adminDetail/:id" element={<NoticeAdDetailSt />}></Route>
            <Route path="/main/noticeSt/teacherDetail/:id" element={<NoticeTeDetailSt />}></Route>
            
            <Route path="/main/parentAd" element={<ParentAd />}></Route>
            <Route path="/main/studentAd" element={<StudentAd />}></Route>
            <Route path="/main/teacherAd" element={<TeacherAd />}></Route>
            <Route path="/main/classroomAd" element={<ClassroomAd />}></Route>
            <Route path="/main/noticeAd" element={<NoticeAd />}></Route>
            <Route path="/main/noticeAd/noticeAdNewWrite" element={<NoticeAdNewWrite />}></Route>
            <Route path="/main/noticeAd/noticeAdWrite/:id" element={<NoticeAdWrite />}></Route>
            <Route path="/main/noticeAd/:id" element={<NoticeAdDetail />}></Route>

            <Route path="/main/studentTe" element={<StudentTe />}></Route>
            <Route path="/main/homeworkTe" element={<HomeworkTe />}></Route>
            <Route path="/main/noticeTe" element={<NoticeTe />}></Route>
            <Route path="/main/noticeTe/adminDetail/:id" element={<NoticeAdDetailTe />}></Route>
            <Route path="/main/noticeTe/teacherDetail/:id" element={<NoticeTeDetailTe />}></Route>
            <Route path="/main/noticeTe/noticeTeNewWrite" element={<NoticeTeNewWrite />}></Route>
            <Route path="/main/noticeTe/noticeTeWrite/:id" element={<NoticeTeWrite />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

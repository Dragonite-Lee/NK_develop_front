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
const HomeworkSt = lazy(() => import("./container/student/HomeworkSt"));
const HomeworkDetail = lazy(() => import("./container/student/homework/HomeworkDetail"));

const ParMain = lazy(() => import("./container/parent/ParMain"));
const NoticePa = lazy(() => import("./container/parent/NoticePa"));
const NoticeAdDetailPa = lazy(() => import("./container/parent/notice/NoticeAdDetailPa"));
const NoticeTeDetailPa = lazy(() => import("./container/parent/notice/NoticeTeDetailPa"));
const ParBehaving = lazy(() => import("./container/parent/ParBehaving"));

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
const HomeworkTeNewWrite = lazy(() => import("./container/teacher/homework/HomeworkTeNewWrite"));
const HomeworkTeWrite = lazy(() => import("./container/teacher/homework/HomeworkTeWrite"));
const HomeworkDetailTe = lazy(() => import("./container/teacher/homework/HomeworkDetail"));
const SubmitDetaiTe = lazy(() => import("./container/teacher/homework/SubmitDetail"));
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
// import HomeworkSt from './container/student/HomeworkSt';
// import HomeworkDetail from './container/student/homework/HomeworkDetail';

// import ParMain from './container/parent/ParMain';
// import ParNoticeList from './container/parent/notice/ParNoticeList';
// import ParNoticeDetail from './container/parent/notice/ParNoticeDetail';
// import ParBehaving from './container/parent/ParBehaving';

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
// import HomeworkTeNewWrite from './container/teacher/notice/NoticeTeNewWrite';
// import HomeworkTeWrite from './container/teacher/homework/HomeworkTeWrite';
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
          <Route exact path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
    
            <Route path="/main/noticeSt" element={<NoticeSt />} />
            <Route path="/main/noticeSt/adminDetail/:id" element={<NoticeAdDetailSt />} />
            <Route path="/main/noticeSt/teacherDetail/:id" element={<NoticeTeDetailSt />} />
            <Route path="/main/homeworkSt" element={<HomeworkSt />} />
            <Route path="/main/homeworkSt/homeworkDetail/:id" element={<HomeworkDetail />} />

            <Route path="/parent" element={<ParMain />} />
            <Route path="/main/noticePa" element={<NoticePa />} />
            <Route path="/main/noticePa/adminDetail/:id" element={<NoticeAdDetailPa />} />
            <Route path="/main/noticePa/teacherDetail/:id" element={<NoticeTeDetailPa />} />
            <Route path="/parent/behaving" element={<ParBehaving />} />

            
            <Route path="/main/parentAd" element={<ParentAd />} />
            <Route path="/main/studentAd" element={<StudentAd />} />
            <Route path="/main/teacherAd" element={<TeacherAd />} />
            <Route path="/main/classroomAd" element={<ClassroomAd />} />
            <Route path="/main/noticeAd" element={<NoticeAd />} />
            <Route path="/main/noticeAd/noticeAdNewWrite" element={<NoticeAdNewWrite />} />
            <Route path="/main/noticeAd/noticeAdWrite/:id" element={<NoticeAdWrite />} />
            <Route path="/main/noticeAd/:id" element={<NoticeAdDetail />} />

            <Route path="/main/studentTe" element={<StudentTe />} />
            <Route path="/main/homeworkTe" element={<HomeworkTe />} />
            <Route path="/main/homeworkTe/homeworkTeNewWrite" element={<HomeworkTeNewWrite />} />
            <Route path="/main/homeworkTe/homeworkTeWrite/:id" element={<HomeworkTeWrite />} />
            <Route path="/main/homeworkTe/HomeworkDetail/:id" element={<HomeworkDetailTe />} />
            <Route path="/main/homeworkTe/HomeworkDetail/:homeworkId/submit/:submitId" element={<SubmitDetaiTe />} />
            <Route path="/main/noticeTe" element={<NoticeTe />} />
            <Route path="/main/noticeTe/adminDetail/:id" element={<NoticeAdDetailTe />} />
            <Route path="/main/noticeTe/teacherDetail/:id" element={<NoticeTeDetailTe />} />
            <Route path="/main/noticeTe/noticeTeNewWrite" element={<NoticeTeNewWrite />} />
            <Route path="/main/noticeTe/noticeTeWrite/:id" element={<NoticeTeWrite />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

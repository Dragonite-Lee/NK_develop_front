import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCookie } from '../utils/cookie';
import useTeacherMainStore from '../store/teacherMain';
import {
  useTeAllClassroomQuery,
  useTeClassroomQuery,
} from '../components/teacher/teacherQuery';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AdMainNoList from '../components/admin/main/AdMainNoList';
import AdMainStList from '../components/admin/main/AdMainStList';
import AdMainTeList from '../components/admin/main/AdMainTeList';
import DropdownCl from '../components/teacher/DropdownCl';
import TeMainNoList from '../components/teacher/main/TeMainNoList';
import TeMainStList from '../components/teacher/main/TeMainStList';
import useStudentMainStore from '../store/studentMain';
import StMainNoList from '../components/student/main/MainNoList';
import useParentMainStore from '../store/parentMain';
import StMainHwList from '../components/student/main/MainHwList';
import StMainHwDoing from '../components/student/main/MainHwDoing';
import TeMainHwList from '../components/teacher/main/TeMainHwList';
import useUserStore from '../store/user';
import { useParentInfo } from '../components/parent/parentQuery';
import DropdownSt from '../components/parent/DropdownSt';
import PaMainHwList from '../components/parent/main/MainHwList';

const Main = () => {
  const navigator = useNavigate();
  const refreshToken = getCookie('refreshToken');
  const role = sessionStorage.getItem('role');

  const {
    classnameIdClient,
    classnameNameClient,
    setClassnameIdClient,
    setClassnameNameClient,
  } = useTeacherMainStore();

  const {
    stClassnameIdClient,
    stClassnameNameClient,
    setStClassnameIdClient,
    setStClassnameNameClient,
  } = useStudentMainStore();

  const {
    paStudentIdClient,
    paStudentNameClient,
    setPaStudentIdClient,
    setPaStudentNameClient,
  } = useParentMainStore();

  const { user } = useUserStore();

  const { allClassroomData } = useTeAllClassroomQuery();
  const { classroomData } = useTeClassroomQuery(role === '선생님' ? user?.username : '');
  // console.log('classroomData: ', classroomData);
  const classroomDataResult = classroomData?.data.Classroom.filter(
    (item) => item.type
  ).map((item) => item.classroom);
  const { parnetInfoData } = useParentInfo(
    role === '학부모' ? user?.username : ''
  );
  // console.log('parnetInfoData: ', parnetInfoData);

  useEffect(() => {
    if (!refreshToken) {
      navigator('/');
    }
  }, [refreshToken]);

  return (
    <div className='min-w-[280px]'>
      <Header />
      {role === '학생' && (
        <main className='desktop:w-[1000px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] desktop:pb-[156px] tablet_change:pb-[48px] mobile:pb-[68px] mainHeight'>
          <div className='relative'>
            <DropdownCl
              state={stClassnameNameClient}
              setState={setStClassnameNameClient}
              setId={setStClassnameIdClient}
              itemData={allClassroomData?.data}
            />
            {stClassnameIdClient && (
              <div className='desktop:flex tablet:flex-row mobile:flex-col desktop:items-start desktop:gap-[24px] mt-[20px] z-0'>
                <StMainHwList
                  classId={stClassnameIdClient}
                  className={stClassnameNameClient}
                />
                <div className='flex flex-col self-start gap-[24px]'>
                  <StMainHwDoing />
                  <StMainNoList
                    classId={stClassnameIdClient}
                    className={stClassnameNameClient}
                  />
                </div>
              </div>
            )}
          </div>
        </main>
      )}
      {role === '학부모' && (
        <main className='desktop:w-[1000px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] desktop:pb-[156px] tablet_change:pb-[48px] mobile:pb-[68px] mainHeight'>
          <div className='relative'>
            <DropdownSt
              state={paStudentNameClient}
              setState={setPaStudentNameClient}
              setId={setPaStudentIdClient}
              itemData={parnetInfoData?.data.students}
            />
            {paStudentNameClient && (
              <div className='desktop:flex tablet:flex-row mobile:flex-col desktop:items-start desktop:gap-[24px] mt-[20px] z-0'>
                <PaMainHwList studentId={paStudentIdClient} />
              </div>
            )}
          </div>
        </main>
      )}
      {role === '관리자' && (
        <main className='desktop:w-[1000px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] desktop:pb-[156px] tablet_change:pb-[48px] mobile:pb-[68px] mainHeight'>
          <div className='desktop:flex tablet:flex-row mobile:flex-col desktop:items-start desktop:gap-[24px]'>
            <AdMainNoList />
            <div className='flex flex-col self-start gap-[24px]'>
              <AdMainStList />
              <AdMainTeList />
            </div>
          </div>
        </main>
      )}
      {role === '선생님' && (
        <main className='desktop:w-[1000px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] desktop:pb-[156px] tablet_change:pb-[48px] mobile:pb-[68px] mainHeight'>
          <div className='relative'>
            <DropdownCl
              state={classnameNameClient}
              setState={setClassnameNameClient}
              setId={setClassnameIdClient}
              itemData={classroomDataResult}
            />
            {classnameIdClient && (
              <div className='desktop:flex tablet:flex-row mobile:flex-col desktop:items-start desktop:gap-[24px] mt-[20px] z-0'>
                <TeMainStList
                  classId={classnameIdClient}
                  className={classnameNameClient}
                />
                <div className='flex flex-col self-start gap-[24px] desktop:mt-0 mt-[24px]'>
                  <TeMainHwList
                    classId={classnameIdClient}
                    className={classnameNameClient}
                  />
                  <TeMainNoList
                    classId={classnameIdClient}
                    className={classnameNameClient}
                  />
                </div>
              </div>
            )}
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Main;

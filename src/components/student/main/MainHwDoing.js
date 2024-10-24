import React from 'react';
import { Link } from 'react-router-dom';

import CircleRight from '../../../assets/student/CaretCircleRight.png';
import useStudentCurrentHomeworkStore from '../../../store/studentCurrentHomework';

const StMainHwDoing = () => {
  const {
    homeworkIdClient,
    homeworkTitleClient,
    homeworkTeacherClient,
    hoemworkTimewatch,
  } = useStudentCurrentHomeworkStore();

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    if (getHours !== '00')
      return `${getHours} 시간 ${getMinutes} 분 ${getSeconds}초`;
    if (getMinutes !== '00') return `${getMinutes} 분 ${getSeconds}초`;
    return `${getSeconds}초`;
  };
  return (
    <section className='glassWhite mt-[24px] py-[24px] desktop:w-[486px] mobile:w-full tablet:px-[32px] mobile:px-[26px]'>
      <div className='text-[15px] flex items-center font-paybooc_700'>
        숙제 이어서 하기
      </div>
      {hoemworkTimewatch != 0 ? (
        <>
          <div className='mt-[18px] flex items-center justify-start gap-[12px] text-[14px]'>
            <div className='font-nanum_700'>{homeworkTitleClient}</div>
            <div className='font-nanum_400 text-grey'>
              [{homeworkTeacherClient}]
            </div>
          </div>
          <div className='mt-[24px] flex items-center justify-between'>
            <div className='font-nanum_900 text-[32px] text-homework1 textStroke'>
              {formatTime(hoemworkTimewatch)}
            </div>
            <Link to={`/main/homeworkSt/homeworkDetail/${homeworkIdClient}`}>
              <div
                className={`bg-homework1 text-white rounded-[10px] w-[130px] h-[36px] flex items-center justify-center`}
              >
                숙제하러가기
              </div>
            </Link>
          </div>
        </>
      ) : (
        <div className='text-[12px] mt-2 font-paybooc_700'>이어서 할 숙제가 없습니다.</div>
      )}
    </section>
  );
};

export default StMainHwDoing;

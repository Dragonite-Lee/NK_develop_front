import { Link } from "react-router-dom";
import { useState } from 'react';

import ArrowBelow from "../../assets/student/ArrowBelow.png"
import ArrowRightBlack from "../../assets/ArrowRightBlack.png"
import ArrowLeftBlack from "../../assets/ArrowLeftBlack.png"


const Dummy_student = [
    {
        work: '중등 수학 내신반 12월 1주차 테스트 오답풀이',
        status: '미완료',
        name: '이적분 선생님',
        date: '2023.12.09까지',
      },
    {
      work: '중등 수학 내신반 12월 1주차 공통숙제',
      status: '완료',
      name: '김수학 선생님',
      date: '2023.12.09까지',
    },
    {
        work: '중등 수학 내신반 6월 기출풀이',
        status: '완료',
        name: '박미분 선생님',
        date: '2023.12.09까지',
      },
      {
        work: '중등 수학 내신반 11월 4주차 공통숙제',
        status: '미완료',
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },
      {
        work: '중등 수학 내신반 11월 3주차 공통숙제',
        status: '미완료',
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },
      {
        work: '중등 수학 내신반 11월 2주차 공통숙제',
        status: '완료',
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },
      {
        work: '중등 수학 내신반 11월 1주차 테스트 오답풀이',
        status: '미완료',
        name: '이적분 선생님',
        date: '2023.12.09까지',
      },
      {
        work: '중등 수학 내신반 11월 1주차 공통숙제',
        status: '미완료',
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },
      {
        work: '중등 수학 내신반 3월 기출풀이',
        status: '완료',
        name: '박미분 선생님',
        date: '2023.12.09까지',
      },
      {
        work: '중등 수학 내신반 10월 5주차 공통숙제',
        status: '미완료',
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },  

  ];

const HomeworkList = () => {
    return (
      <section className="tablet:mt-[35px] mobile:mt-[30px] tablet:mb-[60px] mobile:mb-[24px]">
        <div className="tablet:px-[222px] mobile:px-[30px] justify-center items-center">
          <div className="px-[22px] py-[18px] desktop:w-[344px] h-[56px] w-full glassWhite flex items-center justify-between">
            <p className="text-[16px] flex items-center font-paybooc_500">
              우리 반을 선택하세요 
            </p>
            <p>
              <img src={ArrowBelow} alt="flex justify-end" className="w-[20px] h-[10px]" />
            </p>
          </div>
          <div className="flex tablet:flex-row mobile:flex-col items-right justify-between w-full tablet:gap-[6px] mobile:gap-[6px] mt-[30px] mb-[12px] font-paybooc_700">
            <p className="text-[18px] flex items-center">
            숙제 목록 (15)
            </p>
          </div>
          <div className="flex justify-end gap-[6px] w-full">
            <div className="flex items-center justify-center homeworkFilter">
              <p className="text-[12px] text-white font-paybooc_700">해야할 숙제</p>
            </div>
            <div className="flex items-center justify-center homeworkFilter">
              <p className="text-[12px] text-white font-paybooc_700">완료한 숙제</p>
            </div>
            <div className="flex items-center justify-center homeworkFilter">
            <p className="text-[12px] text-white font-paybooc_700">제출한 숙제</p>
            </div>
          </div>
          <div className="tablet:flex-col mobile:flex-col w-full">
            {Dummy_student.map((item, index) => (
              <div key={index} className="flex-row justify-between mt-[15px] mb-[15px]">
                <div className="flex items-start mt-[6px]">
                  <p className="text-[12px] font-nanum_700">{item.work}</p>
                  <p className="text-[12px] flex justify-end font-nanum_400 ml-auto ]">{item.status}</p>
                </div>
                <div className="flex items-start mt-[6px]">
                  <p className="text-[11px] text-gray mb-[15px] font-nanum_700">{item.name}</p>
                  <p className="text-[11px] text-gray flex justify-end font-nanum_400 ml-auto mb-[15px]">{item.date}</p>
                </div>
                <div className="divider" />
              </div>
            ))}
          </div>
          <div className="flex px-[50px] justify-center items-center w-full tablet:gap-[60px] mobile:gap-[30px]">
          <div className="flex justify-center items-center">
              <img src={ArrowLeftBlack} alt="ArrowLEftBlack" className="w-[20px] h-[20px]" />
              <p className="text-[12px] text-grayDark font-nanum_400" >이전</p>
            </div>
            <p className="text-[12px] items-center text-grayDark font-nanum_400" >2 / 3 페이지</p>
            <div className="flex justify-center items-center">
              <p className="text-[12px] text-grayDark font-nanum_400" >다음</p>
              <img src={ArrowRightBlack} alt="ArrowRightBlack" className="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default HomeworkList;
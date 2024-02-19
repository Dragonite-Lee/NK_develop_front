import React from "react";
import SelectOption from "./notice/SelectOption"
import SelectClass from "./SelectClass"

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

const MainHwList = () => {
  return (
    <section>
      <div className="w-full mt-[32px] mb-[12px]">
        <div className="text-[18px] flex items-center font-paybooc_700">
        숙제 목록 ({Dummy_student.length})
        </div>
      </div>
      {/* 수정 예정 */}
      <div className="w-[fit-content] glassWhite flex justify-end ml-auto">
        <div className="text-[13px] flex items-center justify-end px-[10px] font-nanum_500">
          <SelectOption />
        </div>
      </div>
      <div className="w-full pt-[5px] pb-[1px]">
        {Dummy_student.map((item, index) => (
          <div key={index} className="mb-[15px]">
            <div className="flex items-start mt-[15px] text-[13px]">
              <div className="font-nanum_700">{item.work}</div>
              <div className="flex justify-end font-nanum_400 ml-auto ]">{item.status}</div>
            </div>
            <div className="flex items-start mt-[7px] mb-[15px] text-[12px]">
              <div className="text-gray font-nanum_700">{item.name}</div>
              <div className="text-gray flex justify-end font-nanum_400 ml-auto">{item.date}</div>
            </div>
            <div className="divider" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainHwList;
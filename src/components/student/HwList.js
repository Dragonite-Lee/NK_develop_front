import React from "react";
import SelectOption from "./notice/SelectOption"
import SelectClass from "./SelectClass"

import ArrowRightBlack from "../../assets/ArrowRightBlack.png"
import ArrowLeftBlack from "../../assets/ArrowLeftBlack.png"
import { Link } from "react-router-dom";


const Dummy_student = [
  {
    id: 1,
    work: '중등 수학 내신반 12월 1주차 테스트 오답풀이',
    status: '미완료',
    name: '이적분 선생님',
    date: '2023.12.09까지',
  },
  {
    id: 2,
    work: '중등 수학 내신반 12월 1주차 공통숙제',
    status: '완료',
    name: '김수학 선생님',
    date: '2023.12.09까지',
  },
  {
    id: 3,
    work: '중등 수학 내신반 6월 기출풀이',
    status: '완료',
    name: '박미분 선생님',
    date: '2023.12.09까지',
  },
  {
    id: 4,
    work: '중등 수학 내신반 11월 4주차 공통숙제',
    status: '미완료',
    name: '김수학 선생님',
    date: '2023.12.09까지',
  },
  {
    id: 5,
    work: '중등 수학 내신반 11월 3주차 공통숙제',
    status: '미완료',
    name: '김수학 선생님',
    date: '2023.12.09까지',
  },
  {
    id: 6,
    work: '중등 수학 내신반 11월 2주차 공통숙제',
    status: '완료',
    name: '김수학 선생님',
    date: '2023.12.09까지',
  },
  {
    id: 7,
    work: '중등 수학 내신반 11월 1주차 테스트 오답풀이',
    status: '미완료',
    name: '이적분 선생님',
    date: '2023.12.09까지',
  },
  {
    id: 8,
    work: '중등 수학 내신반 11월 1주차 공통숙제',
    status: '미완료',
    name: '김수학 선생님',
    date: '2023.12.09까지',
  },
  {
    id: 9,
    work: '중등 수학 내신반 3월 기출풀이',
    status: '완료',
    name: '박미분 선생님',
    date: '2023.12.09까지',
  },
  {
    id: 10,
    work: '중등 수학 내신반 10월 5주차 공통숙제',
    status: '미완료',
    name: '김수학 선생님',
    date: '2023.12.09까지',
  },  
  {
    id: 11,
    work: '중등 수학 내신반',
    status: '미완료',
    name: '김수학 선생님',
    date: '2023.12.09까지',
  },  
  {
    id: 12,
    work: '중등 수학 내신반 10월 5주차 공통숙제',
    status: '미완료',
    name: '김수학 선생님',
    date: '2023.12.09까지',
  },  
  {
    id: 13,
    work: '중등 수학 내신반 오답',
    status: '미완료',
    name: '김수학 선생님',
    date: '2023.12.09까지',
  },  

  ];

const HwList = () => {
  return (
    <section>
      <SelectClass />
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
          <Link key={index} className="block mb-[15px]" to={`/main/homeworklist/:${item.id}`}>
            <div className="flex items-start justify-between mt-[15px] text-[13px]">
              <div className="font-nanum_700">{item.work}</div>
              <div className="font-nanum_400">{item.status}</div>
            </div>
            <div className="flex items-start justify-between mt-[7px] mb-[15px] text-[12px]">
              <div className="text-gray font-nanum_700">{item.name}</div>
              <div className="text-gray font-nanum_400">{item.date}</div>
            </div>
            <div className="divider" />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center w-full tablet:gap-[60px] mobile:gap-[30px] text-[12px]">
        <div className="flex justify-center items-center gap-[3px]">
          <img src={ArrowLeftBlack} alt="ArrowleftBlack" className="w-[20px] h-[20px]" />
          <div className="text-grayDark font-nanum_400" >이전</div>
        </div>
        <div className="items-center text-grayDark font-nanum_400">2 / 3 페이지</div>
        <div className="flex justify-center items-center gap-[3px]">
          <div className="text-grayDark font-nanum_400" >다음</div>
          <img src={ArrowRightBlack} alt="ArrowRightBlack" className="w-[20px] h-[20px]" />
        </div>
      </div>
    </section>
  );
}

export default HwList;
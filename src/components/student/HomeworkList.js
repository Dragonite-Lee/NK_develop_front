import { Link } from "react-router-dom";

import ArrowBelow from "../../assets/student/ArrowBelow.png"
import ArrowRightBlack from "../../assets/ArrowRightBlack.png"


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
      <section className="tablet:mt-[35px] mobile:mt-0 tablet:mb-[60px] mobile:mb-[24px]">
        <div className="px-[222px] justify-center items-center">
          <div className="px-[22px] py-[18px] desktop:w-[344px] h-[56px] w-full glassWhite flex items-center justify-between">
            <p className="text-[16px] flex items-center font-paybooc_500">
              우리 반을 선택하세요 
            </p>
            <p>
              <img src={ArrowBelow} alt="flex justify-end" className="w-[20px] h-[10px]" />
            </p>
          </div>
          <div className="flex tablet:flex-row mobile:flex-col items-center justify-between tablet:gap-6 mobile:gap-[24px] mt-6 font-paybooc_700">
            <p className="text-[18px] flex items-center">
            숙제 목록 (15)
            </p>
          </div>
          <div className="flex justify-end gap-[6px]">
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
          <div className="tablet:flex-col mobile:flex-col">
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
          <div className="flex justify-center items-center">
            <p className="text-[12px] text-gray-dart font-nanum_400" >1 / 3 페이지</p>
            <p className="text-[12px] text-gray-dart font-nanum_400" >다음</p>
            <img src={ArrowRightBlack} alt="ArrowRightBlack" className="w-[20px] h-[10px]" />
          </div>
        </div>
      </section>
    );
}

export default HomeworkList;
import { Link } from "react-router-dom";

import ArrowBelow from "../../assets/student/ArrowBelow.png"


const Dummy_student = [
    {
      name: '중등 수학 내신반 12월 1주차 기출풀이',
      status: '미완료',
    },
    {
      name: '김수학 선생님',
      date: '2023.12.09까지',
    },
    
    {
        name: '중등 수학 내신반 12월 1주차 기출풀이',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },

      {
        name: '중등 수학 내신반 12월 1주차 기출풀이',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },

      {
        name: '중등 수학 내신반 10월 5주차 공통 숙제',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },

      {
        name: '중등 수학 내신반 11월 1주차 공통 숙제',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },

      {
        name: '중등 수학 내신반 11월 2주차 공통 숙제',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },

      {
        name: '중등 수학 내신반 11월 3주차 공통 숙제',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },

      {
        name: '중등 수학 내신반 11월 4주차 공통 숙제',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },

      {
        name: '중등 수학 내신반 12월 1주차 공통 숙제',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },

      {
        name: '중등 수학 내신반 12월 2주차 공통 숙제',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },

      {
        name: '중등 수학 내신반 12월 3주차 공통 숙제',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },

      {
        name: '중등 수학 내신반 12월 1주차 테스트 오답풀이',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },
      {
        name: '중등 수학 내신반 12월 1주차 테스트 오답풀이',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },
      {
        name: '중등 수학 내신반 12월 1주차 중등 수학 내신반 12월 1주차 테스트 오답풀이',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },
      {
        name: '중등 수학 내신반 12월 1주차 테스트 오답풀이',
        status: '미완료',
      },
      {
        name: '김수학 선생님',
        date: '2023.12.09까지',
      },



  ];

const HomeworkList = () => {
    return (
        <section className="tablet:mt-[35px] mobile:mt-0 tablet:mb-[60px] mobile:mb-[24px]">
      <div className="px-[30px] py-[27px] desktop:w-[588px] w-full glassWhite flex items-center justify-between">
        <p className="text-[16px] flex items-center gap-[4px]">
          우리 반을 선택하세요 
        </p>
        <p>
          <img src={ArrowBelow} alt="flex justify-end" className="w-[15px] h-[10px]" />
        </p>
      </div>
      <div className="flex tablet:flex-row mobile:flex-col items-center justify-between tablet:gap-6 mobile:gap-[24px] mt-6 font-paybooc_700">
        <p className="text-[18px] flex items-center">
        숙제 목록 (
        </p>
      </div>
      <div className="tablet:flex-row mobile:flex-row justify-end tablet:gap-[4px] mobile:gap-[4px]">
        <div className="flex w-full homeworkFilter">
          <p className="text-[14px] text-white">해야할 숙제</p>
        </div>
        <div className="flex w-full homeworkFilter">
          <p className="text-[14px] text-white">완료한 숙제</p>
        </div>
        <div className="flex w-full homeworkFilter">
          <p className="text-[14px] text-white">제출한 숙제</p>
        </div>
      </div>
      <div className="tablet:flex-col mobile:flex-col">
      <div>
        {Dummy_student.map((item, index) => (
          <div key={index} className="tablet:flex-row mobile:flex-row justify-between tablet:gap-[2px] mobile:gap-[2px]">
            <div className="flex items-start">
              <p className="text-[12px]">{item.name}</p>
              <p className="text-[11px] flex justify-end ml-auto">{item.status || item.date}</p>
            </div>
          </div>
          ))}
      </div>
      </div>
    </section>
    );
}

export default HomeworkList;
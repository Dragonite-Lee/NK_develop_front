import React from "react";
import { Link } from "react-router-dom";

import ArrowRightBlack from "../../../assets/ArrowRightBlack.png";
import ArrowLeftBlack from "../../../assets/ArrowLeftBlack.png";
import CircleRight from "../../../assets/student/CaretCircleRight.png";

const Dummy_student = [
  {
    id: 0,
    work: "중등 수학 내신반 12월 1주차 테스트 오답풀이",
    status: "미완료",
    name: "이적분 선생님",
    date: "2023.12.09까지",
  },
  {
    id: 1,
    work: "중등 수학 내신반 12월 1주차 공통숙제",
    status: "완료",
    name: "김수학 선생님",
    date: "2023.12.09까지",
  },
  {
    id: 2,
    work: "중등 수학 내신반 6월 기출풀이",
    status: "반려된 숙제",
    name: "박미분 선생님",
    date: "2023.12.09까지",
  },
  {
    id: 3,
    work: "중등 수학 내신반 11월 4주차 공통숙제",
    status: "반려된 숙제",
    name: "김수학 선생님",
    date: "2023.12.09까지",
  },
  {
    id: 4,
    work: "중등 수학 내신반 11월 3주차 공통숙제",
    status: "미완료",
    name: "김수학 선생님",
    date: "2023.12.09까지",
  },
  // {
  //   work: '중등 수학 내신반 11월 2주차 공통숙제',
  //   status: '완료',
  //   name: '김수학 선생님',
  //   date: '2023.12.09까지',
  // },
  // {
  //   work: '중등 수학 내신반 11월 1주차 테스트 오답풀이',
  //   status: '제출 완료',
  //   name: '이적분 선생님',
  //   date: '2023.12.09까지',
  // },
  // {
  //   work: '중등 수학 내신반 11월 1주차 공통숙제',
  //   status: '미완료',
  //   name: '김수학 선생님',
  //   date: '2023.12.09까지',
  // },
  // {
  //   work: '중등 수학 내신반 3월 기출풀이',
  //   status: '확인 완료',
  //   name: '박미분 선생님',
  //   date: '2023.12.09까지',
  // },
  // {
  //   work: '중등 수학 내신반 10월 5주차 공통숙제',
  //   status: '확인 완료',
  //   name: '김수학 선생님',
  //   date: '2023.12.09까지',
  // },
  // {
  //   work: '중등 수학 내신반 11월 1주차 공통숙제',
  //   status: '미완료',
  //   name: '김수학 선생님',
  //   date: '2023.12.09까지',
  // },
  // {
  //   work: '중등 수학 내신반 11월 1주차 테스트 오답풀이',
  //   status: '제출 완료',
  //   name: '미적분 선생님',
  //   date: '2023.12.09까지',
  // },
];

const MainHwList = () => {
  //   let findHomework = Dummy_student.find(function(homework) {
  //     return homework.status == 원하는값
  // });
  {
    /* <div
                    onClick={() => onChangeSelection("TODO")}
                    className={`w-[68px] h-[26px] rounded-[10px] flex items-center justify-center ${
                      stToggle ? " bg-homework1/30" : " bg-white1"
                    } text-homework1 border border-homework1 outline outline-1 outline-homework1`}
                  >
                    # 미완료
                  </div>
                  <div
                    onClick={() => onChangeSelection("REJECT")}
                    className={`w-[95px] h-[26px] rounded-[10px] flex items-center justify-center ${
                      paToggle ? " bg-homework2/30" : " bg-white1"
                    } text-homework2 border border-homework2 outline outline-1 outline-homework2`}
                  >
                    # 반려된 숙제
                  </div>
                  <div
                    onClick={() => onChangeSelection("COMPLETE")}
                    className={`w-[67px] h-[26px] rounded-[10px] flex items-center justify-center ${
                      teToggle ? " bg-main3/30" : " bg-white1"
                    } text-main3 border border-main3 outline outline-1 outline-main3`}
                  >
                    # 완료
                  </div> */
  }
  return (
    <section className="glassWhite mt-[24px] py-[24px] desktop:w-[486px] mobile:w-full tablet:px-[32px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[15px] flex items-center font-paybooc_700">
          숙제 목록 ({Dummy_student.length})
        </div>
        <Link to="/main/homeworklist">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      {/* 수정 예정 */}
      <div className="mt-[11px] flex items-center justify-start ">
        대충 필터~~
      </div>
      <div className="w-full">
        {Dummy_student.map((item, index) => (
          <Link
            key={index}
            to={`/main/homeworklist/:${item.id}`}
            className="block"
          >
            {index != 0 && <div className="divider" />}
            <div className="flex items-center justify-between mt-[16px] text-[12px]">
              <div className="font-nanum_700">{item.work}</div>
              <div className="font-paybooc_700">{item.status}</div>
            </div>
            <div
              className={`flex items-center justify-between mt-[9px] text-[11px] font-nanum_400 text-grey ${
                index != 4 && " mb-[16px]"
              }`}
            >
              <div>{item.name}</div>
              <div>{item.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MainHwList;

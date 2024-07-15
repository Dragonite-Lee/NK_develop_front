import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ArrowRightBlack from "../../../assets/ArrowRightBlack.png";
import ArrowLeftBlack from "../../../assets/ArrowLeftBlack.png";
import CircleRight from "../../../assets/student/CaretCircleRight.png";
import useStudentHomeworkStore from "../../../store/studentHomework";
import { useStHomeworkQuery } from "../studentQuery";

const StMainHwList = ({ classId, className }) => {

  const [selection, setSelection] = useState(new Set());
  const [filter, setFilter] = useState([]);
  const [paramsPage, setParamsPage] = useState(0);

  const [todoToggle, setTodoToggle] = useState(false);
  const [submitToggle, setSubmitToggle] = useState(false);
  const [completeToggle, setCompleteToggle] = useState(false);
  const [rejectToggle, setRejectToggle] = useState(false);

  const { homeworkData } = useStHomeworkQuery(classId, paramsPage, ...filter);

  const onChangeSelection = (value) => {
    const newSelection = new Set(selection);

    if (newSelection.has(value)) {
      newSelection.delete(value);
      if (value == "TODO") {
        setTodoToggle(false);
      } else if (value == "SUBMIT") {
        setSubmitToggle(false);
      } else if (value == "COMPLETE") {
        setCompleteToggle(false);
      } else {
        setRejectToggle(false);
      }
    } else {
      newSelection.add(value);
      if (value == "TODO") {
        setTodoToggle(true);
      } else if (value == "SUBMIT") {
        setSubmitToggle(true);
      } else if (value == "COMPLETE") {
        setCompleteToggle(true);
      } else {
        setRejectToggle(true);
      }
    }
    setSelection(newSelection);
    // prop으로 데이터 내보냄
    setFilter([...newSelection]);
  };
  

  const {
    setClassnameIdClient,
    setClassnameNameClient,
  } = useStudentHomeworkStore();

  useEffect(() => {
    setClassnameIdClient(classId);
    setClassnameNameClient(className);
  }, [classId, className]);
  
  return (
    <section className="glassWhite mt-[24px] pt-[24px] pb-[8px] desktop:w-[486px] mobile:w-full tablet:px-[32px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[15px] flex items-center font-paybooc_700">
          숙제 목록 ({homeworkData?.data.results.length})
        </div>
        <Link to="/main/homeworkSt">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="mt-[11px] pb-[8px] flex items-center justify-start flex-wrap gap-[5px] font-nanum_700 text-[13px]">
        <div
          onClick={() => onChangeSelection("TODO")}
          className={`w-[95px] h-[26px] rounded-[10px] flex items-center justify-center cursor-pointer ${
            todoToggle ? " bg-homework1/30" : " bg-white1"
          } text-homework1 border border-homework1 outline outline-1 outline-homework1`}
        >
          # 해야할 숙제
        </div>
        <div
          onClick={() => onChangeSelection("SUBMIT")}
          className={`w-[95px] h-[26px] rounded-[10px] flex items-center justify-center cursor-pointer ${
            submitToggle ? " bg-main2/30" : " bg-white1"
          } text-main2 border border-main2 outline outline-1 outline-main2`}
        >
          # 제출한 숙제
        </div>
        <div
          onClick={() => onChangeSelection("COMPLETE")}
          className={`w-[95px] h-[26px] rounded-[10px] flex items-center justify-center cursor-pointer ${
            completeToggle ? " bg-main3/30" : " bg-white1"
          } text-main3 border border-main3 outline outline-1 outline-main3`}
        >
          # 완료된 숙제
        </div>
        <div
          onClick={() => onChangeSelection("REJECT")}
          className={`w-[95px] h-[26px] rounded-[10px] flex items-center justify-center cursor-pointer ${
            rejectToggle ? " bg-homework2/30" : " bg-white1"
          } text-homework2 border border-homework2 outline outline-1 outline-homework2`}
        >
          # 반려된 숙제
        </div>
      </div>
      <div className="w-full">
        {homeworkData?.data.results.map((item, index) => {
          return (
            index < 5 && (
              <Link
                key={index}
                to={`/main/homeworkSt/homeworkDetail/${item.id}`}
                className="block"
              >
                {index !== 0 && <div className="divider" />}
                <div className="my-[16px] ">
                  <div className="flex items-center justify-between text-[13px]">
                    <div className="font-nanum_700">{item.title}</div>
                    <div className="font-paybooc_700">
                        {
                          item.status === "TODO" ? (<div className="text-homework1">해야할 숙제</div>)
                          : item.status === "SUBMIT" ? (<div className="text-main2">제출한 숙제</div>)
                          : item.status === "COMPLETE" ? (<div className="text-main3">완료된 숙제</div>)
                          : (<div className="text-homework2">반려된 숙제</div>)
                        }
                    </div>
                  </div>
                  <div className="flex items-center justify-between font-nanum_400 text-grey text-[12px] mt-[8px]">
                    <div>{item.teacher.nickname}</div>
                    <div>
                      {item.deadline.slice(0, 10)} 까지
                    </div>
                  </div>
                </div>
              </Link>
            )
          );
        })}
      </div>
    </section>
  );
};

export default StMainHwList;

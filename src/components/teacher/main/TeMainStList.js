import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTeClassroomStudentQuery } from "../teacherQuery";
import useTeacherStudentStore from "../../../store/teacherStudent"

import ArrowRightBlack from "../../../assets/ArrowRightBlack.png";
import ArrowLeftBlack from "../../../assets/ArrowLeftBlack.png";
import CircleRight from "../../../assets/student/CaretCircleRight.png";

import calculateAge from "../../../utils/calculateAge";


const TeMainStList = ({ classId, className }) => {
  const { classroomStudentData, isLoading } = useTeClassroomStudentQuery(classId);

  const {
    setClassnameIdClient,
    setClassnameNameClient,
  } = useTeacherStudentStore();

  useEffect(() => {
    setClassnameIdClient(classId);
    setClassnameNameClient(className);
  }, [classId, className])

  if (isLoading)
    return <div className="font-nanum_700 text-[14px]">로딩 중...</div>;

  return (
    <section className="glassWhite desktop:mt-0 mobile:mt-[24px] py-[24px] desktop:w-[305px] mobile:w-full tablet:px-[32px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[16px] flex items-center font-paybooc_700">
          학생 관리 ({classroomStudentData?.data.length})
        </div>
        <Link to="/main/studentTe">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="w-full mt-[8px]">
        {classroomStudentData?.data.map((item, index) => {
          return (
            index < 15 && (
              <div
                key={index}
                className="flex items-center justify-between mt-[16px] tablet:text-[14px] mobile:text-[12px] font-nanum_400"
              >
                <div>{item.nickname}</div>
                <div className="text-grey">
                  {item.schoolName}{" "}
                  <span>(만 {calculateAge(item.birth)}세)</span>
                </div>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default TeMainStList;

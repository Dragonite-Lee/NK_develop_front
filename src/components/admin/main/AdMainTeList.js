import React from "react";
import { Link } from "react-router-dom";

import { useAdAllTeacherClassroomQuery } from "../adminQuery";

import CircleRight from "../../../assets/student/CaretCircleRight.png";

const AdMainTeList = () => {
  const { allTeacherClassroomData, isLoading } =
    useAdAllTeacherClassroomQuery();

  if (isLoading)
    return <div className="font-nanum_700 text-[14px]">로딩 중...</div>;
  return (
    <section className="glassWhite py-[24px] desktop:w-[463px] mobile:w-full tablet:px-[32px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[16px] flex items-center font-paybooc_700">
          선생님 관리 ({allTeacherClassroomData?.data.length})
        </div>
        <Link to="/main/teacherAd">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="w-full mt-[8px]">
        {allTeacherClassroomData?.data.map((item, index) => {
          return (
            index < 6 && (
              <div
                key={index}
                className="flex items-center justify-between mt-[16px] text-[14px] font-nanum_400"
              >
                <div>{item.nickname}</div>
                {item.Classroom.length === 0 ? (
                  <div />
                ) : item.Classroom.length === 1 ? (
                  <div className="text-grey">
                    {item.Classroom[0].classroom.classname}
                  </div>
                ) : (
                  <div className="text-grey">
                    {item.Classroom[0].classroom.classname} 외{" "}
                    {item.Classroom.length - 1}개 반
                  </div>
                )}
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default AdMainTeList;

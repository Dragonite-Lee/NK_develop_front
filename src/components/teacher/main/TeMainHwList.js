import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CircleRight from "../../../assets/student/CaretCircleRight.png";
import { useTeAllHomeworkQuery, useTeHomeworkQuery } from "../teacherQuery";
import useTeacherHomeworkStore from "../../../store/teacherHomework";

const TeMainHwList = ({ classId, className }) => {
  const [paramsPage] = useState(0);

  const { setClassnameIdClient, setClassnameNameClient } =
    useTeacherHomeworkStore();
  
  const { allHomeworkData } = useTeAllHomeworkQuery(classId);
  const { homeworkData } = useTeHomeworkQuery(classId, paramsPage);
 
  useEffect(() => {
    setClassnameIdClient(classId);
    setClassnameNameClient(className);
  }, [classId, className]);

  return (
    <section className="glassWhite py-[24px] desktop:w-[305px] mobile:w-full tablet:px-[26px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[16px] flex items-center font-paybooc_700">
          숙제 목록 ({allHomeworkData?.data.length})
        </div>
        <Link to="/main/homeworkTe">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="w-full mt-[24px]">
        {homeworkData?.data.results.map((item, index) => {
          return (
            index < 4 && (
              <Link
                key={index}
                to={`/main/homeworkTe/homeworkDetail/${item.id}`}
                className="block"
              >
                {index !== 0 && <div className="divider" />}
                <div className="flex items-center justify-start mt-[16px] text-[14px]">
                  <div className="font-nanum_700">{item.title}</div>
                </div>
                <div
                  className={`flex items-center justify-between mt-[9px] tablet:text-[13px] mobile:text-[11px] font-nanum_400 text-grey ${
                    index !== 7 && " mb-[12px]"
                  }`}
                >
                  <div className="font-nanum_400">
                    {item.teacher.nickname} 선생님
                  </div>
                  <div className="font-nanum_400">
                    {item.deadline ? item?.deadline.slice(0, 10) + ' 까지' : ''} 
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

export default TeMainHwList;

import React from "react";
import { Link } from "react-router-dom";

import ArrowRightBlack from "../../../assets/ArrowRightBlack.png"
import ArrowLeftBlack from "../../../assets/ArrowLeftBlack.png"
import CircleRight from "../../../assets/student/CaretCircleRight.png"
import calculateAge from "../../../utils/calculateAge";
import { useAdMainTeacherQuery } from "../query";


const AdMainTeList = () => {
//   let findHomework = Dummy_student.find(function(homework) { 
//     return homework.status == 원하는값
// });

  const { teacherData, isLoading } = useAdMainTeacherQuery();

  return (
    <section className="glassWhite py-[24px] desktop:w-[463px] mobile:w-full tablet:px-[32px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[16px] flex items-center font-paybooc_700">
          선생님 관리 ({teacherData?.length})
          {/* 전체데이터받아와서 바꿀예정 */}
        </div> 
        <Link to="/main/homeworklist">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="w-full mt-[8px]">
        {teacherData?.map((item, index) => (
          <div key={index} className="flex items-center justify-between mt-[16px] text-[14px] font-nanum_400">
            <div>{item.username}</div>
            
              {item.classroom.length === 1 
                ? (<div className="text-gray">{item.classroom[0].classroom}</div>)
                : (<div className="text-gray">{item.classroom[0].classroom} 외 {item.classroom.length-1}개 반</div>)
              }
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdMainTeList;
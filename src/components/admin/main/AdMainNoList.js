import React from "react";
import { Link } from "react-router-dom";

import ArrowRightBlack from "../../../assets/ArrowRightBlack.png"
import ArrowLeftBlack from "../../../assets/ArrowLeftBlack.png"
import CircleRight from "../../../assets/student/CaretCircleRight.png"
import { useAdMainNoticeQuery } from "../query";


const AdMainNoList = () => {
//   let findHomework = Dummy_student.find(function(homework) { 
//     return homework.status == 원하는값
// });

  const { noticeData, isLoading } = useAdMainNoticeQuery() 

  return (
    <section className="glassWhite py-[24px] desktop:w-[305px] mobile:w-full tablet:px-[26px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[16px] flex items-center font-paybooc_700">
          공지사항 ({noticeData?.length}) 
          {/* 전체데이터받아와서 바꿀예정 */}
        </div> 
        <Link to="/main/homeworklist">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="w-full mt-[8px]">
        {noticeData?.map((item, index) => (
          <Link key={index} to={`/main/homeworklist/:${item.id}`} className="block">
            {index != 0 && (<div className="divider" />)}
            <div className="flex items-center justify-start mt-[16px] text-[14px]">
              <div className="font-nanum_700">{item.title}</div>
            </div>
            <div className={`flex items-center justify-between mt-[9px] text-[13px] font-nanum_400 text-gray ${index != 4 && " mb-[12px]"}`}>
              <div className="font-nanum_400">날짜</div>
              <div className="font-nanum_700">공지대상</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default AdMainNoList;
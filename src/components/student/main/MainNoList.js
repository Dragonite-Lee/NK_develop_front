import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import CircleRight from "../../../assets/student/CaretCircleRight.png";
import useStudentNoticeStore from "../../../store/studentNotice";
import { useTeAllClassNoticeQuery } from "../../teacher/teacherQuery";

const StMainNoList = ({ classId, className }) => {
  const { allClassNoticeData, isLoading } = useTeAllClassNoticeQuery(classId);
  const allClassNoticeStudent = allClassNoticeData?.data.filter((data) =>
    data.classNoticeType.includes("STUDENT")
  );
  const { setClassnameIdClient, setClassnameNameClient } =
    useStudentNoticeStore();

  useEffect(() => {
    setClassnameIdClient(classId);
    setClassnameNameClient(className);
  }, [classId, className]);
  
  if (isLoading)
    return <div className="font-nanum_700 text-[14px]">로딩 중...</div>;
  return (
    <section className="glassWhite py-[24px] desktop:w-[305px] mobile:w-full tablet:px-[26px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[16px] flex items-center font-paybooc_700">
          우리반 공지 ({allClassNoticeStudent?.length})
        </div>
        <Link to="/main/noticeSt">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="w-full mt-[24px]">
        {allClassNoticeStudent?.map((item, index) => {
          return (
            index < 4 && (
              <Link
                key={index}
                to={`/main/noticeSt/noticeDetail/${item.id}`}
                className="block"
              >
                {index !== 0 && <div className="divider" />}
                <div className="flex items-center justify-between mt-[16px] text-[14px]">
                  <div className="font-nanum_700">{item.title}</div>
                  <div className="font-nanum_400 text-grey">
                    {item.created.slice(0, 10)}
                  </div>
                </div>
                <div
                  className={`flex items-center justify-between mt-[9px] tablet:text-[13px] mobile:text-[11px] font-nanum_400 text-grey ${
                    index !== 7 && " mb-[12px]"
                  }`}
                 />
              </Link>
            )
          );
        })}
      </div>
    </section>
  );
};

export default StMainNoList;

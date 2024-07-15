import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import CircleRight from "../../../assets/student/CaretCircleRight.png";
import { useTeAllClassNoticeQuery } from "../teacherQuery";
import useTeacherNoticeStore from "../../../store/teacherNotice";

const TeMainNoList = ({ classId, className }) => {
  const { allClassNoticeData, isLoading } = useTeAllClassNoticeQuery(classId);

  const { setClassnameIdClient, setClassnameNameClient } =
    useTeacherNoticeStore();

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
          공지사항 ({allClassNoticeData?.data.length})
        </div>
        <Link to="/main/noticeTe">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="w-full mt-[24px]">
        {allClassNoticeData?.data.map((item, index) => {
          return (
            index < 4 && (
              <Link
                key={index}
                to={`/main/noticeTe/teacherDetail/${item.id}`}
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
                    {item.created.slice(0, 10)}
                  </div>
                  <div className="font-nanum_700 flex items-center justify-end gap-[6px]">
                    {item.classNoticeType.map((type, i) => (
                      <div key={i}>
                        {type === "STUDENT" ? (
                          <div className="text-main1">#학생</div>
                        ) : type === "PARENT" ? (
                          <div className="text-main2">#학부모</div>
                        ) : (
                          <div className="text-main3">#선생님</div>
                        )}
                      </div>
                    ))}
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

export default TeMainNoList;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTeHomeworkAllStudentQuery, useTeHomeworkQuery } from "../teacherQuery";

import ArrowLeftBlack from "../../../assets/ArrowLeftBlack.png";
import ArrowRightBlack from "../../../assets/ArrowRightBlack.png";
import Megaphone from "../../../assets/MegaphoneSimple.png";


const TeHwTable = ({ classId, filter }) => {
  const [paramsPage, setParamsPage] = useState(0);
  const [keywordValue, setKeywordValue] = useState('');
  
  const { homeworkData } = useTeHomeworkQuery(
    classId,
    paramsPage,
    ...filter
  );
  console.log(homeworkData)
  const [current, setCurrent] = useState(homeworkData?.data.currentPage);
  // const { homeworkAllStudentData } = useTeHomeworkAllStudentQuery(classId, )
  // useEffect(() => {
  //   if (filter) {
  //     setParamsPage(0);
  //   } 
  // }, [filter]);
  
  // useEffect(() => {
  //   setCurrent(homeworkData?.data.currentPage);
  // }, [homeworkData?.data, filter]);

  const NextPage = () => {
    setCurrent(current + 1);
    setParamsPage((page) => page + 1);
  };

  const PrevPage = () => {
    setCurrent(current - 1);
    setParamsPage((page) => page - 1);
  };

  return (
    <div className="w-full pt-[20px] pb-[46px]">
      {homeworkData?.data.results.map((item, index) => (
        // <Link
        //   key={index}
        //   className="block pt-[16px] px-[16px]"
        //   to={`/main/noticeTe/teacherDetail/${item.id}`}
        // >
        //   <div className="flex items-center justify-between mb-[16px]">
        //     <div className="font-nanum_700 text-[14px]">{item.title}</div>
        //     <div className="flex flex-col items-end justify-center gap-[6px]">
        //       <div className="font-nanum_700 text-[13px] flex items-center justify-end gap-[6px]">
        //         {item.classNoticeType.map((type, i) => (
        //           <div key={i}>
        //             {type == "STUDENT" ? (
        //               <div className="text-main1">학생</div>
        //             ) : type == "PARENT" ? (
        //               <div className="text-main2">학부모</div>
        //             ) : (
        //               <div className="text-main3">선생님</div>
        //             )}
        //           </div>
        //         ))}
        //       </div>
        //       <div className="font-nanum_400 text-[13px] text-grey">
        //         {item.created.slice(0, 10)}
        //       </div>
        //     </div>
        //   </div>
        //   <div className="divider" />
        // </Link>
        <div>d</div>
      ))}
      {/* 페이지네이션 */}
      <div className="flex justify-center items-center w-full tablet:gap-[60px] mobile:gap-[30px] text-[12px] mt-[12px]">
        <button
          onClick={PrevPage}
          disabled={current === 1}
          className={current === 1 ? "invisible" : ""}
        >
          <div className="flex justify-center items-center gap-[3px]">
            <img
              src={ArrowLeftBlack}
              alt="ArrowleftBlack"
              className="w-[20px] h-[20px]"
            />
            <div className="text-grayDark font-nanum_400">이전</div>
          </div>
        </button>

        <div className="items-center text-grayDark font-nanum_400">
          {current} / {homeworkData?.data.totalPage}
        </div>

        <button
          onClick={NextPage}
          disabled={current === homeworkData?.data.totalPage}
          className={
            current === homeworkData?.data.totalPage ? "invisible" : ""
          }
        >
          <div className="flex justify-center items-center gap-[3px]">
            <div className="text-grayDark font-nanum_400">다음</div>
            <img
              src={ArrowRightBlack}
              alt="ArrowRightBlack"
              className="w-[20px] h-[20px]"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default TeHwTable;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useStHomeworkQuery } from "../studentQuery";
import ArrowLeftBlack from "../../../assets/ArrowLeftBlack.png";
import ArrowRightBlack from "../../../assets/ArrowRightBlack.png";

const StClHomeworkTable = ({ classId, filter }) => {
  const [paramsPage, setParamsPage] = useState(0);
  
  const { homeworkData } = useStHomeworkQuery(classId, paramsPage, ...filter);

  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    if (filter) {
      setParamsPage(0);
    }
  }, [filter]);
  
  useEffect(() => {
    setCurrent(homeworkData?.data.currentPage);
    setTotal(homeworkData?.data.totalPage);
    if (homeworkData?.data.totalPage === 0) {
      setTotal(1)
    }
  }, [homeworkData?.data.results]);

  const NextPage = () => {
    setCurrent(current + 1);
    setParamsPage((page) => page + 1);
  };

  const PrevPage = () => {
    setCurrent(current - 1);
    setParamsPage((page) => page - 1);
  };

  if (homeworkData?.data.results.length === 0)
    return (
      <div className="font-nanum_700 text-[14px]">
        등록된 데이터가 존재하지 않습니다.
      </div>
    );

  return (
    <div className="w-full pt-[20px] pb-[46px]">
      {homeworkData?.data.results.map((item, index) => {
          return (
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
                  {item.deadline ? item?.deadline.slice(0, 10) + ' 까지' : ''} 
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
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
          {current} / {total}
        </div>
        <button
          onClick={NextPage}
          disabled={current === total}
          className={
            current === total ? "invisible" : ""
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

export default StClHomeworkTable;

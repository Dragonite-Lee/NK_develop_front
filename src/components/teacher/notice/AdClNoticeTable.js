import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTeAdminNoticeQuery } from "../teacherQuery";
import ArrowLeftBlack from "../../../assets/ArrowLeftBlack.png";
import ArrowRightBlack from "../../../assets/ArrowRightBlack.png";
import Megaphone from "../../../assets/MegaphoneSimple.png";

const AdClNoticeTable = ({ classId, adminNotice, keyword, type }) => {
  const [paramsPage, setParamsPage] = useState(0);
  const [keywordValue, setKeywordValue] = useState("");

  const { classNoticeData, isError } = useTeAdminNoticeQuery(
    classId,
    paramsPage,
    keywordValue,
    ...type
  );
  
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(1);
  
  useEffect(() => {
    if (keyword || type) {
      setParamsPage(0);
    } else {
      setKeywordValue("");
    }
  }, [type, keyword]);

  useEffect(() => {
    setKeywordValue(keyword);
    setCurrent(classNoticeData?.data.currentPage);
    setTotal(classNoticeData?.data.totalPage);
    if (classNoticeData?.data.totalPage === 0) {
      setTotal(1);
    }
  }, [classNoticeData?.data, keyword, isError]);

  const NextPage = () => {
    setCurrent(current + 1);
    setParamsPage((page) => page + 1);
  };

  const PrevPage = () => {
    setCurrent(current - 1);
    setParamsPage((page) => page - 1);
  };

  if (classNoticeData?.data.results.length === 0 && adminNotice?.length === 0)
    return (
      <div className="font-nanum_700 text-[14px]">
        등록된 데이터가 존재하지 않습니다.
      </div>
    );
  
  if (!classNoticeData && adminNotice)
    return (
      <div className="w-full pt-[20px] pb-[46px]">
        {paramsPage === 0 &&
          adminNotice?.map((item, index) => (
            <Link
              key={index}
              className="block pt-[16px] px-[16px] bg-white1"
              to={`/main/noticeTe/adminDetail/${item.id}`}
            >
              <div className="flex items-center justify-between mb-[16px]">
                <div className="flex items-center justify-start gap-[16px]">
                  <img
                    src={Megaphone}
                    alt="공지아이콘"
                    className="w-[20px] h-[20px]"
                  />
                  <div className="font-nanum_700 text-[14px]">{item.title}</div>
                </div>
                <div className="flex flex-col items-end justify-center gap-[6px]">
                  <div className="font-nanum_700 text-[13px] flex items-center justify-end gap-[6px]">
                    {item.adminNoticeType.map((type, i) => (
                      <div key={i}>
                        {type === "STUDENT" ? (
                          <div className="text-main1">학생</div>
                        ) : type === "PARENT" ? (
                          <div className="text-main2">학부모</div>
                        ) : (
                          <div className="text-main3">선생님</div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="font-nanum_400 text-[13px] text-grey">
                    {item.created.slice(0, 10)}
                  </div>
                </div>
              </div>
              <div className="divider" />
            </Link>
            ))}
        </div>
    );

  return (
    <div className="w-full pt-[20px] pb-[46px]">
      {paramsPage === 0 &&
        adminNotice?.map((item, index) => (
          <Link
            key={index}
            className="block pt-[16px] px-[16px] bg-white1"
            to={`/main/noticeTe/adminDetail/${item.id}`}
          >
            <div className="flex items-center justify-between mb-[16px]">
              <div className="flex items-center justify-start gap-[16px]">
                <img
                  src={Megaphone}
                  alt="공지아이콘"
                  className="w-[20px] h-[20px]"
                />
                <div className="font-nanum_700 text-[14px]">{item.title}</div>
              </div>
              <div className="flex flex-col items-end justify-center gap-[6px]">
                <div className="font-nanum_700 text-[13px] flex items-center justify-end gap-[6px]">
                  {item.adminNoticeType.map((type, i) => (
                    <div key={i}>
                      {type === "STUDENT" ? (
                        <div className="text-main1">학생</div>
                      ) : type === "PARENT" ? (
                        <div className="text-main2">학부모</div>
                      ) : (
                        <div className="text-main3">선생님</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="font-nanum_400 text-[13px] text-grey">
                  {item.created.slice(0, 10)}
                </div>
              </div>
            </div>
            <div className="divider" />
          </Link>
        ))}
      {classNoticeData?.data.results.map((item, index) => (
        <Link
          key={index}
          className="block pt-[16px] px-[16px]"
          to={`/main/noticeTe/teacherDetail/${item.id}`}
        >
          <div className="flex items-center justify-between mb-[16px]">
            <div className="font-nanum_700 text-[14px]">{item.title}</div>
            <div className="flex flex-col items-end justify-center gap-[6px]">
              <div className="font-nanum_700 text-[13px] flex items-center justify-end gap-[6px]">
                {item.classNoticeType.map((type, i) => (
                  <div key={i}>
                    {type === "STUDENT" ? (
                      <div className="text-main1">학생</div>
                    ) : type === "PARENT" ? (
                      <div className="text-main2">학부모</div>
                    ) : (
                      <div className="text-main3">선생님</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="font-nanum_400 text-[13px] text-grey">
                {item.created.slice(0, 10)}
              </div>
            </div>
          </div>
          <div className="divider" />
        </Link>
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
          {current} / {total}
        </div>

        <button
          onClick={NextPage}
          disabled={current === total}
          className={current === total ? "invisible" : ""}
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

export default AdClNoticeTable;

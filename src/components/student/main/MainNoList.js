import React from "react";
import { Link } from "react-router-dom";

import ArrowRightBlack from "../../../assets/ArrowRightBlack.png"
import ArrowLeftBlack from "../../../assets/ArrowLeftBlack.png"
import CircleRight from "../../../assets/student/CaretCircleRight.png"

import {getNoticeImportant, getNoticeNormal} from "../../student/temporary/NoticeData"
const NoticeImportant = getNoticeImportant();
const NoticeNormal = getNoticeNormal().slice(0,3);

const MainNoList = () => {
  return (
    <section className="glassWhite py-[24px] desktop:w-[486px] mobile:w-full tablet:px-[32px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[15px] flex items-center font-paybooc_700">
          우리반 공지 ({NoticeNormal.length})
        </div>
        <Link to="/main/noticelist">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="w-full mt-[24px]">
        {NoticeNormal.map((item, index) => (
          <Link key={index} className="block" to={`/main/noticelist/:${item.id}`}>
            {index != 0 && (<div className="divider" />)}
            <div className="flex items-center justify-start mt-[16px] text-[12px]">
              <div className="font-nanum_700">{item.work}</div>
            </div>
            <div className={`flex items-center justify-between mt-[9px] text-[11px] font-nanum_400 text-grey ${index != 2 && " mb-[16px]"}`}>
              <div>{item.name}</div>
              <div>{item.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default MainNoList;
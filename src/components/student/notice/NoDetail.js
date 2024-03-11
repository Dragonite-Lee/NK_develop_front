import React from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../../../assets/student/ArrowLeft.png"
import Speaker from "../../../assets/student/Speaker.png"

import Button from "../Button";
import {getNoticeImportant, getNoticeNormal} from "../temporary/NoticeData"
const NoticeImportant = getNoticeImportant();
const NoticeNormal = getNoticeNormal();

const NoDetail = ({ID}) => {

  const paredID = parseInt(ID);

	const notices = NoticeNormal.concat(NoticeImportant)
	const notice = notices.find((item) => item.id === ID);

  return (
    <section>
			<Link to="/main/noticelist" className ="w-full font-paybooc_700 " >
				<div className="text-[15px] flex items-center gap-[14.25px]">
					<img src={ArrowLeft} alt="ArrowLeftBlack" className="w-[10px] h-[16px]" />
					우리 반 공지로 돌아가기
				</div>
			</Link>	
      <div className="px-[40px] py-[32px] mt-[24px] mobile:p-[24px] desktop:w-[994px] h-fit w-full glassWhite">
        <div className="w-full items-center"> 
          <div className="flex items-start justify-between">
            <div className="text-[16px] font-nanum_700">{notice.work}</div>
            <div className="text-[13px] font-nanum_700">조회수 8</div>
          </div>
          <div className="flex items-start gap-[12px] mt-[7px] mb-[15px] text-[12px]">
            <div className="text-gray text-[13px] font-nanum_700">{notice.date}</div>
            <div className="text-gray text-[13px] font-nanum_400">{notice.name}</div>
          </div>
        </div>
				<div className="w-full items-start"> 
          <div className="text-[14px] font-nanum_400">{notice.content}</div>
				</div>
      </div>
			<div className="flex justify-end mt-[20px] gap-[15px] text-[13px] font-nanum_700 ml-auto">
        <Button backgroundColor='#D1D1D6' Color="white" content={"이전 공지 보기"} link={`/main/noticelist/:${ID-1}`}/>
        <Button backgroundColor="gray" Color="white" content={"목록으로 돌아가기"} link={'/main/noticelist/'} />
        <Button backgroundColor="#D1D1D6" Color="white" content={"다음 공지 보기"} link={`/main/noticelist/:${ID+1}`}/>
      </div>
    </section>
  );
}

export default NoDetail;
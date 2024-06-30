import React from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../../assets/student/ArrowLeft.png"

import Button from "../student/Button";
import {getHomeworkList} from "../student/temporary/HomeworkData"
const HomeworkList = getHomeworkList();

const HwDetail = ({ID}) => {

	const homework = HomeworkList.find((item) => item.id === ID);

  return (
    <section>
			<Link to="/student/homeworklist" className ="w-full font-paybooc_700 " >
				<div className="text-[15px] flex items-center gap-[14.25px]">
					<img src={ArrowLeft} alt="ArrowLeftBlack" className="w-[10px] h-[16px]" />
					숙제 목록으로 돌아가기
				</div>
			</Link>	
      <div className="px-[40px] py-[32px] mt-[24px] mobile:p-[24px] desktop:w-[994px] h-fit w-full glassWhite">
        <div className="w-full flex-col"> 
          <div className="flex items-center justify-between">
            <div className="text-[16px] font-nanum_700">{homework.work}</div>
            <div className="text-[13px] font-nanum_700">~~미완료~~</div>
          </div>
          <div className="justify-end gap-[10px] mt-[16px] mb-[15px] text-[12px] ">
            <div className="text-grayDark text-[13px] font-nanum_700">담당 선생님   {homework.name} 선생님</div>
            <div className="text-grayDark text-[13px] font-nanum_700">숙제 마감일   {homework.date} 까지</div>
          </div>
        </div>
				<div className="divider" />
				<div className="w-full items-start mt-[28px]"> 
          <div className="text-[14px] font-nanum_400">{homework.content}</div>
				</div>
				<div className="divider" />
        <div className="flex-co items-center mt-[28px]" >
          <div className="text-[16px] font-nanum_700">제출하기</div>
          <div className="text-[14px] font-nanum_400">
            숙제 스톱워치를 기록한 후에 이미지를 업로드하세요.<br />
            이미지는 총 3장까지 업로드 가능합니다. 정확한 숙제 사진을 제출하세요.
          </div>
          <div className="mt-[20px] text-[13px] font-nanum_700">
            <Button backgroundColor="#D1D1D6" Color="white" content={"이미지 업로드하기"}/>
          </div>
        </div>
      </div>
		</section>
  );
}

export default HwDetail;
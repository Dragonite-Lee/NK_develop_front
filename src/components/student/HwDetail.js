import React from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../../assets/student/ArrowLeft.png"

import Button from "../student/Button";
import {getHomeworkList} from "../student/temporary/HomeworkData"
const HomeworkList = getHomeworkList();

const HwDetail = ({ID}) => {

  const paredID = parseInt(ID);

	const homework = HomeworkList.find((item) => item.id === ID);

  return (
    <section>
			<Link to="/main/homeworklist" className ="w-full font-paybooc_700 " >
				<div className="text-[15px] flex items-center gap-[14.25px]">
					<img src={ArrowLeft} alt="ArrowLeftBlack" className="w-[10px] h-[16px]" />
					숙제 목록으로 돌아가기
				</div>
			</Link>	
      <div className="px-[40px] py-[32px] mt-[24px] mobile:p-[24px] desktop:w-[994px] h-fit w-full glassWhite">
        <div className="w-full items-center"> 
          <div className="flex items-start justify-between">
            <div className="text-[16px] font-nanum_700">{homework.work}</div>
            <div className="text-[13px] font-nanum_700">~~미완료~~</div>
          </div>
          <div className="flex-col items-start gap-[10px] mt-[16px] mb-[15px] text-[12px] ml-auto">
            <div className="text-grayDark text-[13px] font-nanum_700">담당 선생님   {homework.name} 선생님</div>
            <div className="text-grayDark text-[13px] font-nanum_700">숙제 마감일   {homework.date} 까지</div>
          </div>
        </div>
				<div className="divider" />
				<div className="w-full items-start mt-[28px]"> 
          <div className="text-[14px] font-nanum_400">{homework.content}</div>
				</div>
				<div className="divider" />
      </div>
		</section>
  );
}

export default HwDetail;
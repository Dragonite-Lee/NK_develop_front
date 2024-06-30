import React, {useState } from "react";
import { Link } from "react-router-dom";


import SelectStudent from "../SelectStudent"
import Chart from "./Chart"
import Button1 from "./Button1"
import Button2 from "./Button2"
import {getweekData} from "../temporary/weekData"

const weekData = getweekData();

const Behaving = () => {

	const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  return (
    <section>
			<div className="mt-[28px] mb-[28px] tablet:w-[344px] h-[56px] w-full marker:flex items-center justify-between">
        <div className="text-[16px] flex w-full items-center font-paybooc_500">
          <SelectStudent onSelectStudent = {handleSelectStudent} />
        </div>
      </div>
			<div className="items-start mb-[44px]">
				<div className="text-[18px] font-pabooc_700 mb-[17px]">학습 태도 분석</div>
				<div className="text-[14px] font-nanum_700"> {selectedStudent ? `${selectedStudent.label} 학생의 주간 출석률 및 숙제 완료 현황입니다.`:''} </div>
      </div>
      <div className="mt-[20px] w-[1000px] h-full">
        <div className = "gap-[44px] flex items-center justify-center" >
          {weekData.map((item, index) => (
            <div className="font-nanum_700"> 
              <div className="h-[160px] w-[160px]">
                <Chart complete={item.complete} amount={item.amount} />
              </div>
              <div className="flex items-center justify-center pb-[23px]" >
                <Button1 backgroundColor="#789AF4" Color="white" content={item.label} size='16px'/>
              </div>
              <div className="flex items-center justify-center gap-[7px]" >
                <Button2 backgroundColor="#F9F9FC" Color="#969699" content={{ status: "완료", complete: item.complete }}/>
                <Button2 backgroundColor="#F9F9FC" Color="#969699" content={{ status: "미완료", complete: item.amount-item.complete }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Behaving;
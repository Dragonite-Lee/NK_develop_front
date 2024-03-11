import React, {useState } from "react";
import { Link } from "react-router-dom";


import SelectStudent from "../SelectStudent"
import Chart from "./Chart"


const Behaving = () => {

  const weekdata = [
    {
      complete : 4,
      amount : 5,
      label:"월"
    },
    {
      complete : 3,
      amount : 5,
      label:"화"
    },
    {
      complete : 2,
      amount : 5,
      label:"수"
    },
    {
      complete : 5,
      amount : 5,
      label:"목"
    },
    {
      complete : 0,
      amount : 5,
      label:"금"
    },
  ]

  const monthdata = [
    {
      complete : 4,
      amount : 5,
      label:"1월"
    },
    {
      complete : 5,
      amount : 5,
      label:"2월"
    },
    {
      complete : 3,
      amount : 5,
      label:"3월"
    },
    {
      complete : 2,
      amount : 5,
      label:"4월"
    },
    {
      complete : 0,
      amount : 5,
      label:"5월"
    },
    {
      complete : 4,
      amount : 5,
      label:"6월"
    },
    {
      complete : 4,
      amount : 5,
      label:"7월"
    },
    {
      complete : 5,
      amount : 5,
      label:"8월"
    },
    {
      complete : 5,
      amount : 5,
      label:"9월"
    },
    {
      complete : 3,
      amount : 5,
      label:"10월"
    },
    {
      complete : 0,
      amount : 5,
      label:"11월"
    },
    {
      complete : 2,
      amount : 5,
      label:"12월"
    },

  ]

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
        <div className="justify-end">
          
        </div>
        <div className="mt-[86px] flex gap-[44px] h-[160px] w-[160px]">
          {weekdata.map((item, index) => (
            <Chart complete={item.complete} amount={item.amount} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Behaving;
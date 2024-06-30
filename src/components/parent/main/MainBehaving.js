import React from "react";
import { Link } from "react-router-dom";

import CircleRight from "../../../assets/student/CaretCircleRight.png"
import Chart from "../behaving/Chart";
import Button1 from "../behaving/Button1"
import Button2 from "../behaving/Button2"

import {getweekData} from "../temporary/weekData"
const weekData = getweekData();

const MainBehaving = () => {
  return (
    <section className="glassWhite mt-[24px] py-[24px] desktop:w-[667px] tablet:w-[667px] mobile:w-full tablet:px-[32px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[15px] items-center justify-end font-paybooc_700">
					출석률/숙제현황 토글버튼~~
        </div>
        <Link to="/parent/behaving">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="mt-[11px] flex items-center justify-start ">
        주간/월간 토글버튼~~
      </div>
      <div className="mt-[20px] w-[616px] h-full">
        <div className = "gap-[29px] flex items-center justify-center" >
          {weekData.map((item, index) => (
            <div className="font-nanum_700 justify-center items-center h-[156pxpx] w-[100px]"> 
              <div >
                <Chart complete={item.complete} amount={item.amount} />
              </div>
              <div className="flex items-center justify-center pb-[11px]" >
                <Button1 backgroundColor="#789AF4" Color="white" content={item.label} size='16px'/>
              </div>
              <div className="flex flex-col items-center justify-center pb-[4px]" >
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

export default MainBehaving;
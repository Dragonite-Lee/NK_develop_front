import React from "react";
import { Link } from "react-router-dom";

import CircleRight from "../../../assets/student/CaretCircleRight.png"

const MainChat = () => {
  return (
    <section className="glassWhite mt-[24px] py-[14px] desktop:w-[305px] tablet:w-[305px] mobile:w-full tablet:px-[32px] mobile:px-[26px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-[15px] flex items-center font-paybooc_700">
          최근 채팅
        </div>
        <Link to="#">
          <img src={CircleRight} alt="화살표" className="w-[28px] h-[28px] " />
        </Link>
      </div>
      <div className="w-full mt-[24px]">
        대충 채팅~~
      </div>
    </section>
  );
}

export default MainChat;
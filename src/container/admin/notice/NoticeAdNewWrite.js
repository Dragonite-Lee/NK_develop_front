import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import useInput from "../../../hooks/useInput";

import ArrowLeft from "../../../assets/student/ArrowLeft.png";

const NoticeAdNewWrite = () => {
  const [title, titleHandler] = useInput();
  let today = new Date();
  const createDate = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
  console.log(createDate)
  return ( 
    <>
      <div className="min-w-[280px]">
        <Header/>
          <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight'>
            <Link to="/main/noticeAd">
              <div className="text-[15px] font-paybooc_700 flex items-center gap-[6px] mb-[27px]">
                <img src={ArrowLeft} alt="ArrowLeftBlack" className="w-[24px] h-[24px]" />
                <div>전체 공지로 돌아가기</div>
              </div>
            </Link>
            <div className="glassWhite desktop:w-[999px] tablet:py-[28px] mobile:p-[20px] tablet:px-[40px] mobile:px-[24px]">
            <div className="flex tablet:items-center justify-between  tablet:gap-[60px] mobile:gap-[12px] text-[15px] font-nanum_700">
              <div className="w-[54px]">공지명 <span className="text-error">*</span></div>
              <input type="text" placeholder="공지명을 입력하세요." value={title} onChange={titleHandler} className="font-nanum_400 desktop:w-[800px] box-border mobile:w-full h-[38px] border-border rounded-[10px] placeholder-grey"/>
            </div>
            <div className="flex items-center justify-start gap-[60px] text-[15px] font-nanum_700 mt-[16px]">
              <div>등록일 <span className="text-error">*</span></div>
              <div className="font-nanum_400 text-grayDark">{createDate}</div>
            </div>
            </div>
          </main>
        <Footer />
      </div>
    </>
  );
}
 
export default NoticeAdNewWrite;
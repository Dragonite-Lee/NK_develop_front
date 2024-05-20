import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import ArrowLeft from "../../../assets/student/ArrowLeft.png";

const NoticeAdWrite = () => {

  let { id } = useParams();
  
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
            <div className="glassWhite desktop:w-[999px] ">
              {id == 'new' ? (
              <div>새로 등록</div>
              ) : (
              <div>id있음 기본데이터 받아옴</div>
              )}
            </div>
          </main>
        <Footer />
      </div>
    </>
  );
}
 
export default NoticeAdWrite;
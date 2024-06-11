import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getCookie } from "../../../utils/cookie";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import NoList from "../../../components/student/notice/NoList";
import NoList_copy from "../../../components/student/notice/NoList_copy";



const NoticeList = () => {
  // const navigator = useNavigate();
  // const refreshToken = getCookie("refreshToken");
  
  // useEffect(() => {
  //   if (!refreshToken) {
  //     navigator("/");
  //   };
  // }, [refreshToken])

  return ( 
    <div className="min-w-[280px]">
      <Header/>
      <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] mobile:pt-[28px] desktop:pb-[96px] tablet:pb-[126px] mobile:pb-[73px] mainHeight'>
        <NoList_copy />
      </main>
      <Footer />
    </div>
   );
}
 
export default NoticeList;
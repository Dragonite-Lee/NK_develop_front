import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getCookie } from "../../../utils/cookie";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import HwList from "../../../components/student/HwList";
import HwListCopy from "../../../components/student/HwList_copy"



const HomeworkList = () => {
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
      <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] desktop:pt-[28px] mobile:pt-[32px] desktop:pb-[71px] mobile:pb-[74px] mainHeight'>
        <HwListCopy />
      </main>
      <Footer />
    </div>
   );
}
 
export default HomeworkList;
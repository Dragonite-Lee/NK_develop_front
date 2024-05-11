import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getCookie } from "../../utils/cookie";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SelectStudent from "../../components/parent/SelectStudent"




const Main = () => {
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
      <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] desktop:pb-[156px] tablet_change:pb-[48px] mobile:pb-[68px] mainHeight'>

        <div className='desktop:flex tablet:flex-row mobile:flex-col desktop:items-center desktop:gap-[24px]'>

          <div className="flex flex-col gap-[24px]">

          </div>
        </div>
      </main>
      <Footer />
    </div>
   );
}
 
export default Main;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getCookie } from "../../utils/cookie";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SelectClass from "../../components/student/SelectClass"


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
        <div className="px-[22px] py-[18px] tablet:w-[344px] h-[56px] w-full glassWhite flex items-center justify-between">
          <div className="text-[16px] flex w-full items-center font-paybooc_500">
            <SelectClass />
          </div>
        </div>
      </main>
      <Footer />
    </div>
   );
}
 
export default Main;
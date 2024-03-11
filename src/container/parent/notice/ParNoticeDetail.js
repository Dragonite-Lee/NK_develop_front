import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getCookie } from "../../../utils/cookie";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import NoDetail from "../../../components/parent/notice/NoDetail";

const NoticeDetail = () => {
  // const navigator = useNavigate();
  // const refreshToken = getCookie("refreshToken");
  
  // useEffect(() => {
  //   if (!refreshToken) {
  //     navigator("/");
  //   };
  // }, [refreshToken])

  let { id } = useParams();
  const parsedId = parseInt(id.slice(1));

  return ( 
    <div className="min-w-[280px]">
      <Header/>
      <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] desktop:pt-[28px] mobile:pt-[32px] desktop:pb-[71px] mobile:pb-[74px] mainHeight'>
        <NoDetail ID={parsedId} />
      </main>
      <Footer />
    </div>
   );
}
 
export default NoticeDetail;
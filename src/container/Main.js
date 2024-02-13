import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getCookie } from "../utils/cookie";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Main = () => {
  const navigator = useNavigate();
  const refreshToken = getCookie("refreshToken");
  
  useEffect(() => {
    if (!refreshToken) {
      navigator("/");
    };
  }, [refreshToken])

  return ( 
    <>
      <Header/>
      <div className="mainHeight">
      메인화면
      </div>
      <Footer />
    </>
   );
}
 
export default Main;
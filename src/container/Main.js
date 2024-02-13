import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getCookie } from "../utils/cookie";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homeworklist from "../components/student/HomeworkList"


const Main = () => {
  // const navigator = useNavigate();
  // const refreshToken = getCookie("refreshToken");
  
  // useEffect(() => {
  //   if (!refreshToken) {
  //     navigator("/");
  //   };
  // }, [refreshToken])

  return ( 
    <>
      <Header/>
      <div>
      <Homeworklist />
      </div>
      <Footer />
    </>
   );
}
 
export default Main;
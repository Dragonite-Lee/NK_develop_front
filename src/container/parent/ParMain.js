import { useState, React } from "react";
import { useNavigate } from "react-router-dom";

import { getCookie } from "../../utils/cookie";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SelectStudent from "../../components/parent/SelectStudent"
import MainBehaving from "../../components/parent/main/MainBehaving"
import MainNoList from "../../components/parent/main/MainNolist";
import MainChat from "../../components/parent/main/MainChat";



const Main = () => {
  // const navigator = useNavigate();
  // const refreshToken = getCookie("refreshToken");
  
  // useEffect(() => {
  //   if (!refreshToken) {
  //     navigator("/");
  //   };
  // }, [refreshToken])

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  return ( 
    <div className="min-w-[280px]">
      <Header/>
      <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] desktop:pb-[156px] tablet_change:pb-[48px] mobile:pb-[68px] mainHeight'>
          <SelectStudent onSelectStudent = {handleSelectStudent} />
        <div className=" flex gap-[50px]">
          <div className='desktop:flex-col tablet:flex-col mobile:flex-col desktop:items-center desktop:gap-[24px]'>
            <div className="pb-[24px]">
              <MainBehaving />
            </div>
            <MainNoList />
          </div>
          <div className="flex ">
            <MainChat />
          </div>
        </div>
      
      </main>
      <Footer />
    </div>
   );
}
 
export default Main;
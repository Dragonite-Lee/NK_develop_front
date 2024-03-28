import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useAdParentQuery } from "../../components/admin/query";
import Table from "../../components/admin/table";

const header = [
  {
    text: "이름",
    value: "username"
  },
  {
    text: "연락처",
    value: "phoneNumber"
  },
  {
    text: "자녀 정보",
    value: "studentInfo"
  },
  {
    text: "자녀와의 관계",
    value: "studentRela"
  },
  {
    text: "학부모 아이디",
    value: "parentId"
  },
  {
    text: "비밀번호",
    value: "parentPw"
  },
]

const ParentAd = () => {
  // const navigator = useNavigate();

  // useEffect(() => { 
  //   if (!refreshToken) {
  //     navigator("/");
  //   };
  // }, [refreshToken])

  const { parentData, isLoading } = useAdParentQuery()
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    console.log(selection);
  }, [selection]);
  

  return ( 
    <div className="min-w-[280px]">
      <Header/>
        <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] desktop:pb-[156px] tablet_change:pb-[48px] mobile:pb-[68px] mainHeight'>
          <div className="font-paybooc_700 text-[18px] text-black">학부모 명단 관리</div>
          <Table header={header} data={parentData} updateSelection={setSelection}/>
        </main>
      <Footer />
    </div>
   );
}
 
export default ParentAd;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import Table from "../../components/admin/Table";
import YellowModal from "../../components/admin/YellowModal";

import { useAdClassroomQuery } from "../../components/admin/query";
import { deleteAdClassroom } from "../../services/api/adminApi";
import { getCookie } from "../../utils/cookie";

import glass from "../../assets/admin/MagnifyingGlass.png"
import trash_white from "../../assets/admin/Trash_white.png"
import circle_plus_white from "../../assets/admin/PlusCircle_white.png"


const header = [
  {
    text: "이름",
    value: "classroom",
    width: "w-[24%]"
  },
  {
    text: "티칭 선생님",
    value: "teacherName",
    width: "w-[24%]"
  },
  {
    text: "코칭선생님",
    value: "coachName",
    width: "w-[24%]"
  },
  {
    text: "등록일",
    value: "createDate",
    width: "w-[25%]"
  },
]

const ClassroomAd = () => {
  const navigator = useNavigate();
  const refreshToken = getCookie("refreshToken");
  useEffect(() => { 
    if (!refreshToken) {
      navigator("/");
    };
  }, [refreshToken])

  // const queryClient = useQueryClient()
  // const { classroomData } = useAdClassroomQuery()
  // const { mutate, isLoading, isSuccess, isError } = useMutation(deleteAdClassroom, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('/admin/classroom')
  //   }
  // })


  const [selection, setSelection] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [cancleModal, setCancleModal] = useState(false);

  // useEffect(() => {
  //   //검색된 데이터
  //   const searched = classroomData?.filter((item) => 
  //     item.classroom.includes(searchInput)
  //   )
  //   if (searchInput) {
  //     if (searched) {
  //       setSearchData(searched)
  //     }
  //   } else {
  //     setSearchData(classroomData)
  //   }
  // }, [classroomData, searchInput]);

  // useEffect(() => {
  //   if (isSuccess == true) {
  //     setCancleModal(false)
  //   }
  // },[isSuccess])

  const onChangeInputSearch = (e) => {
    setSearchInput(e.target.value)
  }
  

  return ( 
    <>
      {/* {cancleModal && ( selection?.length != 0 ? (
        <YellowModal setState={setCancleModal} mutate={mutate} selection={selection} title="반 정보 삭제" content1="선택한 " content2={`${selection?.length}개의 반`} content3="을 삭제하시겠습니까?" cancle="취소하기" del="삭제하기" />
      ): (
        <YellowModal setState={setCancleModal} mutate={mutate} selection={selection} title="알림" content1="반을 선택해주세요" content2="" content3="" cancle="닫기" del="" />
      )
      )} */}
      <div className="min-w-[280px]">
        <Header/>
          <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight'>
            <div className="font-paybooc_700 text-[18px] text-black">반 관리</div>
            {/* 필터 및 모달 */}
            <div className="mt-[13px] flex items-center justify-end gap-[16px]">
              <div className="relative">
                <input type="text" placeholder="반 이름을 검색하세요" onChange={onChangeInputSearch} className="w-[300px] h-[36px] text-[14px] font-nanum_400 pl-[15px] rounded-[10px] bg-whiteTotal drop-shadow-sm" />
                <img src={glass} alt="돋보기" className="w-[22px] h-[22px] absolute top-[7px] right-[15px]" />
              </div>
              <div>
                <div onClick={() => setCancleModal(true)} className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-grayDark">
                  <img src={trash_white} alt="삭제아이콘" className="w-[18px] h-[18px]" />
                  <button className="font-nanum_700 text-[14px] text-white">선택 삭제</button>
                </div>
              </div>
            </div>
            {/* <Table cancleText="반" cancleText2="반을" header={header} data={searchData} updateSelection={setSelection} onDelete={mutate} isSuccess={isSuccess} isLoading={isLoading}/> */}
          </main>
        <Footer />
      </div>
    </>
   );
}
 
export default ClassroomAd;
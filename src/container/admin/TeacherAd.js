import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/admin/Table";

import { useAdTeacherQuery } from "../../components/admin/query";
import { deleteAdTeacher } from "../../services/adminApi";
import YellowModal from "../../components/admin/YellowModal";

import glass from "../../assets/admin/MagnifyingGlass.png"
import trash_white from "../../assets/admin/Trash_white.png"
import circle_plus_white from "../../assets/admin/PlusCircle_white.png"

const header = [
  {
    text: "이름",
    value: "nickname",
    width: "w-[10%]"
  },
  {
    text: "생년월일",
    value: "birth",
    width: "w-[13%]"
  },
  {
    text: "연락처",
    value: "phoneNumber",
    width: "w-[19%]"
  },
  {
    text: "근무일자",
    value: "workDay",
    width: "w-[11%]"
  },
  {
    text: "등록일",
    value: "createDate",
    width: "w-[13%]"
  },
  {
    text: "선생님 아이디",
    value: "teacherId",
    width: "w-[16%]"
  },
  {
    text: "비밀번호",
    value: "teacherPw",
    width: "w-[17%]"
  }
]

const TeacherAd = () => {
  // const navigator = useNavigate();

  // useEffect(() => { 
  //   if (!refreshToken) {
  //     navigator("/");
  //   };
  // }, [refreshToken])

  const queryClient = useQueryClient()
  const { teacherData } = useAdTeacherQuery()
  const { mutate, isLoading, isSuccess, isError } = useMutation(deleteAdTeacher, {
    onSuccess: () => {
      queryClient.invalidateQueries('/admin/teacher')
    }
  })


  const [selection, setSelection] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [cancleModal, setCancleModal] = useState(false);

  useEffect(() => {
    //검색된 데이터
    const searched = teacherData?.filter((item) => 
      item.nickname.includes(searchInput)
    )
    if (searchInput) {
      if (searched) {
        setSearchData(searched)
      }
    } else {
      setSearchData(teacherData)
    }
  }, [teacherData, searchInput]);

  useEffect(() => {
    if (isSuccess == true) {
      setCancleModal(false)
    }
  },[isSuccess])

  const onChangeInputSearch = (e) => {
    setSearchInput(e.target.value)
  }
  

  return (
    <>
      {cancleModal && ( selection?.length != 0 ? (
        <YellowModal setState={setCancleModal} mutate={mutate} selection={selection} title="선생님 정보 삭제" content1="선택한 " content2={`${selection?.length}명의 선생님`} content3="을 삭제하시겠습니까?" cancle="취소하기" del="삭제하기" />
      ): (
        <YellowModal setState={setCancleModal} mutate={mutate} selection={selection} title="알림" content1="선생님을 선택해주세요" content2="" content3="" cancle="닫기" del="" />
      )
      )}
      <div className="min-w-[280px]">
        <Header/>
          <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] tablet_change:pb-[90px] mobile:pb-[68px] mainHeight'>
            <div className="font-paybooc_700 text-[18px] text-black">전체 선생님 명단 관리</div>
            {/* 필터 및 모달 */}
            <div className="mt-[13px] flex items-center justify-end gap-[16px]">
              <div className="relative z-[1]">
                <input type="text" placeholder="선생님을 검색하세요" onChange={onChangeInputSearch} className="w-[300px] h-[36px] text-[14px] font-nanum_400 pl-[15px] rounded-[10px] bg-whiteTotal drop-shadow-sm" />
                <img src={glass} alt="돋보기" className="w-[22px] h-[22px] absolute top-[7px] right-[15px]" />
              </div>
              <div>
                <div onClick={() => setCancleModal(true)} className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-grayDark">
                  <img src={trash_white} alt="삭제아이콘" className="w-[18px] h-[18px]" />
                  <button className="font-nanum_700 text-[14px] text-white">선택 삭제</button>
                </div>
              </div>
            </div>
            <Table cancleText="선생님" cancleText2="선생님을" header={header} data={searchData} updateSelection={setSelection} onDelete={mutate} isSuccess={isSuccess} isLoading={isLoading}/>
          </main>
        <Footer />
      </div>
    </>
   );
}
 
export default TeacherAd;
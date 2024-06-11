import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import StTable from "../../components/admin/student/StTable";
import YellowModal from "../../components/YellowModal";
import BlueModalSt from "../../components/admin/student/BlueModalSt";
import BlueModalStSc from "../../components/admin/student/BludModalStSc";
import BlueModalStCl from "../../components/admin/student/BlueModalStCl";

import { deleteAdStudent } from "../../services/api/adminApi";
import { getCookie } from "../../utils/cookie";
import useInput from "../../hooks/useInput";

import trash_white from "../../assets/admin/Trash_white.png";
import circle_plus_white from "../../assets/admin/PlusCircle_white.png";
import FolderPlus_white from "../../assets/admin/FolderPlus_white.png";


const header = [
  {
    text: "이름",
    value: "nickname",
    width: "w-[10%]"
  },
  {
    text: "학교",
    value: "schoolName",
    width: "w-[14%]"
  },
  {
    text: "생년월일",
    value: "birth",
    width: "w-[12%]"
  },
  {
    text: "학생 연락처",
    value: "phoneNumber",
    width: "w-[18%]"
  },
  {
    text: "등록일",
    value: "registrationDate",
    width: "w-[12%]"
  },
  {
    text: "학생 아이디",
    value: "username",
    width: "w-[13%]"
  },
  {
    text: "학생 비밀번호",
    value: "password",
    width: "w-[18%]"
  }
]

const StudentAd = () => {
  const navigator = useNavigate();
  const refreshToken = getCookie("refreshToken");
  useEffect(() => { 
    if (!refreshToken) {
      navigator("/");
    };
  }, [refreshToken])

  const queryClient = useQueryClient()

  const [searchInput, setSearchInput] = useInput('');
  const [keyword, setKeyword] = useState('');
  const [selection, setSelection] = useState([]);
  const [cancleModal, setCancleModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [classRegisterModal, setClassRegisterModal] = useState(false);
  const [schoolRegisterModal, setSchoolRegisterModal] = useState(false);

  const deleteMutate = useMutation({
    mutationFn: (data) => {
      return deleteAdStudent(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('/admin/student')
      alert("삭제되었습니다.")
    }
  });

  useEffect(() => {
    if (deleteMutate.isSuccess == true) {
      setCancleModal(false)
    }
  },[deleteMutate.isSuccess])
  
  return (
    <>
      {cancleModal && ( selection?.length != 0 && selection?.length != undefined ? (
        <YellowModal setState={setCancleModal} mutate={deleteMutate.mutate} selection={selection} title="학생 정보 삭제" content1="선택한 " content2={`${selection?.length}명의 학생`} content3="을 삭제하시겠습니까?" cancle="취소하기" del="삭제하기" />
      ): (
        <YellowModal setState={setCancleModal} mutate={deleteMutate.mutate} selection={selection} title="알림" content1="학생을 선택해주세요" content2="" content3="" cancle="닫기" del="" />
      )
      )}
      {registerModal && (
        <BlueModalSt setState={setRegisterModal} />
      )}
      {schoolRegisterModal && (
        <BlueModalStSc setState={setSchoolRegisterModal} />
      )}
      {classRegisterModal && ( selection?.length != 0 && selection?.length != undefined ? (
        <BlueModalStCl setState={setClassRegisterModal} selection={selection} />
      ): (
        <YellowModal setState={setClassRegisterModal} title="알림" content1="학생을 선택해주세요" content2="" content3="" cancle="닫기" del="" />
      ))}
      <div className="min-w-[280px]">
        <Header/>
          <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight'>
            <div className="font-paybooc_700 text-[18px] text-black">전체 학생 명단 관리</div>
            {/* 필터 및 모달 */}
            <div className="mt-[13px] flex tablet_change:flex-row mobile:flex-col tablet_change:items-center tablet_change:justify-end mobile:items-end mobile:justify-center tablet_change:gap-[16px] mobile:gap-[8px]">
              <div className=" relative">
                <input type="text" placeholder="학생을 검색하세요" value={searchInput} onChange={setSearchInput} className="tablet:w-[300px] mobile:w-[240px] h-[36px] text-[14px] font-nanum_400 pl-[15px] rounded-[10px] bg-whiteTotal drop-shadow-sm" />
                <button onClick={() => setKeyword(searchInput)} className="absolute right-0 bg-management2 rounded-r-[10px] text-white w-[50px] h-[36px] text-[14px] font-nanum_400">검색</button>
              </div>
              <div className="flex items-center justify-end gap-[16px]">
                <div>
                  <div onClick={() => setCancleModal(true)} className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-grayDark">
                    <img src={trash_white} alt="삭제아이콘" className="w-[18px] h-[18px]" />
                    <button className="font-nanum_700 text-[14px] text-white">선택 삭제</button>
                  </div>
                </div>
                <div>
                  <div onClick={() => setRegisterModal(true)} className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-management2">
                    <img src={circle_plus_white} alt="추가아이콘" className="w-[18px] h-[18px]" />
                    <button className="font-nanum_700 text-[14px] text-white">학생 등록</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-[16px] mt-[8px]">
              <div>
                <div onClick={() => setClassRegisterModal(true)} className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-management2">
                  <img src={FolderPlus_white} alt="폴더아이콘" className="w-[18px] h-[18px]" />
                  <button className="font-nanum_700 text-[14px] text-white">반에 추가</button>
                </div>
              </div>
              <div>
                <div onClick={() => setSchoolRegisterModal(true)} className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-management2">
                  <img src={circle_plus_white} alt="추가아이콘" className="w-[18px] h-[18px]" />
                  <button className="font-nanum_700 text-[14px] text-white">학교 관리</button>
                </div>
              </div>
            </div>
            <StTable cancleText="학생" cancleText2="학생을" keyword={keyword} header={header} updateSelection={setSelection} deleteMutate={deleteMutate}/>
          </main>
        <Footer />
      </div>
    </>
   );
}
 
export default StudentAd;
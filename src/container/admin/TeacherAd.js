import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TeTable from "../../components/admin/teacher/TeTable";
import YellowModal from "../../components/YellowModal";
import BlueModalTe from "../../components/admin/teacher/BlueModalTe";

import { deleteAdTeacher } from "../../services/api/adminApi";
import { getCookie } from "../../utils/cookie";
import useInput from "../../hooks/useInput";

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
    value: "workingDays",
    width: "w-[11%]"
  },
  {
    text: "등록일",
    value: "registrationDate",
    width: "w-[13%]"
  },
  {
    text: "선생님 아이디",
    value: "username",
    width: "w-[16%]"
  },
  {
    text: "비밀번호",
    value: "password",
    width: "w-[17%]"
  }
]

const TeacherAd = () => {
  const navigator = useNavigate();
  const refreshToken = getCookie("refreshToken");
  useEffect(() => { 
    if (!refreshToken) {
      navigator("/");
    };
  }, [refreshToken])

  const queryClient = useQueryClient();

  const [selection, setSelection] = useState([]);
  const [searchInput, setSearchInput] = useInput('');
  const [keyword, setKeyword] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [cancleModal, setCancleModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const deleteMutate = useMutation({
    mutationFn: (data) => {
      return deleteAdTeacher(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('/admin/teacher')
      alert("삭제되었습니다.")
    }
  });

  useEffect(() => {
    if (deleteMutate.isSuccess == true) {
      setCancleModal(false)
    }
  },[deleteMutate.isSuccess]);

  return (
    <>
      {cancleModal && ( selection?.length != 0 ? (
        <YellowModal setState={setCancleModal} mutate={deleteMutate.mutate} selection={selection} title="선생님 정보 삭제" content1="선택한 " content2={`${selection?.length}명의 선생님`} content3="을 삭제하시겠습니까?" cancle="취소하기" del="삭제하기" />
      ): (
        <YellowModal setState={setCancleModal} mutate={deleteMutate.mutate} selection={selection} title="알림" content1="선생님을 선택해주세요" content2="" content3="" cancle="닫기" del="" />
      )
      )}
      {registerModal && (
        <BlueModalTe setState={setRegisterModal} />
      )}
      <div className="min-w-[280px]">
        <Header/>
          <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight'>
            <div className="font-paybooc_700 text-[18px] text-black">전체 선생님 명단 관리</div>
            {/* 필터 및 모달 */}
            <div className="mt-[13px] flex items-center justify-end gap-[16px]">
              <div className="relative">
                <input type="text" placeholder="선생님을 검색하세요" onChange={setSearchInput} className="w-[300px] h-[36px] text-[14px] font-nanum_400 pl-[15px] rounded-[10px] bg-whiteTotal drop-shadow-sm" />
                <button onClick={() => setKeyword(searchInput)} className="absolute right-0 bg-management2 rounded-r-[10px] text-white w-[50px] h-[36px] text-[14px] font-nanum_400">검색</button>
              </div>
              <div>
                <div onClick={() => setCancleModal(true)} className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-grayDark">
                  <img src={trash_white} alt="삭제아이콘" className="w-[18px] h-[18px]" />
                  <button className="font-nanum_700 text-[14px] text-white">선택 삭제</button>
                </div>
              </div>
              <div>
                <div onClick={() => setRegisterModal(true)} className="flex items-center justify-center gap-[4px] w-[118px] h-[36px] rounded-[10px] bg-management2">
                  <img src={circle_plus_white} alt="추가아이콘" className="w-[18px] h-[18px]" />
                  <button className="font-nanum_700 text-[14px] text-white">선생님 등록</button>
                </div>
              </div>
            </div>
            <TeTable cancleText="선생님" cancleText2="선생님을" keyword={keyword} header={header} updateSelection={setSelection} deleteMutate={deleteMutate}/>
          </main>
        <Footer />
      </div>
    </>
   );
}
 
export default TeacherAd;
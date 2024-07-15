import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useInput from "../../hooks/useInput";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClTable from "../../components/admin/classroom/ClTable";
import YellowModal from "../../components/YellowModal";
import BlueModalCl from "../../components/admin/classroom/BlueModalCl";
import { deleteAdClassroom } from "../../services/api/adminApi";
import { getCookie } from "../../utils/cookie";
import trash_white from "../../assets/admin/Trash_white.png";
import circle_plus_white from "../../assets/admin/PlusCircle_white.png";

const header = [
  {
    text: "이름",
    value: "classname",
    width: "w-[15%]",
  },
  {
    text: "티칭 선생님",
    value: "TeachingTeacher",
    width: "w-[15%]",
  },
  {
    text: "코칭 선생님",
    value: "AssistantTeacher",
    width: "w-[40%]",
  },
  {
    text: "요일",
    value: "days",
    width: "w-[30%]",
  },
];

const ClassroomAd = () => {
  const queryClient = useQueryClient();

  const [selection, setSelection] = useState([]);
  const [searchInput, setSearchInput] = useInput("");
  const [keyword, setKeyword] = useState("");
  const [cancleModal, setCancleModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const deleteMutate = useMutation({
    mutationFn: (data) => {
      return deleteAdClassroom(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/admin/classroom");
      alert("삭제 되었습니다.");
    },
  });

  useEffect(() => {
    if (deleteMutate.isSuccess === true) {
      setCancleModal(false);
    }
  }, [deleteMutate.isSuccess]);

  return (
    <>
      {cancleModal &&
        (selection?.length !== 0 ? (
          <YellowModal
            setState={setCancleModal}
            mutate={deleteMutate.mutate}
            selection={selection}
            title="반 정보 삭제"
            content1="선택한 "
            content2={`${selection?.length}개의 반`}
            content3="을 삭제하시겠습니까?"
            cancle="취소하기"
            del="삭제하기"
          />
        ) : (
          <YellowModal
            setState={setCancleModal}
            mutate={deleteMutate.mutate}
            selection={selection}
            title="알림"
            content1="반을 선택해주세요"
            content2=""
            content3=""
            cancle="닫기"
            del=""
          />
        ))}
      {registerModal && <BlueModalCl setState={setRegisterModal} />}
      <div className="min-w-[280px]">
        <Header />
        <main className="desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight">
          <div className="font-paybooc_700 text-[18px] text-black">반 관리</div>
          {/* 필터 및 모달 */}
          <div className="mt-[13px] flex tablet_change:flex-row mobile:flex-col tablet_change:items-center tablet_change:justify-end mobile:items-end mobile:justify-center tablet_change:gap-[16px] mobile:gap-[8px]">
            <div className="relative">
              <input
                type="text"
                placeholder="반을 검색하세요"
                value={searchInput}
                onChange={setSearchInput}
                className="tablet:w-[300px] mobile:w-[240px] h-[36px] text-[14px] font-nanum_400 pl-[15px] rounded-[10px] bg-whiteTotal drop-shadow-sm"
              />
              <button
                onClick={() => setKeyword(searchInput)}
                className="absolute right-0 bg-management2 rounded-r-[10px] text-white w-[50px] h-[36px] text-[14px] font-nanum_400"
              >
                검색
              </button>
            </div>
            <div className="flex items-center justify-end gap-[16px]">
              <div>
                <div
                  onClick={() => setCancleModal(true)}
                  className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-grayDark"
                >
                  <img
                    src={trash_white}
                    alt="삭제아이콘"
                    className="w-[18px] h-[18px]"
                  />
                  <button className="font-nanum_700 text-[14px] text-white">
                    선택 삭제
                  </button>
                </div>
              </div>
              <div>
                <div
                  onClick={() => setRegisterModal(true)}
                  className="flex items-center justify-center gap-[4px] w-[94px] h-[36px] rounded-[10px] bg-management2"
                >
                  <img
                    src={circle_plus_white}
                    alt="추가아이콘"
                    className="w-[18px] h-[18px]"
                  />
                  <button className="font-nanum_700 text-[14px] text-white">
                    반 등록
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ClTable
            cancleText="반"
            cancleText2="반을"
            keyword={keyword}
            header={header}
            updateSelection={setSelection}
            deleteMutate={deleteMutate}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ClassroomAd;

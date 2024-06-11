import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useInput from "../../../hooks/useInput";
import { useAdSchoolQuery } from "../adminQuery";
import { deleteAdSchool, postAdSchool } from "../../../services/api/adminApi";

import ScTable from "./ScTable";
import YellowModal from "../../YellowModal";

import MagnifyingGlass from "../../../assets/admin/MagnifyingGlass.png";

const header = [
  {
    text: "학교 이름",
    value: "schoolName",
    width: "w-[100%]",
  },
];

const BlueModalStSc = ({ setState }) => {
  const [registerInput, setRegisterInput, setHandleValue] = useInput("");
  const [searchInput, setSearchInput] = useInput("");

  const [selection, setSelection] = useState(new Set());
  const [searchData, setSearchData] = useState([]);
  const [cancleModal, setCancleModal] = useState(false);
  const queryClient = useQueryClient();

  const { schoolData } = useAdSchoolQuery();

  const postMutate = useMutation({
    mutationFn: (data) => {
      return postAdSchool(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/admin/school");
      alert("학교가 추가 되었습니다.");
      setHandleValue("");
    },
  });

  const deleteMutate = useMutation({
    mutationFn: (data) => {
      return deleteAdSchool(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/admin/school");
      alert("삭제되었습니다.")
    },
  });

  const registerData = {
    schoolName: registerInput,
  };

  useEffect(() => {
    //검색된 데이터
    const searched = schoolData?.filter((item) =>
      item.schoolName.includes(searchInput)
    );
    if (searchInput) {
      if (searched) {
        setSearchData(searched);
      }
    } else {
      setSearchData(schoolData);
    }
  }, [schoolData, searchInput]);

  useEffect(() => {
    if (deleteMutate.isSuccess == true) {
      setCancleModal(false);
    }
  }, [deleteMutate.isSuccess]);

  return (
    <>
      {cancleModal &&
        (selection?.length != 0 && selection?.length != undefined ? (
          <YellowModal
            setState={setCancleModal}
            mutate={deleteMutate.mutate}
            selection={selection}
            title="학교 삭제"
            content1="선택한 "
            content2={`${selection?.length}개의 학교`}
            content3="를 삭제하시겠습니까?"
            cancle="취소하기"
            del="삭제하기"
          />
        ) : (
          <YellowModal
            setState={setCancleModal}
            mutate={deleteMutate.mutate}
            selection={selection}
            title="알림"
            content1="학교를 선택해주세요"
            content2=""
            content3=""
            cancle="닫기"
            del=""
          />
        ))}
      <div className="z-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
        <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tablet_change:w-[694px] tablet:w-[383px] mobile:w-[260px] tablet_change:h-[373px] mobile:h-[534px] rounded-[20px] border drop-shadow">
          <div className="h-[64px] bg-management1 flex items-center pl-[36px] rounded-t-[20px]">
            <div className="font-pacbooc_700 text-[18px] text-white">
              학교 관리
            </div>
          </div>
          {/* 학교 등록 */}
          <div className="mt-[13px] flex tablet_change:flex-row mobile:flex-col gap-[8px] tablet_change:items-center tablet_change:justify-between mobile:items-end p-[12px]">
            <div className="relative tablet_change:w-[300px] mobile:w-[200px] h-[36px]">
              <input
                type="search"
                placeholder="학교를 검색하세요"
                value={searchInput}
                onChange={setSearchInput}
                className="tablet_change:w-[300px] mobile:w-[200px] h-[36px] text-[14px] font-nanum_400 pl-[15px] rounded-[10px] bg-whiteTotal drop-shadow-sm"
              />
              {!searchInput && (
                <img
                  src={MagnifyingGlass}
                  alt="돋보기"
                  className="absolute top-[7px] right-[15px] w-[22px] h-[22px]"
                />
              )}
            </div>
            <div className="relative tablet_change:w-[300px] mobile:w-[200px] h-[36px]">
              <input
                type="text"
                placeholder="학교를 등록하세요"
                value={registerInput}
                onChange={setRegisterInput}
                className="tablet_change:w-[300px] mobile:w-[200px] h-[36px] text-[14px] font-nanum_400 pl-[15px] rounded-[10px] bg-whiteTotal drop-shadow-sm"
              />
              <button
                onClick={() => postMutate.mutate(registerData)}
                className="absolute right-0 bg-management2 rounded-r-[10px] text-white w-[50px] h-[36px] text-[14px] font-nanum_400"
              >
                등록
              </button>
            </div>
          </div>

          {/* 학교 테이블 */}
          <ScTable
            cancleText="학교"
            cancleText2="학교를"
            header={header}
            data={searchData}
            updateSelection={setSelection}
            onDelete={deleteMutate.mutate}
            isSuccess={deleteMutate.isSuccess}
            isLoading={deleteMutate.isLoading}
          />
          <div className="flex items-center justify-center gap-[16px] mt-[18px] font-nanum_400 text-[14px]">
            <button
              onClick={() => setCancleModal(true)}
              className="bg-management1 text-white  tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]"
            >
              삭제하기
            </button>
            <button
              onClick={() => setState(false)}
              className="bg-grayLight text-white tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]"
            >
              취소하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueModalStSc;

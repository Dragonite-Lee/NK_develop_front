import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useInput from "../../hooks/useInput";

import {
  useTeAllAdminNoticeQuery,
  useTeAllClassNoticeQuery,
  useTeAllClassroomQuery,
} from "../../components/teacher/teacherQuery";
import DropdownCl from "../../components/teacher/DropdownCl";

import { getCookie } from "../../utils/cookie";
import StClNoticeTable from "../../components/student/notice/StClNoticeTable";
import useStudentNoticeStore from "../../store/studentNotice";

const NoticeSt = () => {
  const navigator = useNavigate();
  const refreshToken = getCookie("refreshToken");
  useEffect(() => {
    if (!refreshToken) {
      navigator("/");
    }
  }, [refreshToken]);

  const {
    classnameIdClient,
    classnameNameClient,
    setClassnameIdClient,
    setClassnameNameClient,
  } = useStudentNoticeStore();

  const [searchInput, setSearchInput] = useInput("");
  const [keyword, setKeyword] = useState("");

  const [type, setType] = useState(["STUDENT"]);

  const { allClassroomData } = useTeAllClassroomQuery();
  const { allAdminNoticeData, isLoading } = useTeAllAdminNoticeQuery();
  const allAdminNoticeStudent = allAdminNoticeData?.data.filter((data) =>
    data.adminNoticeType.includes("STUDENT")
  );
  const { allClassNoticeData } = useTeAllClassNoticeQuery(classnameIdClient);

  const totalNotice =
    allAdminNoticeStudent?.length + allClassNoticeData?.data.length;
  // console.log("관리자공지", allAdminNoticeData?.data)
  // console.log("수업공지", allClassNoticeData?.data)
  if (isLoading)
    return <div className="font-nanum_700 text-[14px]">로딩 중...</div>;

  return (
    <>
      <div className="min-w-[280px]">
        <Header />
        <main className="desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight">
          <DropdownCl
            state={classnameNameClient}
            setState={setClassnameNameClient}
            setId={setClassnameIdClient}
            itemData={allClassroomData?.data}
          />
          {allClassNoticeData && (
            <>
              <div className="flex items-center justify-between mt-[32px]">
                <div className="font-paybooc_700 text-[18px] text-black">
                  우리 반 공지 ({totalNotice})
                </div>
              </div>
              {/* 필터 및 모달 */}
              <div className="mt-[13px] flex tablet:items-center tablet:justify-end mobile:items-end mobile:justify-center tablet:gap-[20px] mobile:gap-[13px] tablet:flex-row mobile:flex-col">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="검색어를 검색하세요"
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
              </div>
              {/* content */}
              <StClNoticeTable
                classId={classnameIdClient}
                adminNotice={allAdminNoticeStudent}
                keyword={keyword}
                type={type}
              />
            </>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoticeSt;

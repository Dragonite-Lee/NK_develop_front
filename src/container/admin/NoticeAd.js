import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useInput from "../../hooks/useInput";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getCookie } from "../../utils/cookie";
import glass from "../../assets/admin/MagnifyingGlass.png";
import { useAdAllAdminNoticeQuery } from "../../components/admin/adminQuery";
import NoticeTable from "../../components/admin/adminNotice/noticeTable";

const NoticeAd = () => {
  const navigator = useNavigate();
  const refreshToken = getCookie("refreshToken");
  useEffect(() => {
    if (!refreshToken) {
      navigator("/");
    }
  }, [refreshToken]);

  const [searchInput, setSearchInput] = useInput("");
  const [keyword, setKeyword] = useState("");
  const [selection, setSelection] = useState(new Set());
  const [type, setType] = useState([]);
  const [stToggle, setStToggle] = useState(false);
  const [paToggle, setPaToggle] = useState(false);
  const [teToggle, setTeToggle] = useState(false);

  const onChangeSelection = (value) => {
    const newSelection = new Set(selection);

    if (newSelection.has(value)) {
      newSelection.delete(value);
      if (value == "STUDENT") {
        setStToggle(false);
      } else if (value == "PARENT") {
        setPaToggle(false);
      } else {
        setTeToggle(false);
      }
    } else {
      newSelection.add(value);
      if (value == "STUDENT") {
        setStToggle(true);
      } else if (value == "PARENT") {
        setPaToggle(true);
      } else {
        setTeToggle(true);
      }
    }
    setSelection(newSelection);
    // prop으로 데이터 내보냄
    setType([...newSelection]);
  };

  const { allAdminNoticeData, isLoading } = useAdAllAdminNoticeQuery();

  if (isLoading)
    return <div className="font-nanum_700 text-[14px]">로딩 중...</div>;

  

  return (
    <div className="min-w-[280px]">
        <Header />
        <main className="desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight">
          <div className="flex items-center justify-between">
            <div className="font-paybooc_700 text-[18px] text-black">
              전체 공지 ({allAdminNoticeData?.data.length})
            </div>
            <Link to="/main/noticeAd/noticeAdNewWrite">
              <button className="w-[130px] h-[36px] rounded-[10px] font-nanum_700 text-[15px] text-white bg-management2">
                공지 등록하기
              </button>
            </Link>
          </div>
          {/* 필터 및 모달 */}
          <div className="mt-[13px] flex tablet:items-center tablet:justify-end mobile:items-end mobile:justify-center tablet:gap-[20px] mobile:gap-[13px] tablet:flex-row mobile:flex-col">
            <div className="flex items-center justify-center gap-[5px] text-[13px] font-nanum_700">
              <div
                onClick={() => onChangeSelection("STUDENT")}
                className={`w-[55px] h-[26px] rounded-[10px] flex items-center justify-center ${
                  stToggle ? " bg-main1/30" : " bg-white1"
                } text-main1 border border-main1 outline outline-1 outline-main1`}
              >
                # 학생
              </div>
              <div
                onClick={() => onChangeSelection("PARENT")}
                className={`w-[67px] h-[26px] rounded-[10px] flex items-center justify-center ${
                  paToggle ? " bg-main2/30" : " bg-white1"
                } text-main2 border border-main2 outline outline-1 outline-main2`}
              >
                # 학부모
              </div>
              <div
                onClick={() => onChangeSelection("TEACHER")}
                className={`w-[67px] h-[26px] rounded-[10px] flex items-center justify-center ${
                  teToggle ? " bg-main3/30" : " bg-white1"
                } text-main3 border border-main3 outline outline-1 outline-main3`}
              >
                # 선생님
              </div>
            </div>
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
          <NoticeTable keyword={keyword} type={type} />
        </main>
        <Footer />
      </div>
  );
};

export default NoticeAd;

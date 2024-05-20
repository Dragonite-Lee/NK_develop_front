import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";

import { getCookie } from "../../utils/cookie";

import glass from "../../assets/admin/MagnifyingGlass.png"


const NoticeAd = () => {
  const navigator = useNavigate();
  const refreshToken = getCookie("refreshToken");
  useEffect(() => { 
    if (!refreshToken) {
      navigator("/");
    };
  }, [refreshToken])

  const [currentPage, setCurrentPage] = useState(1);
  const [perData, setPerDate] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState([]);

  const onChangeInputSearch = (e) => {
    setSearchInput(e.target.value)
  }

  // useEffect(() => {
  //   //검색된 데이터
  //   const searched = noticeData?.filter((item) => 
  //     item.title.includes(searchInput)
  //   )
  //   if (searchInput) {
  //     if (searched) {
  //       setSearchData(searched)
  //     }
  //   } else {
  //     setSearchData(noticeData)
  //   }
  // }, [noticeData, searchInput]);

  // useEffect(() => {
  //   const LastItem = currentPage * 9;
  //   const FirstItem = LastItem - 9;
  //   const currentItems = noticeData?.slice(FirstItem, LastItem);

  //   setPerDate(currentItems);
  // }, [currentPage, noticeData]);

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
            <div className="flex items-center justify-between">
              {/* <div className="font-paybooc_700 text-[18px] text-black">전체 공지 ({noticeData?.length})</div> */}
              <Link to="/main/noticeAd/noticeAdWrite/new">
                <button className="w-[130px] h-[36px] rounded-[10px] font-nanum_700 text-[15px] text-white bg-management2">공지 등록하기</button>
              </Link>
            </div>
            {/* 필터 및 모달 */}
            <div className="mt-[13px] flex items-center justify-end gap-[16px]">
              <div className="relative">
                <input type="text" placeholder="검색어를 입력하세요" onChange={onChangeInputSearch} className="w-[300px] h-[36px] text-[14px] font-nanum_400 pl-[15px] rounded-[10px] bg-whiteTotal drop-shadow-sm" />
                <img src={glass} alt="돋보기" className="w-[22px] h-[22px] absolute top-[7px] right-[15px]" />
              </div>
            </div>
            {/* content */}
            <div className="w-full pt-[20px] pb-[46px]">
              {/* {perData?.map((item, index) => (
                <Link key={index} className="block mt-[16px]" to={`/main/noticeAd/${item.id}`}>
                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="font-nanum_700 text-[14px]">{item.title}</div>
                    <div className="flex flex-col items-end justify-center gap-[6px]">
                      <div className="font-nanum_700 text-[13px]">필터</div>
                      <div className="font-nanum_400 text-[13px] text-grey">{item.createDate}</div>
                    </div>
                  </div>
                  <div className="divider" />
                </Link>
              ))} */}
            </div>
            <div className="flex justify-center items-center w-full tablet:gap-[60px] mobile:gap-[30px] text-[12px]">
              {/* <Pagination
                numOfData={noticeData?.length}
                itemsPerPage={9}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} */}
              {/* /> */}
            </div>
          </main>
        <Footer />
      </div>
    </>
  );
}
 
export default NoticeAd;
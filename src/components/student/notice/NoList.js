import React from "react";
import { Link } from "react-router-dom";
import SelectClass from "../SelectClass"
import SearchBar from "./SearchBar";


import ArrowRightBlack from "../../../assets/ArrowRightBlack.png"
import ArrowLeftBlack from "../../../assets/ArrowLeftBlack.png"
import Speaker from "../../../assets/student/Speaker.png"


const NoticeImportant= [
	{
    id: 11,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
    id: 12,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
    id: 13,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
    id: 14,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},

  ];

const NoticeNormal= [
	{
    id: 0,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
    id: 1,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
    id: 2,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
    id: 3,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
    id: 4,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
    id: 5,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
    id: 6,
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
]

const NumOfNotice = NoticeImportant.length + NoticeNormal.length;

const NoList = () => {

	const handleSearch = (query) => {
		<div className="text-[14px] font-nanum_400"></div>
  };

  return (
    <section>
      <SelectClass />
      <div className="w-full mt-[32px] mb-[8px] font-paybooc_700">
        <div className="text-[18px] flex items-center">
        우리 반 공지 ({NumOfNotice})
        </div>
      </div>
      {/* 수정예상 */}
      <div className="w-[300px] h-[40px] glassWhite2 flex justify-end ml-auto mb-[20px]">
        <div className="text-[13px] flex items-center justify-start px-[12px] py-[7px] w-full font-nanum_400">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className="w-full mb-[16px]">
        {NoticeImportant.map((item, index) => (
          <Link key={index} className="block justify-between items-center bg-white" to={`/main/noticelist/:${item.id}`}>
            <div className="flex items-start gap-[16px] py-[16px] px-[16px]">
              <img src={Speaker} alt="Speaker" className="w-[20px] h-[20px]" />
              <div className="text-[14px] font-nanum_700">{item.work}</div>
              <div className="tablet:text-[13px] mobile:text-[12px] text-grey flex justify-end font-nanum_400 ml-auto ">{item.date}</div>
            </div>
            <div className="divider" />
          </Link>
        ))}
        {NoticeNormal.map((item, index) => (
          <Link key={index} className="justify-between items-center" to={`/main/noticelist/:${item.id}`}>
            <div className="flex items-start gap-[16px] py-[16px] px-[16px]">
              <div className="text-[14px] font-nanum_700">{item.work}</div>
              <div className="tablet:text-[13px] mobile:text-[12px] text-grey flex justify-end font-nanum_400 ml-auto ">{item.date}</div>
            </div>
            <div className="divider" />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center w-full tablet:gap-[60px] mobile:gap-[30px] text-[12px]">
        <div className="flex justify-center items-center gap-[3px]">
          <img src={ArrowLeftBlack} alt="ArrowleftBlack" className="w-[20px] h-[20px]" />
          <div className="text-grayDark font-nanum_400" >이전</div>
        </div>
        <div className="items-center text-grayDark font-nanum_400">2 / 3 페이지</div>
        <div className="flex justify-center items-center gap-[3px]">
          <div className="text-grayDark font-nanum_400" >다음</div>
          <img src={ArrowRightBlack} alt="ArrowRightBlack" className="w-[20px] h-[20px]" />
        </div>
      </div>
    </section>
  );
}

export default NoList;
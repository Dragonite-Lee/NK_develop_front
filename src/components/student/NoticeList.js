import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import SelectOption from "./SelectOption"
import SelectClass from "./SelectClass"
import SearchBar from "./SearchBar";


import ArrowRightBlack from "../../assets/ArrowRightBlack.png"
import ArrowLeftBlack from "../../assets/ArrowLeftBlack.png"
import Speaker from "../../assets/student/Speaker.png"


const NoticeImportant= [
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},

  ];

const NoticeNormal= [
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	{
		work: '중등 수학 내신반 12월 1주차 숙제 공지',
		date: '2023.12.09'
	},
	


]

const HomeworkList = () => {

	const handleSearch = (query) => {
		<div className="text-[14px] font-nanum_400">
			\' query \'로 검색한 결과입니다.
		</div>
  };

  return (
    <section className="tablet:mt-[35px] mobile:mt-[30px] tablet:mb-[60px] mobile:mb-[24px]">
      <div className="tablet:px-[222px] mobile:px-[30px] justify-center items-center">
        <div className="px-[22px] py-[18px] desktop:w-[344px] h-[56px] w-full glassWhite flex items-center justify-between">
          <p className="text-[16px] flex w-full items-center font-paybooc_500">
            <SelectClass />
          </p>
        </div>
        <div className="flex tablet:flex-row mobile:flex-col items-right justify-between w-full tablet:gap-[6px] mobile:gap-[6px] mt-[32px] mb-[8px] font-paybooc_700">
          <p className="text-[18px] flex items-center">
          우리 반 공지 (15)
          </p>
        </div>
        <div className="w-[300px] h-[40px] glassWhite2 flex justify-end ml-auto mb-[20px]">
          <p className="text-[13px] flex items-center justify-start px-[12px] py-[7px] w-full font-nanum_400">
						<SearchBar onSearch={handleSearch} />
          </p>
        </div>
        <div className="tablet:flex-col mobile:flex-col w-full mb-[16px]">
          {NoticeImportant.map((item, index) => (
            <div key={index} className="justify-between items-center bg-white">
              <div className="flex items-start gap-[16px] py-[16px]">
								<img src={Speaker} alt="Speaker" className="w-[20px] h-[20px]" />
                <p className="text-[14px] font-nanum_700">{item.work}</p>
                <p className="tablet:text-[13px] mobile:text-[12px] text-gray flex justify-end font-nanum_400 ml-auto ">{item.date}</p>
              </div>
              <div className="divider" />
            </div>
          ))}

					{NoticeNormal.map((item, index) => (
            <div key={index} className="justify-between items-center">
              <div className="flex items-start gap-[16px] py-[16px]">
                <p className="text-[14px] font-nanum_700">{item.work}</p>
                <p className="tablet:text-[13px] mobile:text-[12px] text-gray flex justify-end font-nanum_400 ml-auto ">{item.date}</p>
              </div>
              <div className="divider" />
            </div>
          ))}

        </div>
        <div className="flex px-[50px] justify-center items-center w-full tablet:gap-[60px] mobile:gap-[30px]">
        <div className="flex justify-center items-center">
            <img src={ArrowLeftBlack} alt="ArrowLEftBlack" className="w-[20px] h-[20px]" />
            <p className="text-[12px] text-grayDark font-nanum_400" >이전</p>
          </div>
          <p className="text-[12px] items-center text-grayDark font-nanum_400" >2 / 3 페이지</p>
          <div className="flex justify-center items-center">
            <p className="text-[12px] text-grayDark font-nanum_400" >다음</p>
            <img src={ArrowRightBlack} alt="ArrowRightBlack" className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoticeList;
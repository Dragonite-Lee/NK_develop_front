import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import Pagination from "../Pagination";
import Speaker from "../../../assets/student/Speaker.png"
import {getNoticeImportant, getNoticeNormal} from "../temporary/NoticeData"

const NoticeImportant = getNoticeImportant();
const NoticeNormal = getNoticeNormal();

const TotalNotice = NoticeImportant.length + NoticeNormal.length;

const NoList = () => {

  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {

    const LastItem = (currentPage-1) * itemsPerPage + (itemsPerPage-NoticeImportant.length);
    const FirstItem = Math.max(LastItem - itemsPerPage, 0);
    const currentItems = NoticeNormal.slice(FirstItem, LastItem)

    setdata(currentItems);
  }, [currentPage]);

	const handleSearch = (query) => {
		<div className="text-[14px] font-nanum_400" />
  };

  return (
    <section>
      <div className="w-full mt-[32px] mb-[8px] font-paybooc_700">
        <div className="text-[18px] flex items-center">
        전체 공지({TotalNotice})
        </div>
      </div>
      <div className="w-[300px] h-[40px] glassWhite2 flex justify-end ml-auto mb-[20px]">
        <div className="text-[13px] flex items-center justify-start px-[12px] py-[7px] w-full font-nanum_400">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className="w-full mb-[16px]">
        <div className={currentPage > 1 ? 'hidden' : ''}>
          {NoticeImportant.map((item, index) => (
            <Link key={index} className="block justify-between items-center bg-white" to={`/parent/noticelist/:${item.id}`}>
              <div className="flex items-start gap-[16px] py-[16px] px-[16px]">
                <img src={Speaker} alt="Speaker" className="w-[20px] h-[20px]" />
                <div className="text-[14px] font-nanum_700">{item.work}</div>
                <div className="tablet:text-[13px] mobile:text-[12px] text-gray flex justify-end font-nanum_400 ml-auto ">{item.date}</div>
              </div>
              <div className="divider" />
            </Link>
          ))}
        </div>
        {data.map((item, index) => (
          <Link key={index} className="justify-between items-center" to={`/parent/noticelist/:${item.id}`}>
            <div className="flex items-start gap-[16px] py-[16px] px-[16px]">
              <div className="text-[14px] font-nanum_700">{item.work}</div>
              <div className="tablet:text-[13px] mobile:text-[12px] text-gray flex justify-end font-nanum_400 ml-auto ">{item.date}</div>
            </div>
            <div className="divider" />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center w-full tablet:gap-[60px] mobile:gap-[30px] text-[12px]">
      <Pagination
          numOfData={TotalNotice}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default NoList;
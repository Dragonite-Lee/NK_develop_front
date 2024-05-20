import React, { useEffect, useState } from "react";
import SelectOption from "./notice/SelectOption"
import SelectClass from "./SelectClass"
import Pagination from "../Pagination";
import { Link } from "react-router-dom";


import {getHomeworkList} from "../../components/student/temporary/HomeworkData"
const HomeworkList = getHomeworkList();

const HwList = () => {

  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const LastItem = currentPage * itemsPerPage;
    const FirstItem = LastItem - itemsPerPage;
    const currentItems = HomeworkList.slice(FirstItem, LastItem);

    setdata(currentItems);
  }, [currentPage]);

  
  return (
    <section>
      <SelectClass />
      <div className="w-full mt-[32px] mb-[12px]">
        <div className="text-[18px] flex items-center font-paybooc_700">
        숙제 목록 ({HomeworkList.length})
        </div>
      </div>
      <div className="w-[fit-content] glassWhite flex justify-end ml-auto">
        <div className="text-[13px] flex items-center justify-end px-[10px] font-nanum_500">
          <SelectOption />
        </div>
      </div>
      <div className="w-full pt-[5px] pb-[1px]">
        {data.map((item, index) => (
          <Link key={index} className="block mb-[15px]" to={`/main/homeworklist/:${item.id}`}>
            <div className="flex items-start justify-between mt-[15px] text-[13px]">
              <div className="font-nanum_700">{item.work}</div>
              <div className="font-nanum_400">{item.status}</div>
            </div>
            <div className="flex items-start justify-between mt-[7px] mb-[15px] text-[12px]">
              <div className="text-grey font-nanum_700">{item.name}</div>
              <div className="text-grey font-nanum_400">{item.date}</div>
            </div>
            <div className="divider" />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center w-full tablet:gap-[60px] mobile:gap-[30px] text-[12px]">
        <Pagination
          numOfData={HomeworkList.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default HwList;
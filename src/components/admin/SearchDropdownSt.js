import { useEffect, useState } from "react";

import useInput from "../../hooks/useInput";
import { useAdAllStudentQuery } from "./query";

import CaretUp from "../../assets/CaretUp.png";
import CaretDown from "../../assets/CaretDown.png";
import MagnifyingGlass from "../../assets/admin/MagnifyingGlass.png";

const SearchDropdownSt = ({state, setState, value, setValue}) => {
  const [trigger, setTrigger] = useState(false);
  const [searchInput, setSearchInput] = useInput('');
  const [searchData, setSearchData] = useState([]);
  
  const { allStudentData } = useAdAllStudentQuery();
  
  useEffect(() => {
    //검색된 데이터
    const searched = allStudentData?.data.filter((item) => 
      item.nickname.includes(searchInput)
    )
    if (searchInput) {
      if (searched) {
        setSearchData(searched)
      }
    } else {
      setSearchData(allStudentData?.data)
    }
    // console.log(searchData)
  }, [allStudentData?.data, searchInput]);
  
  const onCheckHandler = (data) => {
    setState((prev) => [...prev, data.id]);
    setTrigger(!trigger);
    setValue((prev) => [...prev, data.nickname])
  };
  
  return ( 
    <div className="relative">
      <div className="relative tablet:w-[167px] mobile:w-[127px] h-[36px]" onClick={() => setTrigger(!trigger)}>
        <input readOnly type="text" value={value} onChange={setValue} placeholder="홍길동" className="caret-transparent font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border border-border rounded-[10px] placeholder-grey"/>
        <div className="absolute top-[8px] right-0 w-[35px] bg-white">
        {trigger ? (
          <img src={CaretUp} alt="화살표" className="block bg-white w-[20px] h-[20px]" />
        ) : (
          <img src={CaretDown} alt="화살표" className="block bg-white w-[20px] h-[20px]" />
        )}
        </div>
      </div>
      {trigger && (
        <div className="fixed border border-border rounded-[10px] mt-[7px]">
          <input  type="search" value={searchInput} onChange={setSearchInput} placeholder="홍길동" className="rounded-t-[10px] caret-transparent font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border border-border placeholder-grey"/>
          {!searchInput && (
            <img src={MagnifyingGlass} alt="돋보기" className="absolute top-[9px] right-[11px] w-[18px] h-[18px]" />
          )}
          <div className="rounded-b-[10px] bg-white border-t border-border tablet:w-[167px] mobile:w-[127px] max-h-[208px]" >
            <ul className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] m-[16px] h-[176px] max-h-[176px] flex flex-col gap-[24px] overflow-y-scroll scrollbar-medium scroll-smooth">
              {searchData?.map((item,id) => (
                <li key={id} onClick={() => onCheckHandler(item)} className="hover:text-information">
                  {item.nickname}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
 
export default SearchDropdownSt;
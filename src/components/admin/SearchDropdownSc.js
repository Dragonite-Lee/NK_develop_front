import { useEffect, useState } from "react";

import CaretUp from "../../assets/CaretUp.png";
import CaretDown from "../../assets/CaretDown.png";

const SearchDropdownSc = ({state, setState, itemData}) => {
  const [trigger, setTrigger] = useState(false);
  
  const onCheckHandler = (data) => {
    setState(data);
    setTrigger(!trigger);
  };

  return ( 
    <div className="relative">
      <div className="relative tablet:w-[167px] mobile:w-[127px] h-[36px]" onClick={() => setTrigger(!trigger)}>
        <input  type="text" value={state} onChange={setState} placeholder="선택하세요" className="caret-transparent font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border border-border rounded-[10px] placeholder-grey"/>
        {trigger ? (
          <img src={CaretUp} alt="화살표" className="w-[20px] h-[20px] absolute top-[8px] right-[15px]" />
        ) : (
          <img src={CaretDown} alt="화살표" className="w-[20px] h-[20px] absolute top-[8px] right-[15px]" />
        )}
      </div>
      {trigger && (
        <div className="fixed bg-white mt-[7px] tablet:w-[167px] mobile:w-[127px] max-h-[208px] border border-border rounded-[10px]">
          <ul className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] m-[16px] max-h-[176px] flex flex-col gap-[24px] overflow-y-scroll scrollbar-medium scroll-smooth">
            {itemData.map((item,id) => (
              <li key={id} onClick={() => onCheckHandler(item.schoolName)} className="hover:text-information">
                {item.schoolName}
              </li>
            ))}
        </ul>
        </div>
      )}
    </div>
  );
}
 
export default SearchDropdownSc;
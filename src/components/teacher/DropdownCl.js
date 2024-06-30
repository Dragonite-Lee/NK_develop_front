import { useEffect, useState } from "react";

import CaretUp from "../../assets/CaretUp.png";
import CaretDown from "../../assets/CaretDown.png";

const DropdownCl = ({state, setState, itemData, setId}) => {
  const [trigger, setTrigger] = useState(false);
  
  
  const onCheckHandler = (data) => {
    setState(data.classname);
    setTrigger(!trigger);
    setId(data.id)
  };

  return ( 
    <div className="relative z-10">
      <div className="relative tablet:w-[344px] mobile:w-[220px] h-[56px]" onClick={() => setTrigger(!trigger)}>
        <input  type="text" value={state} onChange={setState} placeholder="선택하세요" className="indent-[22px] caret-transparent font-paybooc_500 tablet:text-[16px] mobile:text-[14px] tablet:w-[344px] mobile:w-[220px] h-[56px] border border-border rounded-[20px] placeholder-grey"/>
        {trigger ? (
          <img src={CaretUp} alt="화살표" className="w-[22px] h-[22px] absolute top-[18px] right-[22px]" />
        ) : (
          <img src={CaretDown} alt="화살표" className="w-[22px] h-[22px] absolute top-[18px] right-[22px]" />
        )}
      </div>
      {trigger && (
        <div className="fixed bg-white mt-[7px] tablet:w-[344px] mobile:w-[220px] max-h-[208px] border border-border rounded-[20px]">
          <ul className="indent-[22px] font-paybooc_500 tablet:text-[16px] mobile:text-[14px] m-[16px] max-h-[176px] flex flex-col gap-[24px] overflow-y-scroll scrollbar-medium scroll-smooth">
            {itemData.map((item,id) => (
              <li key={id} onClick={() => onCheckHandler(item)} className="hover:text-information">
                {item.classname}
              </li>
            ))}
        </ul>
        </div>
      )}
    </div>
  );
}
 
export default DropdownCl;
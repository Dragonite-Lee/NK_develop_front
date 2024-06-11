import { useEffect, useState } from "react";

import CaretUp from "../../../assets/CaretUp.png";
import CaretDown from "../../../assets/CaretDown.png";

const WorkDropdown = ({state, setState, itemData}) => {
  const [trigger, setTrigger] = useState(false);
  const [selection, setSelection] = useState(new Set());
  
  
  const onChangeSelection = (value) => {
    const newSelection = new Set(selection);
    if (newSelection.has(value)) {
      newSelection.delete(value);
    } else {
      newSelection.add(value);
    }
    const sortedData = Array.from(newSelection).sort((a, b) => a.id - b.id);
    
    const workData = sortedData.map((data) => data.data);
    setSelection(sortedData); 
    
    // prop으로 데이터 내보냄
    setState([...workData]);

    setTrigger(!trigger);
  };

  return ( 
    <div>
      <div className="relative tablet:w-[167px] mobile:w-[127px] h-[36px]" onClick={() => setTrigger(!trigger)}>
        <input  type="text" value={state} onChange={setState} placeholder="선택하세요" className="caret-transparent font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border border-border rounded-[10px] placeholder-grey"/>
        <div className="absolute top-[8px] right-0 w-[35px] bg-white">
          {trigger ? (
            <img src={CaretUp} alt="화살표" className="block bg-white w-[20px] h-[20px]" />
          ) : (
            <img src={CaretDown} alt="화살표" className="block bg-white w-[20px] h-[20px]" />
          )}
        </div>
      </div>
      {trigger && (
        <div className="fixed bg-white mt-[7px] tablet:w-[167px] mobile:w-[127px] max-h-[208px] border border-border rounded-[10px]">
          <ul className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] m-[16px] max-h-[176px] flex flex-col gap-[24px] overflow-y-scroll scrollbar-medium scroll-smooth">
            {itemData.map((item,id) => (
              <li key={id} onClick={() => onChangeSelection(item)} className="hover:text-information">
                {item.data}
              </li>
            ))}
        </ul>
        </div>
      )}
    </div>
  );
}
 
export default WorkDropdown;
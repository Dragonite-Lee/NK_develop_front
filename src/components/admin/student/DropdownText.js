import { useEffect, useState } from "react";

import CaretUp from "../../../assets/CaretUp.png";
import CaretDown from "../../../assets/CaretDown.png";

const DropdownText = ({state, setState, itemData, setText}) => {
  const [trigger, setTrigger] = useState(false);
  const [value, setValue] = useState('');
  
  useEffect(() => {
    const savedDate = itemData[state-1];
    if (savedDate) {
      setValue(savedDate?.text)
    }
  }, [state, itemData])
  
  const onCheckHandler = (data) => {
    // console.log(data)
    setState(data.data);
    setTrigger(!trigger);
    setValue(data.text);
    setText(data.text);
  };

  return ( 
    <div className="w-full">
      <div className="relative w-full h-[36px]" onClick={() => setTrigger(!trigger)}>
        <input  type="text" value={value} onChange={setValue} placeholder="선택하세요" className="caret-transparent font-nanum_400 tablet:text-[14px] mobile:text-[12px] w-full h-[36px] border border-border rounded-[10px] placeholder-grey"/>
        {trigger ? (
          <img src={CaretUp} alt="화살표" className="w-[20px] h-[20px] absolute top-[8px] right-[15px]" />
        ) : (
          <img src={CaretDown} alt="화살표" className="w-[20px] h-[20px] absolute top-[8px] right-[15px]" />
        )}
      </div>
      {trigger && (
        <div className="fixed bg-white mt-[7px] tablet:w-[289px] mobile:w-[214px] max-h-[208px] border border-border rounded-[10px]">
          <ul className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] m-[16px] max-h-[176px] flex flex-col gap-[24px] overflow-y-scroll scrollbar-medium scroll-smooth">
            {itemData.map((item,id) => (
              <li key={id} onClick={() => onCheckHandler(item)} className="hover:text-information">
                {item.text}
              </li>
            ))}
        </ul>
        </div>
      )}
    </div>
  );
}
 
export default DropdownText;
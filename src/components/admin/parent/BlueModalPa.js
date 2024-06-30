import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useInput from "../../../hooks/useInput";
import { idReg, phoneReg, pwReg } from "../../../utils/reg";
import { postAdParent } from "../../../services/api/adminApi";
import DropdownMenu from "../Dropdown";
import SearchDropdownSt from "../SearchDropdownSt";

const relationList = [
  {
    data: "FATHER",
    text: "부"
  },
  {
    data: "MATHER",
    text: "모"
  }
]

const BlueModalPa = ({setState}) => {
  const [nicknameValue, nicknameHandler] = useInput("");
  const [phoneNumberValue, phoneNumberHandler] = useInput("");
  const [birthValue, birthValueHandler] = useInput("");
  const [relationshipValue, relationshipHandler] = useState("");
  const [usernameValue, usernameHandler] = useInput("");
  const [passwordValue, passwordHandler] = useInput("");
  const [studentIds, setStudentIds] = useState([]);
  const [studentIdsValue, setStudentIdsValue] = useState([]);
  const queryClient = useQueryClient();

  const postMutate = useMutation({
    mutationFn: (data) => {
      return postAdParent(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('/admin/parent');
      alert("학부모가 추가되었습니다.");
      setState(false);
    }
  });
  // console.log(nicknameValue,relationshipValue,studentIds,phoneNumberValue,usernameValue,passwordValue)

  const idValid = idReg.test(usernameValue);
  const pwValid = pwReg.test(passwordValue);
  const phoneValid = phoneReg.test(phoneNumberValue);

  const parentPostData = {
    "username": usernameValue,
    "password": passwordValue,
    "nickname": nicknameValue,
    "phoneNumber": phoneNumberValue,
    "relationship": relationshipValue,
    "studentIds": studentIds,
    "birth": birthValue
  }
  
  return ( 
    <div className="z-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tablet_change:w-[694px] tablet:w-[383px] mobile:w-[260px] tablet_change:h-[373px] mobile:h-[534px] rounded-[20px] border drop-shadow">
        <div className="h-[64px] bg-management1 flex items-center pl-[36px] rounded-t-[20px]">
          <div className="font-pacbooc_700 text-[18px] text-white">학부모 신규 등록</div>
        </div>
        <div className="tablet:text-[14px] mobile:text-[12px] font-nanum_700 flex tablet_change:flex-row flex-col items-start justify-between tabelt_change:gap-[30px] mobile:gap-[17px] mt-[24px] tablet:px-[40px] mobile:px-[20px] ">
          <div className="flex flex-col gap-[17px] tablet_change:w-[292px] tablet:w-[303px] mobile:w-[220px]">
            <div className="flex items-center justify-between">
              <div>학부모 이름 <span className="text-error">*</span></div>
              <input type="text" value={nicknameValue} onChange={nicknameHandler} placeholder="홍길동" className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
            </div>
            <div className="relative z-20 flex items-center justify-between">
              <div>자녀와의 관계 <span className="text-error">*</span></div>
              <DropdownMenu state={relationshipValue} setState={relationshipHandler} itemData={relationList} />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div>자녀 정보 <span className="text-error">*</span></div>
              <SearchDropdownSt state={studentIds} setState={setStudentIds} value={studentIdsValue} setValue={setStudentIdsValue} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                생년월일 <span className="text-error">*</span>
              </div>
              <input
                type="date"
                value={birthValue}
                onChange={birthValueHandler}
                className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[17px] tablet_change:w-[292px] tablet:w-[303px] mobile:w-[220px]">
            <div>
              <div className="flex items-center justify-between">
                <div>학부모 연락처 <span className="text-error">*</span></div>
                <input type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" value={phoneNumberValue} onChange={phoneNumberHandler} placeholder="010-1234-5678" className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
              </div>
              {phoneValid == false && (
                <div className="absolute font-nanum_400 text-[10px]">핸드폰 번호 -없이 11자리입니다.</div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div>학부모 아이디 <span className="text-error">*</span></div>
                <input type="text" value={usernameValue} onChange={usernameHandler} placeholder="홍길동" className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
              </div>
              {idValid == false && (
                <div className="absolute font-nanum_400 text-[10px]">영문, 숫자 조합 6글자 이상입니다.</div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div>학부모 비밀번호 <span className="text-error">*</span></div>
                <input type="password" placeholder="홍길동" value={passwordValue} onChange={passwordHandler} className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
              </div>
              {pwValid == false && (
                <div className="absolute font-nanum_400 text-[10px]">영문, 숫자, 특수문자(?=.*[!@#$%^&*?_) 조합 6글자 이상입니다.</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[16px] tablet:mt-[24px] mobile:mt-[32px] font-nanum_400 text-[14px]">
          <button onClick={() => postMutate.mutate(parentPostData)} className="bg-management1 text-white  tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]">등록하기</button>
          <button onClick={() => setState(false)} className="bg-grayLight text-white tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]">취소하기</button>
        </div>
      </div>
    </div>
  );
}
 
export default BlueModalPa;
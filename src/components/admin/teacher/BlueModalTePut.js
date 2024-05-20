import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useInput from "../../../hooks/useInput";
import { idReg, phoneReg, pwReg } from "../../../utils/reg";
import { useAdOneTeacherQuery } from "../query";
import { putAdTeacher } from "../../../services/api/adminApi";

import WorkDropdown from "./WorkDropdown";

const workList = [
  {
    data: "월",
    id: 0
  },
  {
    data: "화",
    id: 1
  },
  {
    data: "수",
    id: 2
  },
  {
    data: "목",
    id: 3
  },
  {
    data: "금",
    id: 4
  },
  {
    data: "토",
    id: 5
  },
  {
    data: "일",
    id: 6
  }
]

const BlueModalTePut = ({setState, data}) => {
  const [nicknameValue, nicknameHandler, setNickname] = useInput("");
  const [phoneNumberValue, phoneNumberHandler, setPhoneNumber] = useInput("");
  const [birthValue, birthHandler] = useState("");
  const [usernameValue, usernameHandler, setUsername] = useInput("");
  const [passwordValue, passwordHandler, setPassword] = useInput("");
  const [registrationDateValue, registrationDateHandler, setRegistrationDate] = useInput('');
  const [workingDays, setWorkingDays] = useState([]);

  const { oneTeacherData } = useAdOneTeacherQuery(data);
  const queryClient = useQueryClient();
  
  const putMutate = useMutation({
    mutationFn: () => {
      return putAdTeacher(data, teacherPostData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('/admin/teacher');
      alert("선생님이 수정 되었습니다.");
      setState(false);
    },
    onError: (e) => {
      console.log(e)
    }
  });
  
  const idValid = idReg.test(usernameValue);
  const pwValid = pwReg.test(passwordValue);
  const phoneValid = phoneReg.test(phoneNumberValue);

  useEffect(() => {
    if (oneTeacherData) {
      setNickname(oneTeacherData.data.nickname);
      setPhoneNumber(oneTeacherData.data.phoneNumber);
      setUsername(oneTeacherData.data.username);
      setPassword(oneTeacherData.data.password);
      setRegistrationDate(oneTeacherData.data.registrationDate);
      birthHandler(oneTeacherData.data.birth);
      setWorkingDays([...oneTeacherData.data.workingDays])
    }
  }, [oneTeacherData])

  const teacherPostData = {
    "username": usernameValue,
    "password": passwordValue,
    "nickname": nicknameValue,
    "phoneNumber": phoneNumberValue,
    "birth": birthValue,
    "registrationDate": registrationDateValue,
    "workingDays" : workingDays
  }
  
  return ( 
    <div className="z-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tablet_change:w-[694px] tablet:w-[383px] mobile:w-[260px] tablet_change:h-[363px] mobile:h-[524px] rounded-[20px] border drop-shadow">
        <div className="h-[64px] bg-management1 flex items-center pl-[36px] rounded-t-[20px]">
          <div className="font-pacbooc_700 text-[18px] text-white">선생님 수정</div>
        </div>
        <div className="tablet:text-[14px] mobile:text-[12px] font-nanum_700 flex tablet_change:flex-row flex-col items-start justify-between tabelt_change:gap-[30px] mobile:gap-[17px] mt-[24px] tablet:px-[40px] mobile:px-[20px] ">
          <div className="flex flex-col gap-[17px] tablet_change:w-[292px] tablet:w-[303px] mobile:w-[220px]">
            <div className="flex items-center justify-between">
              <div>선생님 이름 <span className="text-error">*</span></div>
              <input type="text" value={nicknameValue} onChange={nicknameHandler} placeholder="홍길동" className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div>선생님 아이디 <span className="text-error">*</span></div>
                <input type="text" value={usernameValue} onChange={usernameHandler} placeholder="홍길동" className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
              </div>
              {idValid == false && (
                <div className="absolute font-nanum_400 text-[10px]">영문, 숫자 조합 6글자 이상입니다.</div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div>선생님 비밀번호 <span className="text-error">*</span></div>
                <input type="password" placeholder="홍길동" value={passwordValue} onChange={passwordHandler} className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
              </div>
              {pwValid == false && (
                <div className="absolute font-nanum_400 text-[10px] tablet:pr-0 mobile:pr-[">영문, 숫자, 특수문자(?=.*[!@#$%^&*?_) 조합 6글자 이상입니다.</div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div>학부모 연락처 <span className="text-error">*</span></div>
                <input type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" value={phoneNumberValue} onChange={phoneNumberHandler} placeholder="010-1234-5678" className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
              </div>
              {phoneValid == false && (
                <div className="absolute font-nanum_400 text-[10px]">핸드폰 번호 -없이 11자리입니다.</div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[17px] tablet_change:w-[292px] tablet:w-[303px] mobile:w-[220px]">
            <div className="flex items-center justify-between">
              <div>생년월일 <span className="text-error">*</span></div>
              <input type="date" value={birthValue} onChange={birthHandler} className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
            </div>
            <div className="flex items-center justify-between">
              <div>등록일 <span className="text-error">*</span></div>
              <input type="date" value={registrationDateValue} onChange={registrationDateHandler} className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div>근무 일자 <span className="text-error">*</span></div>
              <WorkDropdown state={workingDays} setState={setWorkingDays} itemData={workList} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[16px] mt-[24px] font-nanum_400 text-[14px]">
          <button onClick={() => putMutate.mutate(teacherPostData)} className="bg-management1 text-white  tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]">수정하기</button>
          <button onClick={() => setState(false)} className="bg-grayLight text-white tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]">취소하기</button>
        </div>
      </div>
    </div>
  );
}
 
export default BlueModalTePut;
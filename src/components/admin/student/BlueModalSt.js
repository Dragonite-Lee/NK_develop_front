import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useInput from "../../../hooks/useInput";
import { idReg, pwReg, phoneReg } from "../../../utils/reg";
import { useAdSchoolQuery } from "../adminQuery";
import { postAdStudent } from "../../../services/api/adminApi";
import DropdownMenu from "../Dropdown";
import SearchDropdownSc from "../SearchDropdownSc";

const gradeList = [
  {
    data: 1,
    text: "초1",
  },
  {
    data: 2,
    text: "초2",
  },
  {
    data: 3,
    text: "초3",
  },
  {
    data: 4,
    text: "초4",
  },
  {
    data: 5,
    text: "초5",
  },
  {
    data: 6,
    text: "초6",
  },
  {
    data: 7,
    text: "중1",
  },
  {
    data: 8,
    text: "중2",
  },
  {
    data: 9,
    text: "중3",
  },
  {
    data: 10,
    text: "고1",
  },
  {
    data: 11,
    text: "고2",
  },
  {
    data: 12,
    text: "고3",
  },
];

const BlueModalSt = ({ setState }) => {
  const [nicknameValue, nicknameHandler] = useInput("");
  const [schoolNameValue, schoolNameHandler, setSchoolName] = useInput("");
  const [birthValue, birthValueHandler] = useInput("");
  const [phoneNumberValue, phoneNumberHandler] = useInput("");
  const [usernameValue, usernameHandler] = useInput("");
  const [passwordValue, passwordHandler] = useInput("");
  const [createDateValue, createDateHandler] = useInput("");
  const [gradeValue, setGradeValue] = useState("");
  // const [allCheck, setAllCheck] = useState(false);
  // console.log(nicknameValue,schoolNameValue,birthValue,phoneNumberValue,usernameValue,passwordValue,createDateValue)

  const { schoolData } = useAdSchoolQuery();
  const queryClient = useQueryClient();

  const postMutate = useMutation({
    mutationFn: (data) => {
      return postAdStudent(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/admin/student");
      alert("학생이 추가되었습니다.");
      setState(false);
    },
  });

  const idValid = idReg.test(usernameValue);
  const pwValid = pwReg.test(passwordValue);
  const phoneValid = phoneReg.test(phoneNumberValue);

  const studentPostData = {
    username: usernameValue,
    password: passwordValue,
    nickname: nicknameValue,
    birth: birthValue,
    phoneNumber: phoneNumberValue,
    schoolName: schoolNameValue,
    grade: gradeValue,
    registrationDate: createDateValue,
  };


  return (
    <div className="z-10  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tablet_change:w-[694px] tablet:w-[383px] mobile:w-[260px] tablet_change:h-[373px] mobile:h-[564px] rounded-[20px] border drop-shadow">
        <div className="h-[64px] bg-management1 flex items-center pl-[36px] rounded-t-[20px]">
          <div className="font-pacbooc_700 text-[18px] text-white">
            학생 신규 등록
          </div>
        </div>
        <div className="tablet:text-[14px] mobile:text-[12px] font-nanum_700 flex tablet_change:flex-row flex-col items-start justify-between tabelt_change:gap-[30px] mobile:gap-[17px] tablet_change:mt-[24px] mobile:mt-[12px] tablet:px-[40px] mobile:px-[20px] ">
          <div className="flex flex-col gap-[17px] tablet_change:w-[292px] tablet:w-[303px] mobile:w-[220px]">
            <div className="flex items-center justify-between">
              <div>
                학생 이름 <span className="text-error">*</span>
              </div>
              <input
                type="text"
                value={nicknameValue}
                onChange={nicknameHandler}
                placeholder="홍길동"
                className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div>
                  학생 아이디 <span className="text-error">*</span>
                </div>
                <input
                  type="text"
                  value={usernameValue}
                  onChange={usernameHandler}
                  placeholder="홍길동"
                  className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"
                />
              </div>
              {idValid == false && (
                <div className="absolute font-nanum_400 text-[10px]">
                  영문, 숫자 조합 6글자 이상입니다.
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div>
                  학생 비밀번호 <span className="text-error">*</span>
                </div>
                <input
                  type="password"
                  placeholder="홍길동"
                  value={passwordValue}
                  onChange={passwordHandler}
                  className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"
                />
              </div>
              {pwValid == false && (
                <div className="absolute font-nanum_400 text-[10px] tablet:pr-0 mobile:pr-[">
                  영문, 숫자, 특수문자(?=.*[!@#$%^&*?_) 조합 6글자 이상입니다.
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div>
                  학생 연락처 <span className="text-error">*</span>
                </div>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  value={phoneNumberValue}
                  onChange={phoneNumberHandler}
                  placeholder="010-1234-5678"
                  className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"
                />
              </div>
              {phoneValid == false && (
                <div className="absolute font-nanum_400 text-[10px]">
                  핸드폰 번호 -없이 11자리입니다.
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[17px] tablet_change:w-[292px] tablet:w-[303px] mobile:w-[220px] tablet:mt-0 mobile:mt-1">
            <div className="relative z-20 flex items-center justify-between">
              <div>
                재학 중인 학교 <span className="text-error">*</span>
              </div>
              {/* <input type="search" value={schoolNameValue} onChange={schoolNameHandler} placeholder="안산고등학교" className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/> */}
              <SearchDropdownSc
                state={schoolNameValue}
                setState={setSchoolName}
                itemData={schoolData}
              />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                학년 <span className="text-error">*</span>
              </div>
              <DropdownMenu
                state={gradeValue}
                setState={setGradeValue}
                itemData={gradeList}
              />
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
            <div className="flex items-center justify-between">
              <div>
                등록일 <span className="text-error">*</span>
              </div>
              <input
                type="date"
                value={createDateValue}
                onChange={createDateHandler}
                className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[16px] tablet:mt-[24px] mobile:mt-[12px] font-nanum_400 text-[14px]">
          {/* ${allCheck ? ' bg-management1' : ' bg-grayLight'} */}
          <button
            onClick={() => postMutate.mutate(studentPostData)}
            className="bg-management1 text-white  tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]"
          >
            등록하기
          </button>
          <button
            onClick={() => setState(false)}
            className="bg-grayLight text-white tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]"
          >
            취소하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlueModalSt;

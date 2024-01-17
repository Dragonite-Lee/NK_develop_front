import { useState } from "react";

import useInput from "../../utils/useInput";

const roleArray = [
  {
    id: 0,
    title: "학생",
    default: true,
  },
  {
    id: 1,
    title: "학부모",
    default: false,
  },
  {
    id: 2,
    title: "선생님",
    default: false,
  }
]

const LoginInput = () => {
  const [emailValue, emailHandle] = useInput("");
  const [pwValue, pwhHandler] = useInput("");

  const [role, setRole] = useState(roleArray);

  const onClickRoleHandler = (id) => {
    const changeActiveDefault = role.map((item) => {
      return item.id === id
        ? { ...item, default: true }
        : { ...item, default: false };
    });
  
    setRole(changeActiveDefault);
  };

  return (
    <section className="tablet:w-full desktop:w-[486px] flex justify-center items-center h-[460px] glassWhite">
      <div>
        <div className="font-nanum_800 text-[28px]">로그인</div>
        <div className="flex items-center justify-center gap-[10px] text-[16px] mt-[19px] mb-[33px] font-nanum_800 text-[16px] desktop:w-[330px] tablet:w-[488px] h-[58px] bg-main4 rounded-[37px]">
          {role && role.map((item) => {
            return (
              <button className={`flex items-center justify-center desktop:w-[100px] tablet:w-[150px] h-[48px] rounded-[37px]
                ${item.default === true ? " font-nanum_800 bg-main3" : " font-nanum_400 hover:bg-main3/50"}
                `}
                onClick={() => onClickRoleHandler(item.id)}
                key={item.id}
              >
                {item.title}
              </button>
            )
          })}
        </div>
        <div className="flex flex-col gap-[8px] items-center justify-center">
          <input
            value={emailValue}
            onChange={emailHandle}
            autoComplete="off"
            className={`font-nanum_400 text-[15px] desktop:w-[330px] tablet:w-[488px] h-[48px] indent-[24px] bg-white rounded-[10px] focus:outline-none focus:border-main1 border-solid border-[1px] ${
              emailValue !== ""
                ? " outline-none border-main1"
                : " border-border"
            }`}
            name="id"
            type="text"
            placeholder="아이디를 입력하세요"
          />
          <input
            value={pwValue}
            onChange={pwhHandler}
            className={`font-nanum_400 text-[15px] desktop:w-[330px] tablet:w-[488px] h-[48px] indent-[24px] bg-white rounded-[10px] focus:outline-none focus:border-main1 border-solid border-[1px] ${
              pwValue !== "" ? " outline-none border-main1" : " border-border"
            }`}
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          <button className={`mt-[30px] font-nanum_800 text-[15px] desktop:w-[282px] tablet:w-[440px] h-[49px] rounded-[30px] text-white 
            ${emailValue !== "" && pwValue !== "" ? " bg-main3 hover:bg-main3/50 active:bg-main2 cursor-pointer" : " bg-grayLight cursor-auto"}` }
          >
            로그인하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginInput;

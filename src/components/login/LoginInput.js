// import { useState } from "react";

import useInput from "../../utils/useInput";

const LoginInput = () => {
  const [emailValue, emailHandle] = useInput('');
  const [pwValue, pwhHandler] = useInput('');

  return ( 
    <section className="tablet:w-full desktop:w-[486px] flex justify-center items-center h-[460px] glassWhite">
      <div>
        <div className="font-nanum_800 text-[28px]">로그인</div>
        <div className="mt-[19px] mb-[33px] font-nanum_800 text-[16px] desktop:w-[330px] tablet:w-[488px] h-[48px] bg-main4 rounded-[37px]">
          버튼들
        </div>
        <div className="flex flex-col gap-[8px]">
          <input value={emailValue} onChange={emailHandle} autoComplete="off" className={`font-nanum_400 text-[15px] desktop:w-[330px] tablet:w-[488px] h-[48px] indent-[24px] bg-white rounded-[10px] focus:outline-none focus:border-main1 border-solid border-[1px] ${emailValue !== '' ? " outline-none border-main1" : " border-border"}`} name="id" type="text" placeholder="아이디를 입력하세요" />
          <input value={pwValue} onChange={pwhHandler} className={`font-nanum_400 text-[15px] desktop:w-[330px] tablet:w-[488px] h-[48px] indent-[24px] bg-white rounded-[10px] focus:outline-none focus:border-main1 border-solid border-[1px] ${pwValue !== '' ? " outline-none border-main1" : " border-border"}`} name="password" type="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <button className="mt-[38px]">로그인하기</button>
      </div>
    </section>
  );
}
 
export default LoginInput;
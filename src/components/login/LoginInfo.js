import { Link } from "react-router-dom";

import ArrowRightBlack from "../../assets/ArrowRightBlack.png"
import ArrowRightWhite from "../../assets/ArrowRightWhite.png"

const LoginInfo = () => {
  return ( 
    <section className="mt-[35px] mb-[60px]">
      <div className="px-[31px] py-[27px] desktop:w-[588px] w-full glassWhite">
        <p className="font-paybooc_500 text-sm text-black leading-[23px]">
          NK infinite 영수 전문학원은 정직하고 성실하며 생각하는 인재 양성을 목표로 교육하고 있습니다. 학생들에게 생각할 수 있는 힘을 심어주기 위해 열과 성을 다하고 있으며, 이에 더해 정직한 인성과 성실한 습관을 키워갈 수 있도록 참되고 바른 교육으로 학생들을 선도하고 있습니다. 앞으로도 우리 학생들을 내 아이들로 생각하며 함께 고민하고 발전하는 NK infinite 영수 전문학원이 되겠습니다.
        </p>
        <div className="mt-[21px] flex items-center justify-end gap-[4px]">
          <Link href="#" className="font-paybooc_700 text-[15px]">교육 커리큘럼 확인</Link>
          <img src={ArrowRightBlack} alt="ArrowRightBlack" className="w-[19px] h-[19px]" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 mt-6 font-paybooc_700">
        <div className="tablet:px-[33px] py-[26px] rounded-[20px] bg-management2 desktop:w-[282px] desktop:px-[30px] h-[156px] w-full">
          <p className="text-[14px] text-white">상담문의</p>
          <p className="text-[20px] flex justify-end">031-401-8102</p>
          <p className="text-[14px] text-white">운영시간</p>
          <p className="text-[20px] flex justify-end">매일 13:00 ~ 22:00</p>
        </div>
        <div className="tablet:px-[34px] tablet:pt-[28px] tablet:pb-[24px] desktop:py-[28px] desktop:w-[282px] desktop:px-[22px] rounded-[20px] bg-management1 text-white h-[156px] w-full flex flex-col justify-between">
          <p className="text-[14px]">경기 안산시 단원구 광덕대로 130 폴리타운 A동 7층</p>
          <div className="text-[15px] flex justify-end gap-[4px]">
            <Link href="#">오시는 길</Link>
            <img src={ArrowRightWhite} alt="ArrowRightWhite" className="w-[19px] h-[19px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default LoginInfo;
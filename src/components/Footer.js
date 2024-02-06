import { Link } from "react-router-dom";

import footerLogo from "../assets/NKlogo.png"
import snsNaver from "../assets/footer/sns_naver.png"
import snsBlog from "../assets/footer/sns_blog.png"
import snsKakao from "../assets/footer/sns_kakao.png"

const Footer = () => {
  return ( 
    <footer className="w-full flex tablet:flex-row mobile:flex-col tablet:items-start mobile:items-start justify-between desktop:px-[222px] desktop:py-[38px] tablet:px-[24px] tablet:[24px] mobile:px-[20px] mobile:py-[38px] tablet:gap-0 mobile:gap-[20px] bg-border">
      <div className="flex desktop:flex-row tablet_change:flex-row mobile:flex-col items-start justify-center gap-[18px]">
        <div className="font-nanum_700 text-[16px] text-gray flex items-start justify-center gap-[8px]">
          <img src={footerLogo} alt="nk로고" className="w-[23px] h-[23px]" />
          <div>
            NK에듀
          </div>
        </div>
        <div className="font-nanum_400 text-[10px] text-gray">
          (주) NK에듀<br/>
          대표 : 홍길동, 주소 : 경기 안산시 단원구 광덕대로 130 폴리타운 A동 7층<br/>
          사업자등록번호 : 110-12-34567, Tel : 031-401-8102<br/><br/>

          Copyright ⓒ NK에듀 All rights reserved.
        </div>
      </div>
      <div className="tablet:self-auto mobile:self-end">
        <div className="flex items-center justify-end gap-[22px]">
          <Link  to="https://naver.me/FyenH0Xj" target="_blank">
            <img src={snsNaver} alt="sns로고" className="w-[24px] h-[24px]" />
          </Link>
          <Link to="https://blog.naver.com/nkinfinite" target="_blank">
            <img src={snsBlog} alt="sns로고" className="w-[24px] h-[24px]" />
          </Link>
          
          <img src={snsKakao} alt="sns로고" className="w-[24px] h-[24px]" />
        </div>
        <div className="font-nanum_400 text-[14px] text-grayDark mt-[10px]">
          상담문의  <span className="font-nanum_700">031-401-8102</span>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;
import NKlogo from "../../assets/NKlogo.png"

const LoginHeader = () => {
  return ( 
    <header className="tablet:flex items-center justify-between tablet:mb-[33px] mobile:mb-[20px] ">
      <div className="flex items-center gap-7">
        <img src={NKlogo} alt="NK로고" className="tablet:w-[70px] tablet:h-[70px] mobile:w-[40px] mobile:h-[40px]" />
        <div>
          <h1 className="font-nanum_700 tablet:text-4xl mobile:text-[20px] text-black">
            NK에듀
          </h1>
          <h2 className="font-nanum_400 tablet:text-xl mobile:text-[14px] text-black">
            학생 관리 서비스
          </h2>
        </div>
      </div>
      <h2 className="font-paybooc_700 tablet:text-xl mobile:text-[14px] tablet:mt-0 mobile:mt-[18px] text-grayDark">
        “ 정직하라, 성실하라, 생각하라 ”
      </h2>
    </header>
  );
}
 
export default LoginHeader;
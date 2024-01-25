import NKlogo from "../../assets/NKlogo.png"

const LoginHeader = () => {
  return ( 
    <header className="flex items-center justify-between mb-[33px]">
      <div className="flex items-center gap-7">
        <img src={NKlogo} alt="NK로고" className="w-[70px] h-[70px]" />
        <div>
          <h1 className="font-nanum_700 text-4xl text-black">
            NK에듀
          </h1>
          <h2 className="font-nanum_400 text-xl text-black">
            학생 관리 서비스
          </h2>
        </div>
      </div>
      <h2 className="font-paybooc_700 text-xl text-grayDark">
        “ 정직하라, 성실하라, 생각하라 ”
      </h2>
    </header>
  );
}
 
export default LoginHeader;
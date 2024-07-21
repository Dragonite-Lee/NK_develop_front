import CancleImg from "../../assets/student/whiteDelete.png"

const BlueModalImg = ({
  setState,
  name,
  src
}) => {
  return (
    <div className="z-[15] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[20px] border drop-shadow">
        <div className="h-[64px] bg-management1 flex items-center justify-between px-[36px] py-[20px] rounded-t-[20px]">
          <div className="font-pacbooc_700 text-[18px] text-white">{name} - {src}.png</div>
          <img
            src={CancleImg}
            alt="취소"
            className="w-[24px] h-[24px]"
            onClick={() => setState(false)}
          />
        </div>
        <div className="py-[14px] px-[18px] w-full h-full font-nanum_400 flex items-center justify-center flex-col">
          <img
            src={`http://ec2-43-201-63-229.ap-northeast-2.compute.amazonaws.com:8080/api/file/${src}`}
            alt="url"
            className="w-full h-fi;; object-cover rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BlueModalImg;

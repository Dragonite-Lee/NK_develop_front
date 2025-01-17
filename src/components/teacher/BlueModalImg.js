import CancleImg from "../../assets/student/whiteDelete.png"

const BlueModalImg = ({
  setState,
  name,
  src
}) => {
  return (
    <div className="z-[15] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[20px] w-3/4 h-3/4 border drop-shadow box-border">
        <div className="h-[64px] bg-management1 flex items-center justify-between gap-12 px-[36px] py-[20px] rounded-t-[20px]">
          <div className="font-pacbooc_700 text-[18px] text-white">{name} - {src}.png</div>
          <img
            src={CancleImg}
            alt="취소"
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => setState(false)}
          />
        </div>
        <div className="py-[14px] px-[18px] w-full h-[calc(100%-64px)] font-nanum_400 box-border flex items-center justify-center flex-col rounded-b-[20px]">
          <img
            src={`http://ec2-52-78-180-130.ap-northeast-2.compute.amazonaws.com:8080/api/file/${src}`}
            alt="url"
            className="w-full h-full object-contain rounded-[10px] "
          />
        </div>
      </div>
    </div>
  );
};

export default BlueModalImg;

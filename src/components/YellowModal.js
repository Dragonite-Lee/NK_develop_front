import warning_white from "../assets/admin/Warning_white.png"

const YellowModal = ({setState, title, content1, content2, content3, cancle, del, mutate, selection}) => {
  return ( 
    <div className="z-[15] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] desktop:w-[390px] tablet:w-[300px] mobile:w-[240px] h-[158px] rounded-[20px] border drop-shadow">
        <div className="h-[43px] bg-warning2 flex items-center justify-start gap-[6px] pl-[20px] rounded-t-[20px]">
          <img src={warning_white} alt="경고아이콘" className="w-[20px] h-[20px]" />
          <div className="font-pacbooc_700 text-[15px] text-white">{title}</div>
        </div>
        <div className="tablet:text-[14px] mobile:text-[13px] font-nanum_400 flex items-center justify-center flex-col mt-[20px]">
          <div>{content1}<span className="font-nanum_700">{content2}</span>{content3}</div>
          <div className="font-nanum_700 text-white flex items-center justify-center gap-[14px] mt-[18px]">
            {cancle && (
              <button onClick={() => setState(false)} className="bg-grayLight w-[104px] h-[36px] flex items-center justify-center rounded-[18px]">{cancle}</button>
            )}
            {del && (
              <button onClick={() => mutate(selection)} className="bg-warning2 w-[104px] h-[36px] flex items-center justify-center rounded-[18px]">{del}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default YellowModal;
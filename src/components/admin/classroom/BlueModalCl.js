import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useInput from "../../../hooks/useInput";
import { postAdTeacher } from "../../../services/api/adminApi";

import WorkDropdown from "../teacher/WorkDropdown";
import SearchDropdownTe from "../SearchDropdown.Te";

const workList = [
  {
    data: "월",
    id: 0
  },
  {
    data: "화",
    id: 1
  },
  {
    data: "수",
    id: 2
  },
  {
    data: "목",
    id: 3
  },
  {
    data: "금",
    id: 4
  },
  {
    data: "토",
    id: 5
  },
  {
    data: "일",
    id: 6
  }
]

const BlueModalCl = ({setState}) => {
  const [classnameValue, classnameHandler] = useInput("");
  const [teachingTeacher, setTeachingTeacher] = useState("");
  const [teachingTeacherValue, setTeachingTeacherValue] = useState("");
  const [coachingTeacher, setCoachingTeacher] = useState("");
  const [coachingTeacherValue, setCoachingTeacherValue] = useState("");
  const [workingDays, setWorkingDays] = useState([]);

  const queryClient = useQueryClient();

  const postMutate = useMutation({
    mutationFn: (data) => {
      return postAdTeacher(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('/admin/classroom');
      alert("반이 추가 되었습니다.");
      setState(false);
    }
  });
  console.log(coachingTeacher)
  const teacherPostData = {
    "classname": classnameValue,
    "days" : workingDays,
    "TeachingTeacher" : teachingTeacher[0],
    "AssistantTeacher" : coachingTeacher
  }
  console.log(coachingTeacher)
  return ( 
    <div className="z-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tablet_change:w-[694px] tablet:w-[383px] mobile:w-[260px] tablet_change:h-[265px] mobile:h-[381px] rounded-[20px] border drop-shadow">
        <div className="h-[64px] bg-management1 flex items-center pl-[36px] rounded-t-[20px]">
          <div className="font-pacbooc_700 text-[18px] text-white">선생님 신규 등록</div>
        </div>
        <div className="tablet:text-[14px] mobile:text-[12px] font-nanum_700 flex tablet_change:flex-row flex-col items-start justify-between tabelt_change:gap-[30px] mobile:gap-[17px] mt-[24px] tablet:px-[40px] mobile:px-[20px] ">
          <div className="flex flex-col gap-[17px] tablet_change:w-[292px] tablet:w-[303px] mobile:w-[220px]">
            <div className="flex items-center justify-between">
              <div>반 이름 <span className="text-error">*</span></div>
              <input type="text" value={classnameValue} onChange={classnameHandler} placeholder="A반" className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"/>
            </div>
            <div className="relative z-[30] flex items-center justify-between">
              <div>근무 일자 <span className="text-error">*</span></div>
              <WorkDropdown state={workingDays} setState={setWorkingDays} itemData={workList} />
            </div>
          </div>
          <div className="flex flex-col gap-[17px] tablet_change:w-[292px] tablet:w-[303px] mobile:w-[220px]">
            <div className="relative z-[20] flex items-center justify-between">
              <div>티칭 선생님 <span className="text-error">*</span></div>
              <SearchDropdownTe duplicate={false} state={teachingTeacher} setState={setTeachingTeacher} value={teachingTeacherValue} setValue={setTeachingTeacherValue} />
            </div>
            <div className="relative z-[10] flex items-center justify-between">
              <div>코칭 선생님 <span className="text-error">*</span></div>
              <SearchDropdownTe duplicate={true} state={coachingTeacher} setState={setCoachingTeacher} value={coachingTeacherValue} setValue={setCoachingTeacherValue} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[16px] mt-[24px] font-nanum_400 text-[14px]">
          <button onClick={() => postMutate.mutate(teacherPostData)} className="bg-management1 text-white  tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]">등록하기</button>
          <button onClick={() => setState(false)} className="bg-grayLight text-white tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]">취소하기</button>
        </div>
      </div>
    </div>
  );
}
 
export default BlueModalCl;
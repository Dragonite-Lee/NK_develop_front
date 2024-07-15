import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAdAllClassroomQuery } from "../adminQuery";
import { postAdClassroomStudent } from "../../../services/api/adminApi";
import DropdownText from "./DropdownText";

const BlueModalStCl = ({ setState, selection }) => {
  const [classValue, setClassValue] = useState("");
  const [classId, setClassId] = useState("");
  const [classroomItemList, setClassroomItemList] = useState([]);

  const { allClassroomData } = useAdAllClassroomQuery();
  const queryClient = useQueryClient();

  const ClassroomId = allClassroomData?.data.map((item) => item.id);
  const ClassroomName = allClassroomData?.data.map((item) => item.classname);

  const postMutate = useMutation({
    mutationFn: () => {
      return postAdClassroomStudent(classId, studentPostData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/admin/classroom/student");
      alert("학생이 추가 되었습니다.");
      setState(false);
    },
  });

  useEffect(() => {
    const postData = [];
    for (let i = 0; i < ClassroomId?.length; i++) {
      postData.push({ data: ClassroomId[i], text: ClassroomName[i] });
    }
    setClassroomItemList([...postData]);
  }, [allClassroomData, ClassroomId, ClassroomName]);

  const studentPostData = {
    studentIds: selection,
  };

  return (
    <div className="z-10  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tablet:w-[335px] mobile:w-[240px] tablet:h-[300px] mobile:h-[280px] rounded-[20px] border drop-shadow">
        <div className="h-[64px] bg-management1 flex items-center tablet:pl-[36px] mobile:pl-[24px] rounded-t-[20px]">
          <div className="font-pacbooc_700 text-[18px] text-white">
            선택한 학생 반에 추가
          </div>
        </div>
        <div className="text-[14px] font-nanum_700 tablet:mt-[24px] mobile:mt-[12px] tablet:px-[22px] mobile:px-[12px]">
          <div className="relative z-10 flex items-start justify-start flex-col gap-[12px]">
            <div>
              반 선택 <span className="text-error">*</span>
            </div>
            <DropdownText
              state={classId}
              setState={setClassId}
              itemData={classroomItemList}
              setText={setClassValue}
            />
          </div>
          {classId && (
            <div className="mt-[17px] font-nanum_400 flex items-center justify-center flex-col">
              <div>
                선택한{" "}
                <span className="font-nanum_700">
                  {selection?.length}명의 학생
                </span>
                을
              </div>
              <div>
                <span className="font-nanum_700">{classValue}</span>에
                추가할까요?
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-[16px] absolute bottom-[12px] left-1/2 -translate-x-1/2 font-nanum_400 text-[14px]">
          {/* ${allCheck ? ' bg-management1' : ' bg-grayLight'} */}
          <button
            onClick={() => postMutate.mutate(classId, studentPostData)}
            className="bg-management1 text-white  tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]"
          >
            등록하기
          </button>
          <button
            onClick={() => setState(false)}
            className="bg-grayLight text-white tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]"
          >
            취소하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlueModalStCl;

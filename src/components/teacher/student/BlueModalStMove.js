import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useTeAllClassroomQuery } from "../teacherQuery";
import { deleteTeClassroomStudent, postTeClassroomStudent } from "../../../services/api/teacherApi";

import DropdownText from "../../admin/student/DropdownText";



const BlueModalStMove = ({ nowId, setState, selection }) => {
  const [classValue, setClassValue] = useState("");
  const [classId, setClassId] = useState("");
  const [classroomItemList, setClassroomItemList] = useState([]);

  const { allClassroomData } = useTeAllClassroomQuery()
  const queryClient = useQueryClient();
  
  const ClassroomId = allClassroomData?.data.map((item) => item.id);
  const ClassroomName = allClassroomData?.data.map((item) => item.classname);

  const postMutate = useMutation({
    mutationFn: () => {
      return postTeClassroomStudent(classId, studentPostData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["/admin/classroom/student", classId]);
      alert("학생이 이동되었습니다.");
      setState(false);
    },
  });

  const deleteMutate = useMutation({
    mutationFn: (deleteData) => {
      return deleteTeClassroomStudent(deleteData.id, deleteData.studentIds);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        "/teacher/classroom/student",
        nowId,
      ]);
    },
  });

  useEffect(() => {
    let postData = [];
    for (let i = 0; i < ClassroomId?.length; i++) {
      postData.push({ data: ClassroomId[i], text: ClassroomName[i] });
    }
    setClassroomItemList([...postData]);
  }, [allClassroomData]);

  const studentDeleteData = {
    "id": nowId,
    "studentIds": selection,
  };

  const studentPostData = {
    "studentIds": selection,
  };

  const onMoveHandler = () => {
    postMutate.mutate();
    deleteMutate.mutate(studentDeleteData);
  };

  useEffect(() => {
    if (postMutate.isSuccess == true) {
        setState(false);
    }
  }, [postMutate.isSuccess]);

  return (
    <div className="z-10  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tablet:w-[335px] mobile:w-[240px] tablet:h-[300px] mobile:h-[280px] rounded-[20px] border drop-shadow">
        <div className="h-[64px] bg-management1 flex items-center tablet:pl-[36px] mobile:pl-[24px] rounded-t-[20px]">
          <div className="font-pacbooc_700 text-[18px] text-white">
            학생 반 이동
          </div>
        </div>
        <div className="text-[14px] font-nanum_700 tablet:mt-[24px] mobile:mt-[12px] tablet:px-[22px] mobile:px-[12px]">
            {selection?.length != 0 && selection?.length != undefined ? (
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
            ) : (
                <div>학생을 선택하세요.</div>
            )}
            {classId && (
                classId != nowId ? (
                    <div className="mt-[17px] font-nanum_400 flex items-center justify-center flex-col">
                    <div>
                        선택한{" "}
                        <span className="font-nanum_700">
                        {selection?.length}명의 학생
                        </span>
                        을
                    </div>
                    <div>
                        <span className="font-nanum_700">{classValue}</span>으로
                        이동할까요?
                    </div>
                    </div>
                ) : (
                    <div className="mt-[17px] font-nanum_400">이미 등록된 반 입니다.</div>
                )
            )}
        </div>

        <div className="flex items-center justify-center gap-[16px] tablet:mt-[24px] mobile:mt-[12px] font-nanum_400 text-[14px]">
          {/*${allCheck ? ' bg-management1' : ' bg-grayLight'}*/}
          <button
            onClick={onMoveHandler}
            className={`bg-management1 text-white  tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]`}
          >
            이동하기
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

export default BlueModalStMove;

import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useInput from "../../hooks/useInput";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import YellowModalPathDelete from "../../components/teacher/YellowModalPathDelete";
import DropdownCl from "../../components/teacher/DropdownCl";
import BlueModalStPlus from "../../components/teacher/student/BlueModalStPlus";
import BlueModalStMove from "../../components/teacher/student/BlueModalStMove";
import StTableAll from "../../components/teacher/student/StTableAll";
import {
  useTeAllClassroomQuery,
  useTeClassroomStudentQuery,
} from "../../components/teacher/teacherQuery";
import { deleteTeClassroomStudent } from "../../services/api/teacherApi";
import trash_white from "../../assets/admin/Trash_white.png";
import circle_plus_white from "../../assets/admin/PlusCircle_white.png";
import FolderPlus_white from "../../assets/admin/FolderPlus_white.png";
import useTeacherStudentStore from "../../store/teacherStudent";

const header = [
  {
    text: "이름",
    value: "nickname",
    width: "w-[20%]",
  },
  {
    text: "학교",
    value: "schoolName",
    width: "w-[30%]",
  },
  {
    text: "생년월일",
    value: "birth",
    width: "w-[20%]",
  },
  {
    text: "학생 연락처",
    value: "phoneNumber",
    width: "w-[30%]",
  },
];

const StudentTe = () => {
  const {
    classnameIdClient,
    classnameNameClient,
    setClassnameIdClient,
    setClassnameNameClient,
  } = useTeacherStudentStore();

  const queryClient = useQueryClient();

  const [classnameId, setClassnameId] = useState("");

  const { allClassroomData, isLoading } = useTeAllClassroomQuery();
  const { classroomStudentData } =
    useTeClassroomStudentQuery(classnameIdClient);

  const [selection, setSelection] = useState([]);
  const [cancleModal, setCancleModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [classMoveModal, setClassMoveModal] = useState(false);

  const deleteMutate = useMutation({
    mutationFn: (deleteData) => {
      return deleteTeClassroomStudent(deleteData.id, deleteData.studentIds);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        "/teacher/classroom/student",
        classnameId,
      ]);
      alert("삭제 되었습니다.");
    },
  });

  useEffect(() => {
    if (deleteMutate.isSuccess == true) {
      setCancleModal(false);
    }
  }, [deleteMutate.isSuccess]);

  useEffect(() => {
    setSelection([]);
  }, [setSelection, classroomStudentData?.data]);

  return (
    <>
      {cancleModal &&
        (selection?.length != 0 && selection?.length != undefined ? (
          <YellowModalPathDelete
            id={classnameIdClient}
            setState={setCancleModal}
            mutate={deleteMutate.mutate}
            selection={selection}
            title="학생 정보 삭제"
            content1="선택한 "
            content2={`${selection?.length}명의 학생`}
            content3="을 삭제하시겠습니까?"
            cancle="취소하기"
            del="삭제하기"
          />
        ) : (
          <YellowModalPathDelete
            id={classnameIdClient}
            setState={setCancleModal}
            mutate={deleteMutate.mutate}
            selection={selection}
            title="알림"
            content1="학생을 선택해주세요"
            content2=""
            content3=""
            cancle="닫기"
            del=""
          />
        ))}
      {registerModal && (
        <BlueModalStPlus setState={setRegisterModal} id={classnameIdClient} />
      )}
      {classMoveModal && (
        <BlueModalStMove
          nowId={classnameIdClient}
          setState={setClassMoveModal}
          selection={selection}
        />
      )}
      <div className="min-w-[280px]">
        <Header />
        <main className="desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight">
          <DropdownCl
            state={classnameNameClient}
            setState={setClassnameNameClient}
            setId={setClassnameIdClient}
            itemData={allClassroomData?.data}
          />
          {classroomStudentData && (
            <>
              <div className="font-paybooc_700 tablet:text-[18px] mobile:text-[16px] mt-[20px] text-black">
                우리 반 학생 관리 ({classroomStudentData?.data.length})
              </div>
              {/* 필터 및 모달 */}
              <div className="flex flex-wrap items-center justify-end gap-[16px] mt-[16px]">
                <div>
                  <div
                    onClick={() => setCancleModal(true)}
                    className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-grayDark"
                  >
                    <img
                      src={trash_white}
                      alt="삭제아이콘"
                      className="w-[18px] h-[18px]"
                    />
                    <button className="font-nanum_700 text-[14px] text-white">
                      선택 삭제
                    </button>
                  </div>
                </div>
                <div>
                  <div
                    onClick={() => setClassMoveModal(true)}
                    className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-grayDark"
                  >
                    <img
                      src={FolderPlus_white}
                      alt="폴더"
                      className="w-[18px] h-[18px]"
                    />
                    <button className="font-nanum_700 text-[14px] text-white">
                      선택 이동
                    </button>
                  </div>
                </div>
                <div>
                  <div
                    onClick={() => setRegisterModal(true)}
                    className="flex items-center justify-center gap-[4px] w-[109px] h-[36px] rounded-[10px] bg-management2"
                  >
                    <img
                      src={circle_plus_white}
                      alt="추가아이콘"
                      className="w-[18px] h-[18px]"
                    />
                    <button className="font-nanum_700 text-[14px] text-white">
                      학생 등록
                    </button>
                  </div>
                </div>
              </div>
              <StTableAll
                classId={classnameIdClient}
                cancleText="학생"
                cancleText2="학생을"
                studentData={classroomStudentData?.data}
                header={header}
                updateSelection={setSelection}
                deleteMutate={deleteMutate}
              />
            </>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default StudentTe;

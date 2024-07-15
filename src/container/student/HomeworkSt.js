import { useState } from "react";

import useInput from "../../hooks/useInput";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  useTeAllClassroomQuery,
  useTeAllHomeworkQuery,
} from "../../components/teacher/teacherQuery";
import DropdownCl from "../../components/teacher/DropdownCl";

import StClHomeworkTable from "../../components/student/homework/StClHomeworkTable";
import useStudentHomeworkStore from "../../store/studentHomework";

const HomeworkSt = () => {

  const {
    classnameIdClient,
    classnameNameClient,
    setClassnameIdClient,
    setClassnameNameClient,
  } = useStudentHomeworkStore();

  const [selection, setSelection] = useState(new Set());
  const [filter, setFilter] = useState([]);

  const [todoToggle, setTodoToggle] = useState(false);
  const [submitToggle, setSubmitToggle] = useState(false);
  const [completeToggle, setCompleteToggle] = useState(false);
  const [rejectToggle, setRejectToggle] = useState(false);

  const { allClassroomData, isLoading } = useTeAllClassroomQuery();
  const { allHomeworkData } = useTeAllHomeworkQuery(classnameIdClient);

  const onChangeSelection = (value) => {
    const newSelection = new Set(selection);

    if (newSelection.has(value)) {
      newSelection.delete(value);
      if (value == "TODO") {
        setTodoToggle(false);
      } else if (value == "SUBMIT") {
        setSubmitToggle(false);
      } else if (value == "COMPLETE") {
        setCompleteToggle(false);
      } else {
        setRejectToggle(false);
      }
    } else {
      newSelection.add(value);
      if (value == "TODO") {
        setTodoToggle(true);
      } else if (value == "SUBMIT") {
        setSubmitToggle(true);
      } else if (value == "COMPLETE") {
        setCompleteToggle(true);
      } else {
        setRejectToggle(true);
      }
    }
    setSelection(newSelection);
    // prop으로 데이터 내보냄
    setFilter([...newSelection]);
  };

  if (isLoading)
    return <div className="font-nanum_700 text-[14px]">로딩 중...</div>;
 
  return (
    <div className="min-w-[280px]">
        <Header />
        <main className="desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight">
          <DropdownCl
            state={classnameNameClient}
            setState={setClassnameNameClient}
            setId={setClassnameIdClient}
            itemData={allClassroomData?.data}
          />
          {allHomeworkData && (
            <>
              <div className="flex items-center justify-between mt-[32px]">
                <div className="font-paybooc_700 text-[18px] text-black">
                  우리 반 공지 ({allHomeworkData?.data.length})
                </div>
              </div>
              {/* 필터 및 모달 */}
              <div className="mt-[11px] pb-[8px] flex items-center justify-end flex-wrap gap-[5px] font-nanum_700 text-[13px]">
                <div
                  onClick={() => onChangeSelection("TODO")}
                  className={`w-[95px] h-[26px] rounded-[10px] flex items-center justify-center cursor-pointer ${
                    todoToggle ? " bg-homework1/30" : " bg-white1"
                  } text-homework1 border border-homework1 outline outline-1 outline-homework1`}
                >
                  # 해야할 숙제
                </div>
                <div
                  onClick={() => onChangeSelection("SUBMIT")}
                  className={`w-[95px] h-[26px] rounded-[10px] flex items-center justify-center cursor-pointer ${
                    submitToggle ? " bg-main2/30" : " bg-white1"
                  } text-main2 border border-main2 outline outline-1 outline-main2`}
                >
                  # 제출한 숙제
                </div>
                <div
                  onClick={() => onChangeSelection("COMPLETE")}
                  className={`w-[95px] h-[26px] rounded-[10px] flex items-center justify-center cursor-pointer ${
                    completeToggle ? " bg-main3/30" : " bg-white1"
                  } text-main3 border border-main3 outline outline-1 outline-main3`}
                >
                  # 완료된 숙제
                </div>
                <div
                  onClick={() => onChangeSelection("REJECT")}
                  className={`w-[95px] h-[26px] rounded-[10px] flex items-center justify-center cursor-pointer ${
                    rejectToggle ? " bg-homework2/30" : " bg-white1"
                  } text-homework2 border border-homework2 outline outline-1 outline-homework2`}
                >
                  # 반려된 숙제
                </div>
              </div>
              {/* content */}
              <StClHomeworkTable
                classId={classnameIdClient}
                filter={filter}
              />
            </>
          )}
        </main>
        <Footer />
      </div>
  );
};

export default HomeworkSt;

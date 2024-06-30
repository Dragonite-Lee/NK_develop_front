import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DropdownCl from "../../components/teacher/DropdownCl";
import TeHwTable from "../../components/teacher/homework/TeHwTable";
import {
  useTeAllClassroomQuery,
  useTeAllHomeworkQuery
} from "../../components/teacher/teacherQuery";
import { getCookie } from "../../utils/cookie";
import useTeacherHomeworkStore from "../../store/teacherHomework";

const HomewordTe = () => {
  const navigator = useNavigate();
  const refreshToken = getCookie("refreshToken");
  useEffect(() => {
    if (!refreshToken) {
      navigator("/");
    }
  }, [refreshToken]);

  const {
    classnameIdClient,
    classnameNameClient,
    setClassnameIdClient,
    setClassnameNameClient,
  } = useTeacherHomeworkStore();

  const [selection, setSelection] = useState(new Set());
  const [filter, setFilter] = useState([]);
  const [stToggle, setStToggle] = useState(false);
  const [paToggle, setPaToggle] = useState(false);
  const [teToggle, setTeToggle] = useState(false);

  const onChangeSelection = (value) => {
    const newSelection = new Set(selection);

    if (newSelection.has(value)) {
      newSelection.delete(value);
      if (value == "STUDENT") {
        setStToggle(false);
      } else if (value == "PARENT") {
        setPaToggle(false);
      } else {
        setTeToggle(false);
      }
    } else {
      newSelection.add(value);
      if (value == "STUDENT") {
        setStToggle(true);
      } else if (value == "PARENT") {
        setPaToggle(true);
      } else {
        setTeToggle(true);
      }
    }
    setSelection(newSelection);
    // prop으로 데이터 내보냄
    setFilter([...newSelection]);
  };

  const { allClassroomData, isLoading } = useTeAllClassroomQuery();
  const { allHomeworkData } = useTeAllHomeworkQuery(classnameIdClient);

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
                  숙제 목록 ({allHomeworkData.data.length})
                </div>
                <Link to="/main/HomewordTe/HomewordTeNewWrite">
                  <button className="w-[130px] h-[36px] rounded-[10px] font-nanum_700 text-[15px] text-white bg-homework2">
                    숙제 등록하기
                  </button>
                </Link>
              </div>
              <div className="mt-[13px] flex tablet:items-center tablet:justify-end mobile:items-end mobile:justify-center tablet:gap-[20px] mobile:gap-[13px] tablet:flex-row mobile:flex-col">
                <div className="flex items-center justify-center gap-[5px] text-[13px] font-nanum_700">
                  {/* <div
                    onClick={() => onChangeSelection("TODO")}
                    className={`w-[68px] h-[26px] rounded-[10px] flex items-center justify-center ${
                      stToggle ? " bg-homework1/30" : " bg-white1"
                    } text-homework1 border border-homework1 outline outline-1 outline-homework1`}
                  >
                    # 미완료
                  </div>
                  <div
                    onClick={() => onChangeSelection("REJECT")}
                    className={`w-[95px] h-[26px] rounded-[10px] flex items-center justify-center ${
                      paToggle ? " bg-homework2/30" : " bg-white1"
                    } text-homework2 border border-homework2 outline outline-1 outline-homework2`}
                  >
                    # 반려된 숙제
                  </div>
                  <div
                    onClick={() => onChangeSelection("COMPLETE")}
                    className={`w-[67px] h-[26px] rounded-[10px] flex items-center justify-center ${
                      teToggle ? " bg-main3/30" : " bg-white1"
                    } text-main3 border border-main3 outline outline-1 outline-main3`}
                  >
                    # 완료
                  </div> */}
                </div>
              </div>
              <TeHwTable
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

export default HomewordTe;

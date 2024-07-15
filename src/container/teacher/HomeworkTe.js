import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DropdownCl from "../../components/teacher/DropdownCl";
import TeHwTable from "../../components/teacher/homework/TeHwTable";
import {
  useTeAllClassroomQuery,
  useTeAllHomeworkQuery
} from "../../components/teacher/teacherQuery";

import useTeacherHomeworkStore from "../../store/teacherHomework";

const HomewordTe = () => {
  const {
    classnameIdClient,
    classnameNameClient,
    setClassnameIdClient,
    setClassnameNameClient,
  } = useTeacherHomeworkStore();

  const [filter, setFilter] = useState([]);

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
                <Link to="/main/homeworkTe/homeworkTeNewWrite">
                  <button className="w-[130px] h-[36px] rounded-[10px] font-nanum_700 text-[15px] text-white bg-homework2">
                    숙제 등록하기
                  </button>
                </Link>
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

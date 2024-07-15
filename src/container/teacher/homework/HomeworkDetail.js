import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  useTeHomeworkAllStudentQuery,
  useTeOneHomeworkQuery,
} from "../../../components/teacher/teacherQuery";
import ArrowLeft from "../../../assets/student/ArrowLeft.png";
import Trash from "../../../assets/admin/Trash_white.png";
import Pencil from "../../../assets/admin/Pencil_white.png";
import { postImageId } from "../../../services/api/studentApi";

import useTeacherHomeworkStore from "../../../store/teacherHomework";
import YellowModalHomework from "../../../components/teacher/YellowModalHomework";
import { deleteTeHomework } from "../../../services/api/teacherApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const HomeworkDetailTe = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const queryClient = useQueryClient();


  const { classnameIdClient } = useTeacherHomeworkStore();
  const { oneHomeworkData } = useTeOneHomeworkQuery(classnameIdClient, id);
  const { homeworkAllStudentData } = useTeHomeworkAllStudentQuery(
    classnameIdClient,
    id
  );
  const markDownText = `${oneHomeworkData?.data.description}`;
  const [cancleModal, setCancleModal] = useState(false);
  const [cancleId, setCancleId] = useState([]);
  
  const deleteMutate = useMutation({
    mutationFn: (deleteId) => {
      return deleteTeHomework(deleteId.classnameId, deleteId.homeworkId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/teacher/homework");
      navigator("/main/homeworkTe");
      queryClient.removeQueries(`/teacher/homework/one/`);
      setCancleModal(false);
      alert("숙제가 삭제 되었습니다.");
    },
  });

  const onClickCancleModal = (id) => {
    cancleId[0] = id;
    setCancleModal(true);
  };

  const completeCount = homeworkAllStudentData?.data.filter(
    (data) => data.status === "COMPLETE"
  );


  return (
    <>
      {cancleModal && (
        <YellowModalHomework
          id={classnameIdClient}
          setState={setCancleModal}
          mutate={deleteMutate.mutate}
          selection={cancleId}
          title="숙제 삭제"
          content1="선택한 숙제를 삭제하시겠습니까?"
          content2=""
          content3=""
          cancle="취소하기"
          del="삭제하기"
        />
      )}
      <div className="min-w-[280px]">
        <Header />
        <main className="desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight">
          <Link to="/main/homeworkTe">
            <div className="text-[15px] font-paybooc_700 flex items-center gap-[6px] mb-[27px]">
              <img
                src={ArrowLeft}
                alt="ArrowLeftBlack"
                className="w-[24px] h-[24px]"
              />
              <div>숙제 목록으로 돌아가기</div>
            </div>
          </Link>
          <div className="glassWhite desktop:w-[999px] py-[32px] px-[40px]">
            <div className="font-nanum_700 text-[13px] flex tablet:flex-row mobile:flex-col items-start justify-between gap-[12px]">
              <div>{oneHomeworkData?.data.title}</div>
              {completeCount?.length === homeworkAllStudentData?.data.length ? (
                <div className="w-[103px] h-[26px] text-homework2 rounded-[10px] flex items-center justify-center border border-homework2 outline outline-1 outline-homework2">검사 완료 숙제</div>
              ): (
                <div className="w-[81px] h-[26px] text-homework1 rounded-[10px] flex items-center justify-center border border-homework1 outline outline-1 outline-homework1">검사할 숙제</div>
              )}
            </div>
            <div className="text-[13px] flex flex-col item-end justify-center pt-[20px] pb-[16px] gap-[10px] text-grayDark">
              <div className="flex items-center justify-end gap-[21px]">
                <div className="font-nanum_400 text-grayDark">담당 선생님</div>
                <div className="font-nanum_700">
                  {oneHomeworkData?.data.teacher.nickname} 선생님
                </div>
              </div>
              <div className="flex items-center justify-end gap-[21px]">
                <div className="font-nanum_400 text-grayDark">숙제 마감일</div>
                <div className="font-nanum_700">
                  {oneHomeworkData?.data.deadline.slice(0, 10)} 까지
                </div>
              </div>
            </div>
            {/* content 시작점 */}
            <div className="py-[28px] border-t-[1px] border-[#f0f0f0] font-nanum_400 text-[14px] text-grayDark">
              <div className="font-nanum_700 text-[16px] text-black pb-[28px]">
                숙제 내용 및 범위
              </div>
              <div dangerouslySetInnerHTML={{ __html: markDownText }} />
            </div>
            {/* 제출현황 */}
            <div className="py-[28px] border-t-[1px] border-[#f0f0f0]">
              <div className="flex items-center justify-between font-nanum_700">
                <div>제출 현황</div>
                <div className="text-[13px] text-homework1 w-[63px] h-[26px] rounded-[10px] border border-homework2 outline outline-1 outline-homework2 flex items-center justify-center">
                  {completeCount?.length} /{" "}
                  {homeworkAllStudentData?.data.length}
                </div>
              </div>
              <div className="mt-[16px]">
                {homeworkAllStudentData?.data.map((item) => (
                  <Link
                    to={`/main/homeworkTe/homeworkDetail/${id}/submit/${item.id}`}
                    key={item.id}
                  >
                    <div className="mt-[16px] flex items-center justify-between gap-[16px] text-[14px]">
                      <div className="font-nanum_400">{item.studentName}</div>
                      <div className="font-nanum_700">
                        {item.status === "TODO" ? (
                          <div className="text-homework1">미제출</div>
                        ) : item.status === "COMPLETE" ? (
                          <div className="text-homework2">검사 완료</div>
                        ) : (
                          <div className="text-main2">제출 완료</div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* 버튼 */}
            <div className="border-t-[1px] border-[#f0f0f0] pt-[28px] font-nanum_700 text-[13px] text-white flex flex-wrap items-center justify-end gap-[12px]">
              <Link to="/main/homeworkTe">
                <button className="bg-grey rounded-[10px] w-[150px] h-[36px] flex items-center justify-center">
                  목록으로 돌아가기
                </button>
              </Link>
              <div
                onClick={() => onClickCancleModal(oneHomeworkData?.data.studentId)}
                className="bg-grayDark rounded-[10px] w-[130px] h-[36px] flex items-center justify-center gap-[6px]"
              >
                <img
                  src={Trash}
                  alt="삭제 아이콘"
                  className="w-[18px] h-[18px]"
                />
                <button className="">숙제 삭제하기</button>
              </div>
              <Link
                to={`/main/homeworkTe/homeworkTeWrite/${oneHomeworkData?.data.id}`}
              >
                <div className="bg-homework2 rounded-[10px] w-[130px] h-[36px] flex items-center justify-center gap-[6px]">
                  <img
                    src={Pencil}
                    alt="수정 아이콘"
                    className="w-[18px] h-[18px]"
                  />
                  <button className="">숙제 수정하기</button>
                </div>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomeworkDetailTe;

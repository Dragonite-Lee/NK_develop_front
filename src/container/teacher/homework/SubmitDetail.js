import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useTeHomeworkDetailStudentQuery, useTeOneHomeworkQuery } from "../../../components/teacher/teacherQuery";
import ArrowLeft from "../../../assets/student/ArrowLeft.png";
import Mg from "../../../assets/MagnifyingGlassPlus.png";
import Pencil from "../../../assets/admin/Pencil_white.png";

import { postImageId } from "../../../services/api/studentApi";

import useTeacherHomeworkStore from "../../../store/teacherHomework";
import YellowModalHomework from "../../../components/teacher/YellowModalHomework";
import { deleteTeHomework, getFile, putTeHomeworkFeedback } from "../../../services/api/teacherApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import BlueModal from "../../../components/BlueModal";
import HomeworkEvaluateModal from "../../../components/teacher/HomeworkEvaluteModal";
import BlueModalImg from "../../../components/teacher/BlueModalImg";

const SubmitDetailTe = () => {
  const { homeworkId, submitId } = useParams();
  const navigator = useNavigate();
  const queryClient = useQueryClient();

  const { classnameIdClient } = useTeacherHomeworkStore();
  const { oneHomeworkData } = useTeOneHomeworkQuery(classnameIdClient, homeworkId);
  const { homeworkDetailStudentData } = useTeHomeworkDetailStudentQuery(classnameIdClient, homeworkId, submitId);
  // const markDownText = `${oneHomeworkData?.data.description}`;
  const [rejectModal, setRejectModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [enlargeModal, setEnlargeModal] = useState(false);
  const [name, setName] = useState('')
  const [src, setSrc] = useState('')
  
  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  const enlargeHandler = (name, src) => {
    setName(name)
    setSrc(src)
    setEnlargeModal(true)
  }

  const putMutate = useMutation({
    mutationFn: (data) => {
      return putTeHomeworkFeedback(classnameIdClient, homeworkId, submitId, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/teacher/homework");
      navigator(`/main/homeworkTe/homeworkDetail/${homeworkId}`);
      alert("숙제를 평가했습니다.");
    },
  });

  const putRejectData = {
    status: "REJECT"
  }

  const putCompleteData = {
    status: "COMPLETE"
  }

  return (
    <>
      {rejectModal && (
        <HomeworkEvaluateModal
          bg="bg-error"
          setState={setRejectModal}
          mutate={putMutate.mutate}
          selection={putRejectData}
          title="숙제 반려"
          content1="숙제를 반려하시겠습니까?"
          content2=""
          cancle="취소하기"
          del="반려하기"
        />
      )}
      {completeModal && (
        <HomeworkEvaluateModal
          bg="bg-information"
          setState={setCompleteModal}
          mutate={putMutate.mutate}
          selection={putCompleteData}
          title="숙제 승인"
          content1="숙제를 승인하시겠습니까?"
          content2=""
          cancle="취소하기"
          del="승인하기"
        />
      )}
      {enlargeModal && (
        <BlueModalImg
          setState={setEnlargeModal}
          name={name}
          src={src}
        />
      )}
      <div className="min-w-[280px]">
        <Header />
        <main className="desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight">
          <Link to={`/main/homeworkTe/homeworkDetail/${homeworkDetailStudentData?.data.homeworkId}`}>
            <div className="text-[15px] font-paybooc_700 flex items-center gap-[6px] mb-[27px]">
              <img
                src={ArrowLeft}
                alt="ArrowLeftBlack"
                className="w-[24px] h-[24px]"
              />
              <div>숙제 제출 현황으로 돌아가기</div>
            </div>
          </Link>
          <div className="glassWhite desktop:w-[999px] py-[32px] px-[40px]">
            <div className="font-nanum_700 text-[13px] flex tablet:flex-row mobile:flex-col items-start justify-between gap-[12px]">
              <div>{homeworkDetailStudentData?.data.studentName} 학생의 숙제 내역</div>
              {homeworkDetailStudentData?.data.status == 'COMPLETE' ? (
                <div className="w-[103px] h-[26px] text-homework2 rounded-[10px] flex items-center justify-center border border-homework2 outline outline-1 outline-homework2">검사 완료 숙제</div>
              ): (
                <div className="w-[81px] h-[26px] text-homework1 rounded-[10px] flex items-center justify-center border border-homework1 outline outline-1 outline-homework1">검사할 숙제</div>
              )}
            </div>
            <div className="text-[13px] flex flex-col item-end justify-center pt-[20px] pb-[16px] gap-[10px] text-grayDark">
              <div className="flex items-center justify-end font-nanum_400 text-grayDark">{oneHomeworkData?.data.title}</div>
              <div className="flex items-center justify-end gap-[21px]">
                <div className="font-nanum_400 text-grayDark">담당 선생님</div>
                <div className="font-nanum_700">{oneHomeworkData?.data.teacher.nickname} 선생님</div>
              </div>
              <div className="flex items-center justify-end gap-[21px]">
                <div className="font-nanum_400 text-grayDark">숙제 마감일</div>
                <div className="font-nanum_700">{oneHomeworkData?.data.deadline.slice(0, 10)} 까지</div>
              </div>
            </div>
            {/* content 시작점 */}
            <div className="py-[28px] border-t-[1px] border-[#f0f0f0] font-nanum_400 text-[14px] text-grayDark">
              <div className="font-nanum_700 text-[16px] text-black">
                숙제 시간
                <div className="mt-[16px] font-nanum_900 text-[36px] text-homework1 textStroke">
                  {formatTime(homeworkDetailStudentData?.data.stopwatch)}
                </div>
              </div>
            </div>
            {/* 제출현황 */}
            <div className="py-[28px] border-t-[1px] border-[#f0f0f0]">
              <div className="flex items-center justify-between">
                <div className="font-nanum_700">제출 내역</div>
              </div>
              <div className="mt-[16px] flex flex-wrap items-center justify-start gap-[16px]">
                {homeworkDetailStudentData?.data.fileIds.length > 0 ? (homeworkDetailStudentData?.data.fileIds.map((id, index) => (
                  <div key={index} className="relative">
                    {`http://ec2-43-201-63-229.ap-northeast-2.compute.amazonaws.com/api/file/${id}`}
                    <img
                      src={`http://ec2-43-201-63-229.ap-northeast-2.compute.amazonaws.com/api/file/${id}`}
                      alt="url"
                      className="w-[169px] h-[158px] object-cover rounded-[10px]"
                    />
                    <button
                      className="absolute top-[10px] right-[10px] text-white"
                      onClick={() => enlargeHandler(homeworkDetailStudentData?.data.studentName, id)}
                    >
                      <img
                        src={Mg}
                        alt="확대"
                        className="w-[32px] h-[32px]"
                      />
                    </button>
                  </div>
                ))): (
                  <div className="font-nanum_400">제출된 사진이 존재하지 않습니다.</div>
                )}
              </div>
            </div>
            {/* 버튼 */}
            <div className="border-t-[1px] border-[#f0f0f0] pt-[28px] font-nanum_700 text-[15px] text-white ">
              <div className="w-full flex items-center justify-between gap-[10px]">
                <button onClick={() => setRejectModal(true)} className="w-full h-[41px] bg-homework1 rounded-[10px]">
                  숙제 반려하기
                </button>
                <button onClick={() => setCompleteModal(true)} className="w-full h-[41px] bg-main1 rounded-[10px]">
                  숙제 승인하기
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>

  );
};

export default SubmitDetailTe;

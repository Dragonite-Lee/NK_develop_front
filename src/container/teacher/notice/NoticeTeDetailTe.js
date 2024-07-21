import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import YellowModalTwoPathDelete from "../../../components/teacher/YellowModalTwoPathDelete";
import { useTeOneAdminNoticeQuery } from "../../../components/teacher/teacherQuery";
import useTeacherNoticeStore from "../../../store/teacherNotice";
import { deleteTeClassNotice } from "../../../services/api/teacherApi";
import ArrowLeft from "../../../assets/student/ArrowLeft.png";
import Trash from "../../../assets/admin/Trash_white.png";
import Pencil from "../../../assets/admin/Pencil_white.png";
import { getCookie } from "../../../utils/cookie";

const NoticeTeDetailTe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const refreshToken = getCookie("refreshToken");

  const {
    classnameIdClient
  } = useTeacherNoticeStore();
  
  const [cancleModal, setCancleModal] = useState(false);
  const [cancleId, setCancleId] = useState([]);

  const { oneclassNoticeData, isLoading } = useTeOneAdminNoticeQuery(classnameIdClient, id);
  const markDownText = `${oneclassNoticeData?.data.content}`;

  const deleteMutate = useMutation({
    mutationFn: (deleteId) => {
      return deleteTeClassNotice(deleteId.classnameId, deleteId.noticeId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/teacher/class-notice");
      navigate("/main/noticeTe");
      queryClient.removeQueries(`/teacher/class-notice/one/${id}`);
      setCancleModal(false);
      alert("공지가 삭제 되었습니다.");
    },
  });
  
  const onClickCancleModal = (id) => {
    cancleId[0] = id;
    setCancleModal(true);
  };

  return (
    <>
      {cancleModal && (
        <YellowModalTwoPathDelete
          id={classnameIdClient}
          setState={setCancleModal}
          mutate={deleteMutate.mutate}
          selection={cancleId}
          title="공지사항 삭제"
          content1="선택한 공지사항을 삭제하시겠습니까?"
          content2=""
          content3=""
          cancle="취소하기"
          del="삭제하기"
        />
      )}
      <div className="min-w-[280px]">
        <Header />
        <main className="desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight">
          <Link to="/main/noticeTe">
            <div className="text-[15px] font-paybooc_700 flex items-center gap-[6px] mb-[27px]">
              <img
                src={ArrowLeft}
                alt="ArrowLeftBlack"
                className="w-[24px] h-[24px]"
              />
              <div>전체 공지로 돌아가기</div>
            </div>
          </Link>
          <div className="glassWhite desktop:w-[999px] py-[32px] px-[40px]">
            <div className="font-nanum_700 flex tablet:flex-row mobile:flex-col items-start justify-between gap-[12px]">
              <div>[전체 공지] {oneclassNoticeData?.data.title}</div>
              <div className="flex items-center justify-end gap-[6px] text-[13px]">
                {oneclassNoticeData?.data.classNoticeType.map((type, i) => (
                  <div key={i}>
                    {type == "STUDENT" ? (
                      <div
                        className="w-[55px] h-[26px] rounded-[10px] flex items-center justify-center text-main1 border border-main1 outline outline-1 outline-main1"
                      >
                        # 학생
                      </div>
                    ) : type == "PARENT" ? (
                      <div
                        className="w-[67px] h-[26px] rounded-[10px] flex items-center justify-center text-main2 border border-main2 outline outline-1 outline-main2"
                      >
                        # 학부모
                      </div>
                    ) : (
                      <div
                        className="w-[67px] h-[26px] rounded-[10px] flex items-center justify-center text-main3 border border-main3 outline outline-1 outline-main3"
                      >
                        # 선생님
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="font-nanum_700 text-[13px] flex item-center mt-[16px] gap-[12px] text-grayDark">
              <div>{oneclassNoticeData?.data.created.slice(0, 10)}</div>
              <div>선생님</div>
            </div>
            <div className="mt-[28px] font-nanum_400 text-[14px] text-grayDark">
              <div dangerouslySetInnerHTML={{ __html: markDownText }} />
            </div>
          </div>
          <div className="font-nanum_700 text-[13px] text-white flex flex-wrap items-center justify-end gap-[12px] mt-[20px]">
            <Link to="/main/noticeTe">
              <button className="bg-grey rounded-[10px] w-[150px] h-[36px] flex items-center justify-center">
                목록으로 돌아가기
              </button>
            </Link>
            <div
              onClick={() => onClickCancleModal(oneclassNoticeData?.data.id)}
              className="bg-grayDark rounded-[10px] w-[130px] h-[36px] flex items-center justify-center gap-[6px]"
            >
              <img
                src={Trash}
                alt="삭제 아이콘"
                className="w-[18px] h-[18px]"
              />
              <button className="">공지 삭제하기</button>
            </div>
            <Link
              to={`/main/noticeTe/noticeTeWrite/${oneclassNoticeData?.data.id}`}
            >
              <div className="bg-management2 rounded-[10px] w-[130px] h-[36px] flex items-center justify-center gap-[6px]">
                <img
                  src={Pencil}
                  alt="수정 아이콘"
                  className="w-[18px] h-[18px]"
                />
                <button className="">공지 수정하기</button>
              </div>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoticeTeDetailTe;

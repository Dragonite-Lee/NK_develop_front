import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useInput from "../../../hooks/useInput";
import {
  deleteAdClassroomStudent,
  postAdTeacher,
} from "../../../services/api/adminApi";
import { useAdClassroomStudentQuery } from "../adminQuery";

import YellowModalCl from "./YellowModalCl";
import BlueModalPlusSt from "./BlueModalPlusSt";

import Trash from "../../../assets/admin/Trash.png";

const header = [
  {
    text: "이름",
    value: "nickname",
    width: "w-[12%]",
  },
  {
    text: "학교",
    value: "schoolName",
    width: "w-[27%]",
  },
  {
    text: "생년월일",
    value: "birth",
    width: "w-[27%]",
  },
  {
    text: "학생 연락처",
    value: "phoneNumber",
    width: "w-[27%]",
  },
];

const BlueModalClSt = ({ setState, id, title }) => {
  const [cancleModal, setCancleModal] = useState(false);
  const [cancleId, setCancleId] = useState([]);
  const [plusModal, setPlusModal] = useState(false);

  const queryClient = useQueryClient();
  const { classroomStudentData, isLoading } = useAdClassroomStudentQuery(id);
  const deleteMutate = useMutation({
    mutationFn: (deleteData) => {
      return deleteAdClassroomStudent(deleteData.id, deleteData.studentIds);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["/admin/classroom/student", id]);
      alert("삭제되었습니다.")
    },
  });

  const onClickCancleModal = (id) => {
    cancleId[0] = id;
    setCancleModal(true);
  };

  const headerkey = header.map((header) => header.value);
  const width = header.map((header) => header.width);

  useEffect(() => {
    if (deleteMutate.isSuccess == true) {
      setCancleModal(false)
    }
  },[deleteMutate.isSuccess]);

  return (
    <div className="z-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tablet_change:w-[694px] tablet:w-[383px] mobile:w-[260px] h-[430px] rounded-[20px] border drop-shadow">
        <div className="h-[64px] bg-management1 flex items-center tablet:pl-[36px] mobile:px-[12px] rounded-t-[20px]">
          <div className="font-pacbooc_700 text-[18px] text-white">
            {title} 학생 명단 관리
          </div>
        </div>
        <div className="tablet:text-[14px] mobile:text-[12px] font-nanum_700">
          {cancleModal && (
            <YellowModalCl
              setState={setCancleModal}
              id={id}
              mutate={deleteMutate.mutate}
              selection={cancleId}
              title={`학생 삭제`}
              content1={`선택한 학생을 삭제하시겠습니까?`}
              content2=""
              content3=""
              cancle="취소하기"
              del="삭제하기"
            />
          )}
          {plusModal && <BlueModalPlusSt setState={setPlusModal} id={id} />}
          {/* 테이블 */}
          {classroomStudentData?.data.length == 0 ? (
            <div className="font-nanum_700 text-[14px] mt-[24px] px-[16px]">
              등록된 데이터가 존재하지 않습니다.
            </div>
          ) : (
            <table className="px-[12px] mt-[20px] text-[14px] tablet_change:w-[692px] grid overflow-x-auto scrollbar-thin scrollbar-webkit	scroll-behavior:smooth">
              <thead className="font-nanum_700 bg-management2 w-[652px] text-white flex items-center justify-between py-[10px] px-[16px]">
                <tr className="flex items-center gap-[16px] w-full ">
                  {header.map((header, id) => (
                    <th
                      key={id}
                      className={`flex items-center justify-center ${width[id]}`}
                    >
                      <div>{header.text}</div>
                    </th>
                  ))}
                </tr>
                <tr className="w-[20px]"></tr>
              </thead>
              <tbody className="font-nanum_400 px-[16px] w-[652px] tablet_change:h-[220px] mobile:h-[210px]">
                {classroomStudentData?.data.map((data, index) => (
                  <tr key={index} className="flex items-center justify-between">
                    <td className="flex items-center gap-[16px] w-full justify-between py-[10px]">
                      {headerkey.map((key, id) => (
                        <div
                          key={key + index}
                          className={`flex items-center justify-center ${width[id]}`}
                        >
                          <div>{data[key]}</div>
                        </div>
                      ))}
                    </td>
                    <td>
                      <img
                        src={Trash}
                        alt="trash"
                        className="w-[20px] h-[20px]"
                        onClick={() => onClickCancleModal(data.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="flex items-center justify-center gap-[16px] mt-[24px] font-nanum_400 text-[14px]">
          <button
            onClick={() => setPlusModal(true)}
            className="bg-management1 text-white  tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]"
          >
            학생 추가
          </button>
          <button
            onClick={() => setState(false)}
            className="bg-grayLight text-white tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlueModalClSt;

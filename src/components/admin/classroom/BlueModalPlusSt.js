import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useInput from "../../../hooks/useInput";
import { useAdAllStudentQuery } from "../adminQuery";
import { postAdClassroomStudent } from "../../../services/api/adminApi";
import YellowModal from "../../YellowModal";
import Pencil from "../../../assets/admin/Pencil.png";
import Trash from "../../../assets/admin/Trash.png";
import MagnifyingGlass from "../../../assets/admin/MagnifyingGlass.png";

const header = [
  {
    text: "학생 이름",
    value: "nickname",
    width: "w-[50%]",
  },
  {
    text: "학교 이름",
    value: "schoolName",
    width: "w-[50%]",
  },
];

const BlueModalPlusSt = ({ setState, id }) => {
  const [searchInput, setSearchInput] = useInput("");
  const [selection, setSelection] = useState(new Set());
  const [searchData, setSearchData] = useState([]);
  const [studentIds, setStudentIds] = useState([]);

  const queryClient = useQueryClient();

  const { allStudentData } = useAdAllStudentQuery();

  const postMutate = useMutation({
    mutationFn: () => {
      return postAdClassroomStudent(id, studentPostData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/admin/classroom/student");
      alert("학생이 추가되었습니다.");
      setState(false);
    },
  });

  const studentPostData = {
    studentIds,
  };

  const headerkey = header.map((header) => header.value);
  const width = header.map((header) => header.width);

  const isSelectedAll = () => {
    return selection.size === allStudentData?.data.length;
  };

  const onChangeAllSelection = (e) => {
    if (e.target.checked) {
      const allCheckedSelection = new Set(
        allStudentData?.data.map((data) => data.id)
      );
      setSelection(allCheckedSelection);
      setStudentIds([...allCheckedSelection]);
    } else {
      setSelection(new Set());
      setStudentIds([]);
    }
  };

  const onChangeSelection = (value) => {
    const newSelection = new Set(selection);

    if (newSelection.has(value)) {
      newSelection.delete(value);
    } else {
      newSelection.add(value);
    }
    setSelection(newSelection);
    // prop으로 데이터 내보냄
    setStudentIds([...newSelection]);
  };

  useEffect(() => {
    // 검색된 데이터
    const searched = allStudentData?.data.filter((item) =>
      item.nickname.includes(searchInput)
    );
    if (searchInput) {
      if (searched) {
        setSearchData(searched);
      }
    } else {
      setSearchData(allStudentData?.data);
    }
  }, [allStudentData?.data, searchInput]);

  return (
    <div className="z-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full y-full min-h-full bg-[#212121]/[.08]">
        <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tablet_change:w-[694px] tablet:w-[383px] mobile:w-[260px] tablet:h-[430px] rounded-[20px] border drop-shadow">
          <div className="h-[64px] bg-management1 flex items-center pl-[36px] rounded-t-[20px]">
            <div className="font-pacbooc_700 text-[18px] text-white">
              학생 추가
            </div>
          </div>
          {/* 학교 등록 */}
          <div className="mt-[6px] flex tablet_change:flex-row mobile:flex-col gap-[8px] tablet_change:items-center tablet_change:justify-end mobile:items-end p-[12px]">
            <div className="relative tablet_change:w-[300px] mobile:w-[200px] h-[36px]">
              <input
                type="search"
                placeholder="학생을 검색하세요"
                value={searchInput}
                onChange={setSearchInput}
                className="tablet_change:w-[300px] mobile:w-[200px] h-[36px] text-[14px] font-nanum_400 pl-[15px] rounded-[10px] bg-whiteTotal drop-shadow-sm"
              />
              {!searchInput && (
                <img
                  src={MagnifyingGlass}
                  alt="돋보기"
                  className="absolute top-[7px] right-[15px] w-[22px] h-[22px]"
                />
              )}
            </div>
          </div>
          {/* 학교 테이블 */}
          <table className="px-[12px] mt-[6px] text-[14px] grid tablet_change:w-[692px] pb-[9px]  overflow-auto scrollbar-thin scrollbar-webkit scroll-behavior:smooth">
            <thead className="font-nanum_700 bg-management2 w-[657px] text-white flex items-center justify-between py-[10px] px-[16px]">
              <tr className="flex items-center gap-[16px] w-full">
                <th className="w-[20px] h-[20px]">
                  <input
                    type="checkbox"
                    checked={isSelectedAll()}
                    onChange={onChangeAllSelection}
                    className="w-[15px] h-[15px] flex items-center checked:border-white text-management2 bg-management2 border-white"
                  />
                </th>
                {header.map((header, id) => (
                  <th
                    key={id}
                    className={`flex items-center justify-center ${width[id]}`}
                  >
                    <div>{header.text}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-nanum_400 px-[16px] w-[657px] h-[160px] overflow-auto scrollbar-thin scrollbar-webkit scroll-behavior:smooth">
              {searchData?.map((data, index) => (
                <tr key={index} className="flex items-center justify-between">
                  <td className="flex items-center gap-[16px] w-[900px] justify-between py-[10px]">
                    <div className="w-[20px] h-[20px]">
                      <input
                        type="checkbox"
                        checked={selection.has(data.id)}
                        onChange={() => onChangeSelection(data.id)}
                        className="w-[15px] h-[15px] flex items-center checked:border-grey text-management2 bg-white border-grey"
                      />
                    </div>
                    {headerkey.map((key, id) => (
                      <div
                        key={key + id}
                        className={`flex items-center justify-center ${width[id]}`}
                      >
                        <div>{data[key]}</div>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-center gap-[16px] mt-[18px] font-nanum_400 text-[14px]">
            <button
              onClick={() => postMutate.mutate(id, studentPostData)}
              className="bg-management1 text-white  tablet_change:w-[109px] mobile:w-[99px] h-[40px] flex items-center justify-center rounded-[10px]"
            >
              학생 추가
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

export default BlueModalPlusSt;

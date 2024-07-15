import { useEffect, useState } from "react";

import YellowModal from "../../YellowModal";

import Trash from "../../../assets/admin/Trash.png";

const SchoolTable = ({
  cancleText,
  cancleText2,
  header,
  data,
  updateSelection,
  onDelete,
  isSuccess,
  isLoading,
}) => {
  const [selection, setSelection] = useState(new Set());
  const [cancleModal, setCancleModal] = useState(false);
  const [cancleId] = useState([]);

  const onChangeSelection = (value) => {
    const newSelection = new Set(selection);

    if (newSelection.has(value)) {
      newSelection.delete(value);
    } else {
      newSelection.add(value);
    }
    setSelection(newSelection);
    // prop으로 데이터 내보냄
    updateSelection([...newSelection]);
  };

  const onChangeAllSelection = (e) => {
    if (e.target.checked) {
      const allCheckedSelection = new Set(data.map((data) => data.id));
      setSelection(allCheckedSelection);
      updateSelection([...allCheckedSelection]);
    } else {
      setSelection(new Set());
      updateSelection([]);
    }
  };
  
  const isSelectedAll = () => {
    return selection.size === data?.length;
  };

  const onClickCancleModal = (id) => {
    cancleId[0] = id;
    setCancleModal(true);
  };

  const headerkey = header.map((header) => header.value);
  const width = header.map((header) => header.width);

  useEffect(() => {
    if (isSuccess === true) {
      setCancleModal(false);
    }
  }, [isSuccess]);

  return (
    <div className="mt-[12px]">
      {cancleModal && (
        <YellowModal
          setState={setCancleModal}
          mutate={onDelete}
          selection={cancleId}
          title={`${cancleText} 정보 삭제`}
          content1={`선택한 ${cancleText2} 삭제하시겠습니까?`}
          content2=""
          content3=""
          cancle="취소하기"
          del="삭제하기"
        />
      )}
      {/* 테이블 */}
      <table className="px-[12px] mt-[20px] text-[14px] grid w-full">
        <thead className="font-nanum_700 bg-management2 text-white flex items-center justify-between py-[10px] px-[16px]">
          <tr className="flex items-center gap-[16px] w-full  ">
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
          <tr className="w-[52px]" />
        </thead>
        <tbody className="font-nanum_400 px-[16px] tablet_change:h-[100px] mobile:h-[210px] overflow-y-auto scrollbar-thin scrollbar-webkit	scroll-behavior:smooth">
          {data?.map((data, index) => (
            <tr key={index} className="flex items-center justify-between">
              <td className="flex items-center gap-[16px] w-full justify-between py-[10px]">
                <div className="w-[20px] h-[20px]">
                  <input
                    type="checkbox"
                    checked={selection.has(data.schoolName)}
                    onChange={() => onChangeSelection(data.schoolName)}
                    className="w-[15px] h-[15px] flex items-center checked:border-grey text-management2 bg-white border-grey"
                  />
                </div>
                {headerkey.map((key, id) => (
                  <div
                    key={key + index}
                    className={`flex items-center justify-center ${width[id]}`}
                  >
                    <div>{data[key]}</div>
                  </div>
                ))}
              </td>
              <td className="flex items-center justify-between gap-[12px]">
                <img
                  src={Trash}
                  alt="trash"
                  className="w-[20px] h-[20px]"
                  onClick={() => onClickCancleModal(data.schoolName)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolTable;

import { useEffect, useState } from "react";

import Pagination from "../Pagination";
import YellowModal from "./YellowModal";

import Pencil from "../../assets/admin/Pencil.png"
import Trash from "../../assets/admin/Trash.png"

const Table = ({cancleText, cancleText2, header, data, updateSelection, onDelete, isSuccess, isLoading}) => {

  const [selection, setSelection] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [perData, setPerDate] = useState([]);
  const [cancleModal, setCancleModal] = useState(false);
  const [cancleId, setCancleId] = useState()

  const onChangeSelection = (value) => {
    const newSelection = new Set(selection)

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
    setCancleId(id)
    setCancleModal(true)
  }

  const headerkey = header.map((header) => header.value);
  const width = header.map((header) => header.width);

  useEffect(() => {
    const LastItem = currentPage * 15;
    const FirstItem = LastItem - 15;
    const currentItems = data?.slice(FirstItem, LastItem);

    setPerDate(currentItems);
  }, [currentPage,data]);

  useEffect(() => {
    if (isSuccess == true) {
      setCancleModal(false)
    }
  },[isSuccess])

  if (isLoading) {
    return <div>로딩중</div>
  }

  
  return ( 
    <div className="mt-[12px]">
      {cancleModal && (
        <YellowModal setState={setCancleModal} mutate={onDelete} selection={cancleId} title={`${cancleText} 정보 삭제`} content1={`선택한 ${cancleText2} 삭제하시겠습니까?`} content2="" content3="" cancle="취소하기" del="삭제하기" />
      )}
      {/* 테이블 */}
      <table className="mt-[20px] text-[14px] grid desktop:w-[996px] overflow-x-auto scrollbar-thin scrollbar-webkit	scroll-behavior:smooth tablet_change:pb-[49px] mobile:pb-[29px]">
        <thead className="font-nanum_700 bg-management2 text-white flex items-center justify-between py-[10px] px-[16px]">
          <tr className="flex items-center gap-[16px] w-[900px]  ">
            <th className="w-[20px] h-[20px]">
              <input type="checkbox"
                checked={isSelectedAll()}
                onChange={onChangeAllSelection}
                className="w-[15px] h-[15px] flex items-center checked:border-white text-management2 bg-management2 border-white"
              />
            </th>
            {header.map((header, id) =>
              <th key={id} className={`flex items-center justify-center ${width[id]}`}>
                <div>{header.text}</div>
              </th>
            )}
          </tr>
          <tr className="w-[52px]"></tr>
        </thead>
        <tbody className="font-nanum_400 px-[16px]">
          {
            perData?.map((data, index) => (
              <tr key={index} className="flex items-center justify-between">
                <td className="flex items-center gap-[16px] w-[900px] justify-between py-[10px]">
                  <div className="w-[20px] h-[20px]">
                    <input type="checkbox" 
                      checked={selection.has(data.id)}
                      onChange={() => onChangeSelection(data.id)}
                      className="w-[15px] h-[15px] flex items-center checked:border-grey text-management2 bg-white border-grey"
                    />
                  </div>
                  {
                    headerkey.map((key, id) =>
                      <div key={key + index} className={`flex items-center justify-center ${width[id]}`}>
                        <div>{data[key]}</div>
                      </div>
                    )
                  }
                </td>
                <td className="flex items-center justify-between gap-[12px]">
                  <img src={Pencil} alt="pencil" className="w-[20px] h-[20px]" />
                  <img src={Trash} alt="trash" className="w-[20px] h-[20px]" onClick={()=>onClickCancleModal(data.id)} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {/* 페이지네이션 */}
      <div className="mt-[10px]">
        <Pagination
          numOfData={data?.length}
          itemsPerPage={15}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
 
export default Table;
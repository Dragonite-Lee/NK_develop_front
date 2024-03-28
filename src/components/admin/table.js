import { useState } from "react";


const Table = ({header, data, updateSelection}) => {

  const [selection, setSelection] = useState(new Set());

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
  }

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
  }

  const headerkey = header.map((header) => header.value);
 
  return ( 
    <div className="mt-[12px]">
      {/* 필터 및 검색 */}
      <div>
    필터들
      </div>
      {/* 테이블 */}
      <table className="mt-[20px] text-[14px] grid w-[996px]">
        <thead className="font-nanum_700 bg-management2 text-white">
          <tr>
            <th>
              <input type="checkbox"
                checked={isSelectedAll()}
                onChange={onChangeAllSelection}
                className="my-[10px] w-[15px] h-[15px] flex items-center checked:border-white text-management2 bg-management2 border-white"
              />
            </th>
            {header.map((header, id) =>
              <th key={id} className="py-[10px] px-10">
                <div>{header.text}</div>
              </th>
            )}
            <th>수정삭제부분</th>
          </tr>
        </thead>
        <tbody className="font-nanum_400">
          {
            data?.map((data, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" 
                    checked={selection.has(data.id)}
                    onChange={() => onChangeSelection(data.id)}
                    className="my-[10px] w-[15px] h-[15px] flex items-center checked:border-grey text-management2 bg-white border-grey"
                  />
                </td>
                {
                  headerkey.map((key) =>
                    <td key={key + index} className="py-[10px] px-8">
                      <div>{data[key]}</div>
                    </td>
                  )
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
 
export default Table;
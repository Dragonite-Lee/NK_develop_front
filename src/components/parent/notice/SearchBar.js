import React, { useState } from 'react';

import Delete from "../../../assets/student/Delete.png"
import MagnifyingGlass from "../../../assets/student/MagnifyingGlass.png"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const InputChange = (event) => {
    setQuery(event.target.value);
  };

  const Clear = () => {
    setQuery('');
  }

  const Search = () => {
    if (onSearch) {
      onSearch(query);
      //검색 결과 불러오기
    }
  };

  return (
    <div className='flex w-full justify-between '>
      <input
        type="text" className='w-full font-[14px]'
        placeholder="검색어를 입력하세요"
        value={query}
        onChange={InputChange}
      />
      <div className='flex items-center justify-center gap-[12px] ml-auto'>
        {query && (
          <img
            src={Delete} className='h-[18px] w-[18px]'
            onClick={Clear}
            style={{ cursor: 'pointer' }}
            alt="delete"
          />
        )}
        {(query || true) && (
          <img
            src={MagnifyingGlass} className='h-[22px] w-[22px]'
            onClick={Search}
            style={{ cursor: 'pointer' }}
            alt="search"
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
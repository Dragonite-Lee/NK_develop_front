import React from "react";
import Select, {StylesConfig} from "react-select";
import makeAnimated from "react-select/animated";


const customStyles = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    control: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
    }),
  };

const HomeworkOptions =[
    {value: "Unfinished", label: "#미완료"},
    {value: "Declined", label: "#반려된 숙제"},
    {value: "Finished", label: "#완료"},
    {value: "Submitted", label: "#제출완료"},
    {value: "Confirmed", label: "#확인완료"},
]

const animatedComponents = makeAnimated();


const MyComponet = () => {
  return (
    <Select
      options={HomeworkOptions}
      styles={customStyles}
      isMulti
      placeholder="숙제 상태 필터 선택하기"
    />
  );
};

export default MyComponet;
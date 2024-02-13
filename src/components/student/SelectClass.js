import React from "react";
import Select from "react-select";


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

const ClassOptions =[
    {value: "ClassMid1", label: "중등 수학 내신반(화목토)"},
    {value: "ClassMid2", label: "중등 수학 내신반(월수금)"},
    {value: "ClassHigh1", label: "고등 수학 내신반(화목토)"},
    {value: "ClassHigh2", label: "고등 수학 내신반(월수금)"},
    {value: "ClassHigh3", label: "고등 수학 실전반(월목)"},
]

const MyComponet = () => {
    return (
    <Select options={ClassOptions} styles={customStyles} placeholder="우리 반을 선택하세요" className="w-full" />
    ); 
}

export default MyComponet;
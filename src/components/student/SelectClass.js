import React from "react";
import Select from "react-select";


const customStyles = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: '20px',
      boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)',
      width: "344px",
      height: "56px",
      fontFamily: "paybooc_500",
      paddingLeft: "22px",
      paddingRight: "22px",
      border: "none",
    }),
    menu: (provided, state) => ({
      ...provided,
      borderRadius: '20px',
      backgroundColor: "#ffffff",
      boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#ffffff",
      color: state.isSelected ? "#536FF4" : "#000000",
      cursor: "pointer",
      height: "52px",
      borderRadius: '20px',
      paddingLeft: "22px",
      display: "flex",
      alignItems: "center",
    })
  };

const ClassOptions =[
    {value: "ClassMid1", label: "중등 수학 내신반(화목토)"},
    {value: "ClassMid2", label: "중등 수학 내신반(월수금)"},
    {value: "ClassHigh1", label: "고등 수학 내신반(화목토)"},
    {value: "ClassHigh2", label: "고등 수학 내신반(월수금)"},
    {value: "ClassHigh3", label: "고등 수학 실전반(월목)"},
    {value: "ClassHigh1", label: "고등 수학 내신반(화목토)"},
    {value: "ClassHigh2", label: "고등 수학 내신반(월수금)"},
    {value: "ClassHigh3", label: "고등 수학 실전반(월목)"},
    {value: "ClassHigh1", label: "고등 수학 내신반(화목토)"},
    {value: "ClassHigh2", label: "고등 수학 내신반(월수금)"},
    {value: "ClassHigh3", label: "고등 수학 실전반(월목)"},
]


const MyComponet = () => {
    // const handle
    return (
    <Select 
      options={ClassOptions} styles={customStyles} 
      menuPortalTarget={document.body} isSearchable={false} isClearable={false} classNamePrefix="react-select"
      placeholder="우리 반을 선택하세요" className="w-full z-5" 
    />
    ); 
}

export default MyComponet;
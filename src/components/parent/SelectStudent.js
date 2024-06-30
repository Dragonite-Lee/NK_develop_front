import React, { useState } from "react";
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

const StudentOptions = [
  { value: "StudentMid12345", label: "김채원" },
  { value: "StudentMid12346", label: "박철수" },
  { value: "StudentMid12358", label: "홍길동" },
];

const SelectStudent = ({ onSelectStudent }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentSelect = (selectedOption) => {
    setSelectedStudent(selectedOption);
    onSelectStudent(selectedOption);
  };

  return (
    <Select 
      options={StudentOptions} styles={customStyles} menuPortalTarget={document.body} 
      isSearchable={false} isClearable={false} classNamePrefix="react-select"
      placeholder="학생 이름을 선택하세요" className="w-full z-5" value={selectedStudent} onChange={handleStudentSelect}
    />
  ); 
};

export default SelectStudent;

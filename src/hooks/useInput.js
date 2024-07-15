import { useState } from "react";

export default function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleValue = (value) => {
    setInputValue(value);
  }
  
  return [inputValue, handleChange, handleValue]
};
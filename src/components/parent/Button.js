import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ backgroundColor, Color, content, link}) => {

	const navigate = useNavigate()

  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderRadius: '10px',
    color: Color,
		width: '130px',
		height: '36px'
  };

	const linkTo = () => {
		navigate(link);
	}

  return (
    <button style={buttonStyle} onClick={linkTo}>
      {content}
    </button>
  );
}

export default Button;
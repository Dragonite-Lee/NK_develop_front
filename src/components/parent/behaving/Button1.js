import React from 'react';

const Button = ({ backgroundColor, Color, content, size}) => {

  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderRadius: '20px',
    color: Color,
		width: '66px',
		height: '32px',
		fontSize: size
  };


  return (
    <button style={buttonStyle}>
      {content}
    </button>
  );
}

export default Button;
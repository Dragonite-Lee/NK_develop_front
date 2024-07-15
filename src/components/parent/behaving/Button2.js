import React from 'react';

const Button = ({ backgroundColor, Color, content, size}) => {

  const { status, complete } = content;

  const buttonStyle = {
    backgroundColor,
    border: '#969699',
    borderRadius: '10px',
    color: Color,
		width: '53px',
		height: '26px',
    fontSize: '13px'
  };

  return (
    <button style={buttonStyle}>
      {status} {complete}
    </button>
  );
}

export default Button;
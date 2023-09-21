import React from 'react';

const ButtonFeedback = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

export default ButtonFeedback;

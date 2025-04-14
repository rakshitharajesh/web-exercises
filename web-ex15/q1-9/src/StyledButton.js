import React from 'react';

const StyledButton = ({ label, onClick }) => {
  return (
    <>
      <style>
        {`
          .styled-btn {
            background-color: #007BFF;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .styled-btn:hover {
            background-color: #0056b3;
          }
        `}
      </style>
      <button className="styled-btn" onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default StyledButton;

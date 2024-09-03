import React from 'react';

interface InputProps {
  placeholder: string;
  padding: string;
  width: string;
  fontSize: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  padding,
  width,
  fontSize,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        style={{
          width,
          fontSize,
          padding,
          border: 'none',
          borderRadius: '5px',
        }}
      />
    </>
  );
};

export default Input;

import React from 'react';

interface ButtonProps {
  backgroundColor: string;
  color: string;
  borderRadius: string;
  padding: string;
  text: string;
  fontSize: string;
  fontWeight: string;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  color,
  borderRadius,
  padding,
  text,
  fontSize,
  fontWeight,
}) => {
  return (
    <button
      style={{
        backgroundColor,
        color,
        padding,
        borderRadius,
        fontSize,
        fontWeight,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import "./Button.css";

const Button = ({
  children,
  size = "medium",
  bgColor = "#007bff",
  color = "#ffffff",
  onClick,
  className = "",
  ...rest
}) => {
  const sizeClass = `btn-${size}`;
  return (
    <button
      className={`btn ${sizeClass} ${className}`}
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

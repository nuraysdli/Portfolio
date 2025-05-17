import React from "react";
import "./Button.module.css";

const Button = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export default Button;

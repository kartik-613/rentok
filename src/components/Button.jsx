// src/components/Button.jsx
import React from "react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl transition duration-200 ease-in-out hover:scale-[1.02] font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;

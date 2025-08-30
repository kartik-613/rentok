// src/components/CardContent.jsx
import React from "react";

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-5 ${className}`} {...props}>
    {children}
  </div>
);

export default CardContent;

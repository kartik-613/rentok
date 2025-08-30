// src/components/Card.jsx
import React from "react";

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-2xl border bg-white shadow-sm cursor-pointer transition duration-200 hover:shadow-md hover:rounded-2xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;

// src/components/Input.jsx
import React from "react";

const Input = ({ className = "", icon: Icon, ...props }) => (
  <div className={`relative w-full ${className}`}>
    {Icon && (
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <Icon size={18} />
      </span>
    )}
    <input
      className={`w-full pl-${Icon ? "10" : "3"} pr-4 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400`}
      {...props}
    />
  </div>
);

export default Input;

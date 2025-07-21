// File: RegisterPage.jsx
import React, { useState } from "react";
import RegisterBuyer from "./RegisterBuyer";
import RegisterSeller from "./RegisterSeller";
import RegisterServices from "./RegisterServices";

export default function RegisterPage() {
  const [userType, setUserType] = useState("buyer");

  return (
    <div className="w-full min-h-screen flex items-start justify-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-[1000px] bg-white border border-gray-300 rounded-2xl shadow-sm px-6 md:px-10 pb-8 mt-19">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center my-6">
          Register Page
        </h2>

        {/* User Type Toggle */}
        <div className="py-4 flex flex-wrap gap-6 justify-center border-t-1 border-gray-300">
          {["buyer", "seller", "services"].map((type) => (
            <label key={type} className="flex items-center font-medium capitalize"> 
              <input
                type="radio"
                value={type}
                checked={userType === type}
                onChange={(e) => setUserType(e.target.value)}
                className="mr-2 accent-yellow-400 "
              />
              {type}
            </label>
          ))}
        </div>

        {/* Conditional Form Rendering */}
        <div className="border-t-1 border-gray-300">
          {userType === "buyer" && <RegisterBuyer />}
          {userType === "seller" && <RegisterSeller />}
          {userType === "services" && <RegisterServices />}
        </div>
      </div>
    </div>
  );
}

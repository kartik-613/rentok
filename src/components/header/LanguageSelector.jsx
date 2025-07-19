// src/components/LanguageSelector.jsx
import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const LanguageSelector = ({ language, setLanguage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languageOptions = [
    { value: "ENGLISH", label: "English" },
    { value: "HINDI", label: "Hindi" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative" style={{ width: "120px" }}>
      <button
        type="button"
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="border border-gray-300 rounded px-4 py-2 cursor-pointer font-semibold hover:border-yellow-300 shadow-sm w-full flex justify-between items-center"
      >
        <span>
          {languageOptions.find((opt) => opt.value === language)?.label}
        </span>
        <FiChevronDown
          className={`ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>

      {dropdownOpen && (
        <div className="absolute left-0 mt-1 w-full bg-white rounded shadow-lg z-50 border border-gray-200">
          {languageOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setLanguage(option.value);
                setDropdownOpen(false);
              }}
              className={`text-left w-full text-sm px-4 py-2 hover:bg-yellow-100 ${
                language === option.value
                  ? "text-black font-semibold bg-gray-50"
                  : "text-gray-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

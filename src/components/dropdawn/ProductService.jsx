import React, { useState, useRef, useEffect } from "react";

const options = [
  { value: "", label: "Select a product service" },
  { value: "Cars", label: "Cars" },
  { value: "Cameras & Lenses", label: "Cameras & Lenses" },
  { value: "Computers & Laptops", label: "Computers & Laptops" },
  { value: "Mobile Phones", label: "Mobile Phones" },
  { value: "Motorcycles", label: "Motorcycles" },
  { value: "Tablets", label: "Tablets" },
];

function ProductService({ onChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    setDropdownOpen(false);
    onChange?.("productService", option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full max-w-xs sm:w-48 md:w-60">
      <label className="block text-sm font-medium text-gray-700 ml-1 mb-1">
        Product Service
      </label>
      <button
        type="button"
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="w-full flex justify-between items-center bg-white border border-gray-300 text-gray-500 text-sm px-4 py-1 rounded shadow-sm hover:border-yellow-300"
      >
        <span>{selected.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute left-0 mt-1 w-full bg-white rounded shadow-lg z-50 border border-gray-200 max-h-64 overflow-hidden">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option)}
              className={`text-left w-full text-sm px-4 py-2 hover:bg-yellow-100 ${
                selected.value === option.value
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
}

export default ProductService;

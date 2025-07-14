// import React from "react";
// import Select from "react-select";

// const options = [
//   { value: "", label: "Select a mainpower service" },
//   { value: "Hireperson", label: "Hire person" },
// ];

// const customStyles = {
//   control: (base) => ({
//     ...base,
//     borderRadius: "0.375rem",
//     borderColor: "#d1d5db",
//     padding: "0.0rem 0.0rem",
//     fontSize: "0.875rem",
//     boxShadow: "none",
//     "&:hover": {
//       borderColor: "#facc15",
//     },
//   }),
//   option: (base, state) => ({
//     ...base,
//     backgroundColor: state.isFocused ? "#fde047" : "#ffffff", // yellow-300
//     color: "#000000",
//     fontSize: "0.875rem",
//   }),
// };

// function MainPowerService({ onChange }) {
//   const handleChange = (selectedOption) => {
//     onChange?.("mainPowerService", selectedOption.value);
//   };

//   return (
//     <div className="w-full max-w-xs sm:w-48 md:w-52">
//       {/* <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">
//         Main Power Service
//       </label> */}
//       <Select
//         options={options}
//         onChange={handleChange}
//         styles={customStyles}
//         defaultValue={options[0]}
//       />
//     </div>
//   );
// }

// export default MainPowerService;

import React, { useState } from "react";

const options = [
  { value: "", label: "Select a main-power service" },
  { value: "Hireperson", label: "Hire person" },
];

function MainPowerService({ onChange }) {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    onChange?.("mainPowerService", value);
  };

  return (
    <div className="w-full max-w-xs sm:w-48 md:w-60">
      <label className="block text-sm font-medium text-gray-700 ml-1 mb-1">
        Main Power Service
      </label>
      <div className="relative">
        <select
          value={selected}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-0.5 cursor-pointer text-gray-400 focus:outline-none shadow-sm"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default MainPowerService;

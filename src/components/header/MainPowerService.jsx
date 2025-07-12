import React from "react";
import Select from "react-select";

const options = [
  { value: "", label: "Select a mainpower service" },
  { value: "Hireperson", label: "Hire person" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    borderRadius: "0.375rem",
    borderColor: "#d1d5db",
    padding: "0.1rem 0.5rem",
    fontSize: "0.875rem",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#facc15",
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#fde047" : "#ffffff", // yellow-300
    color: "#000000",
    fontSize: "0.875rem",
  }),
};

function MainPowerService({ onChange }) {
  const handleChange = (selectedOption) => {
    onChange?.("mainPowerService", selectedOption.value);
  };

  return (
    <div className="w-full max-w-xs sm:w-48 md:w-52">
      <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">
        Main Power Service
      </label>
      <Select
        options={options}
        onChange={handleChange}
        styles={customStyles}
        defaultValue={options[0]}
      />
    </div>
  );
}

export default MainPowerService;

import React from "react";
import Select from "react-select";

const options = [
  { value: "", label: "Select a product service" },
  { value: "Cars", label: "Cars" },
  { value: "Cameras & Lenses", label: "Cameras & Lenses" },
  { value: "Computers & Laptops", label: "Computers & Laptops" },
  { value: "Mobile Phones", label: "Mobile Phones" },
  { value: "Motorcycles", label: "Motorcycles" },
  { value: "Tablets", label: "Tablets" },
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
    backgroundColor: state.isFocused ? "#fde047" : "#ffffff",
    color: "#000000",
    fontSize: "0.875rem",
  }),
};

function ProductService({ onChange }) {
  const handleChange = (selectedOption) => {
    onChange?.("productService", selectedOption.value);
  };

  return (
    <div className="w-full max-w-xs sm:w-48 md:w-52">
      <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">
        Product Service
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

export default ProductService;

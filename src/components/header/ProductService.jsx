import React from "react";

function ProductService({ onChange }) {
  const handleSelect = (event) => {
    const value = event.target.value;
    onChange?.("productService", value);
  };

  return (
    <div className="w-52">
      <label htmlFor="productService" className="block text-sm font-medium text-gray-700 mb-1">
        Product Service
      </label>
      <select
        id="productService"
        name="productService"
        onChange={handleSelect}
        className="w-full border rounded px-3 py-2 text-sm"
      >
        <option value="">Select a product service</option>
        <option value="Cars">Cars</option>
        <option value="Cameras & Lenses">Cameras & Lenses</option>
        <option value="Computers & Laptops">Computers & Laptops</option>
        <option value="Mobile Phones">Mobile Phones</option>
        <option value="Motorcycles">Motorcycles</option>
        <option value="Tablets">Tablets</option>
      </select>
    </div>
  );
}

export default ProductService;

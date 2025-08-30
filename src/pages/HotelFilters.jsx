// src/components/HotelFilters.jsx
import React, { useState } from "react";

const HotelFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    price: "",
    rating: "",
    location: "",
    amenities: [],
  });

  const handleChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters); // send filters back to parent
  };

  const handleAmenityChange = (amenity) => {
    let updatedAmenities = [...filters.amenities];
    if (updatedAmenities.includes(amenity)) {
      updatedAmenities = updatedAmenities.filter((a) => a !== amenity);
    } else {
      updatedAmenities.push(amenity);
    }
    handleChange("amenities", updatedAmenities);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white mb-6">
      <h3 className="font-bold mb-3">Filters</h3>

      {/* Price */}
      <div className="mb-3">
        <label className="block text-sm font-medium">Price Range</label>
        <select
          className="border p-2 w-full rounded"
          onChange={(e) => handleChange("price", e.target.value)}
        >
          <option value="">Any</option>
          <option value="0-1000">₹0 - ₹1000</option>
          <option value="1000-3000">₹1000 - ₹3000</option>
          <option value="3000-5000">₹3000 - ₹5000</option>
        </select>
      </div>

      {/* Rating */}
      <div className="mb-3">
        <label className="block text-sm font-medium">Rating</label>
        <select
          className="border p-2 w-full rounded"
          onChange={(e) => handleChange("rating", e.target.value)}
        >
          <option value="">Any</option>
          <option value="4">4★ & above</option>
          <option value="3">3★ & above</option>
        </select>
      </div>

      {/* Location */}
      <div className="mb-3">
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          className="border p-2 w-full rounded"
          placeholder="Enter location"
          onChange={(e) => handleChange("location", e.target.value)}
        />
      </div>

      {/* Amenities */}
      <div>
        <label className="block text-sm font-medium mb-2">Amenities</label>
        {["Parking", "Dining", "Wi-Fi", "AC"].map((amenity) => (
          <label key={amenity} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              onChange={() => handleAmenityChange(amenity)}
            />
            {amenity}
          </label>
        ))}
      </div>
    </div>
  );
};

export default HotelFilters;

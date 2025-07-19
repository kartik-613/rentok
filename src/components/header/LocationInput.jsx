// src/components/LocationInput.jsx
import React from "react";
import { FiMapPin } from "react-icons/fi";

const LocationInput = ({ location, setLocation, handleUseMyLocation }) => {
  return (
    <div className="flex items-center bg-white border border-gray-300 rounded px-4 py-2 w-60 shadow-sm hover:border-yellow-300">
      <FiMapPin className="text-red-600 mr-2" size={20} />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search city, area or locality"
        className="outline-none w-full bg-transparent"
      />
      <button
        onClick={handleUseMyLocation}
        title="Use My Location"
        className="ml-2 text-blue-600 font-semibold text-xs"
      >
        📍
      </button>
    </div>
  );
};

export default LocationInput;

import React from "react";

function RentalService({ onChange }) {
  const handleSelect = (event) => {
    const value = event.target.value;
    onChange?.("rentalService", value);
  };

  return (
    <div className="w-52">
      <label htmlFor="rentalService" className="block text-sm font-medium text-gray-700 mb-1">
        Rental Service
      </label>
      <select
        id="rentalService"
        name="rentalService"
        onChange={handleSelect}
        className="w-full border rounded px-3 py-2 text-sm"
      >
        <option value="">Select a rental service</option>
        <option value="Hotel">Hotel</option>
        <option value="Rooms">Rooms</option>
        <option value="Hotel Table">Hotel Table</option>
        <option value="Vehicle">Vehicle</option>
        <option value="Bike">Bike</option>
      </select>
    </div>
  );
}

export default RentalService;

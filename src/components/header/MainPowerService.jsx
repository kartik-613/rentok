import React from "react";

function MainPowerService({ onChange }) {
  const handleSelect = (event) => {
    const value = event.target.value;
    onChange?.("mainPowerService", value);
  };

  return (
    <div className="w-52">
      <label htmlFor="mainPowerService" className="block text-sm font-medium text-gray-700 mb-1">
        Main Power Service
      </label>
      <select
        id="mainPowerService"
        name="mainPowerService"
        onChange={handleSelect}
        className="w-full border rounded px-3 py-2 text-sm"
      >
        <option value="">Select a service</option>
        <option value="Hairperson">Hair person</option>
      </select>
    </div>
  );
}

export default MainPowerService;

import React, { useState, useRef, useEffect } from "react";

function CustomDropdown({ label, options, selectedValue, onChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === selectedValue) || options[0];

  const handleSelect = (option) => {
    onChange(option.value);
    setDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block font-medium mb-1">{label}</label>
      <button
        type="button"
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="w-full flex justify-between items-center bg-white border border-gray-300 text-gray-500 text-sm px-4 py-2 rounded outline-none shadow-sm hover:border-yellow-300"
      >
        <span>{selectedOption.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute left-0 mt-1 w-full bg-white rounded shadow-lg z-50 border border-gray-200">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option)}
              className={`text-left w-full text-sm px-4 py-2 hover:bg-yellow-100 ${
                selectedValue === option.value
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

function Hireperson() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, contact, duration, serviceType, description });
    alert("Hairperson service submitted!");

    setName("");
    setContact("");
    setDuration("");
    setServiceType("");
    setDescription("");
  };

  const durationOptions = [
    { value: "", label: "Choose duration" },
    { value: "1 hour", label: "1 hour" },
    { value: "1 day", label: "1 day" },
    { value: "1 week", label: "1 week" },
    { value: "1 month", label: "1 month" },
  ];

  const serviceOptions = [
    { value: "", label: "Select a service" },
    { value: "Haircut", label: "Haircut" },
    { value: "Shave", label: "Shave" },
    { value: "Beard Styling", label: "Beard Styling" },
    { value: "Other", label: "Other" },
  ];

  return (
    <div className="w-full h-auto min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-[900px] mx-auto mt-8 px-4 md:px-8 py-6 bg-white border border-gray-300 rounded-2xl shadow-sm">
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
            Book Your Hairperson Service
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
        >
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              required
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block font-medium mb-1">Contact Number</label>
            <input
              type="tel"
              value={contact}
              required
              pattern="[0-9]{10}"
              placeholder="Enter contact number"
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            />
          </div>

          {/* Custom Duration Dropdown */}
          <div>
            <CustomDropdown
              label="Select Duration"
              options={durationOptions}
              selectedValue={duration}
              onChange={setDuration}
            />
          </div>

          {/* Custom Service Type Dropdown */}
          <div>
            <CustomDropdown
              label="Service Type"
              options={serviceOptions}
              selectedValue={serviceType}
              onChange={setServiceType}
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Service Description</label>
            <textarea
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Describe the service you want..."
              className="w-full p-2 border border-gray-300 rounded outline-none resize-none hover:border-yellow-300"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-sm"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hireperson;

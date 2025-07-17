import React, { useState, useRef, useEffect } from "react";

// Shared CustomDropdown Component
function CustomDropdown({ label, options, selectedValue, onChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption =
    options.find((opt) => opt.value === selectedValue) || options[0];

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
        className="w-full flex justify-between items-center bg-white border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded outline-none shadow-sm hover:border-yellow-300"
      >
        <span>{selectedOption.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
        <div className="absolute left-0 mt-1 w-full bg-white rounded shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
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

// Main Component
export default function RegisterServices() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [aadhaarCard, setAadhaarCard] = useState(null);

  const [services, setServices] = useState([
    { type: "", duration: "", skills: "", charges: "" },
  ]);

  const serviceOptions = [
    { value: "", label: "Select Service" },
    { value: "Plowing", label: "Plowing" },
    { value: "Harvesting", label: "Harvesting" },
    { value: "Irrigation", label: "Irrigation" },
    { value: "Transport", label: "Transport" },
    { value: "Pest Control", label: "Pest Control" },
  ];

  const durationOptions = [
    { value: "", label: "Select Duration" },
    { value: "1 Hour", label: "1 Hour" },
    { value: "1 Day", label: "1 Day" },
    { value: "1 Week", label: "1 Week" },
    { value: "1 Month", label: "1 Month" },
  ];

  const skillsOptions = [
    { value: "", label: "Select Skill" },
    { value: "Tractor Driving", label: "Tractor Driving" },
    { value: "Combine Harvester", label: "Combine Harvester" },
    { value: "Spraying", label: "Spraying" },
    { value: "Mechanic", label: "Mechanic" },
    { value: "Pesticide Handling", label: "Pesticide Handling" },
  ];

  const chargesOptions = [
    { value: "", label: "Select Charges" },
    { value: "100", label: "₹100" },
    { value: "300", label: "₹300" },
    { value: "500", label: "₹500" },
    { value: "1000", label: "₹1000" },
    { value: "2000", label: "₹2000" },
  ];

  const addService = () => {
    setServices([...services, { type: "", duration: "", skills: "", charges: "" }]);
  };

  const handleServiceChange = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      mobile,
      address,
      dob,
      aadhaarCard,
      services,
    };

    console.log(formData);
    alert("✅ Registered successfully as Service Provider!");
    setSubmitted(true);

    // Reset
    setName("");
    setEmail("");
    setMobile("");
    setAddress("");
    setDob("");
    setAadhaarCard(null);
    setServices([{ type: "", duration: "", skills: "", charges: "" }]);

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full mt-6">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
      >
        {/* Personal Info */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            required
            pattern="[0-9]{10}"
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
            className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Address <span className="text-sm text-gray-500">(same as Aadhaar card)</span>
          </label>
          <textarea
            value={address}
            required
            rows="4"
            placeholder="Enter your full address"
            onChange={(e) => setAddress(e.target.value)}
            className="w-full h-10 p-2 border border-gray-300 rounded outline-none resize-none hover:border-yellow-300 shadow-sm"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            value={dob}
            required
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Aadhaar Card</label>
          <input
            type="file"
            required
            onChange={(e) => setAadhaarCard(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
          />
        </div>

        {/* Services Section */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-2">Your Services</label>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-200 p-4 rounded-lg"
              >
                <CustomDropdown
                  label="Service Type"
                  options={serviceOptions}
                  selectedValue={service.type}
                  onChange={(value) => handleServiceChange(index, "type", value)}
                />

                <CustomDropdown
                  label="Duration"
                  options={durationOptions}
                  selectedValue={service.duration}
                  onChange={(value) => handleServiceChange(index, "duration", value)}
                />

                <CustomDropdown
                  label="Skills"
                  options={skillsOptions}
                  selectedValue={service.skills}
                  onChange={(value) => handleServiceChange(index, "skills", value)}
                />

                <CustomDropdown
                  label="Charges"
                  options={chargesOptions}
                  selectedValue={service.charges}
                  onChange={(value) => handleServiceChange(index, "charges", value)}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addService}
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded shadow-sm"
          >
            + Add Service
          </button>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-sm mt-4"
          >
            Submit
          </button>
        </div>

        {submitted && (
          <div className="md:col-span-2 text-green-600 font-medium mt-2 text-center">
            ✅ Service Provider Registered Successfully!
          </div>
        )}
      </form>
    </div>
  );
}

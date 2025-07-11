import React, { useState } from "react";

function Hairperson() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      contact,
      duration,
      serviceType,
      description,
    });

    alert("Hairperson service submitted!");

    // Optional: Reset form
    setName("");
    setContact("");
    setDuration("");
    setServiceType("");
    setDescription("");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Hairperson Service Booking</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-5">

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            required
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Contact */}
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            required
            pattern="[0-9]{10}"
            placeholder="Enter contact number"
            onChange={(e) => setContact(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Select Duration</label>
          <select
            id="duration"
            value={duration}
            required
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose duration</option>
            <option value="1 hour">1 hour</option>
            <option value="1 day">1 day</option>
            <option value="1 week">1 week</option>
            <option value="1 month">1 month</option>
          </select>
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
          <select
            id="serviceType"
            value={serviceType}
            required
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a service</option>
            <option value="Haircut">Haircut</option>
            <option value="Shave">Shave</option>
            <option value="Beard Styling">Beard Styling</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Service Description</label>
          <textarea
            id="description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            placeholder="Describe the service you want..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Hairperson;

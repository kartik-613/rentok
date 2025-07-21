import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

// 🔹 Button
export const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl transition duration-200 ease-in-out hover:scale-[1.02] font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);

// 🔹 Input with optional icon
export const Input = ({ className = "", icon: Icon, ...props }) => (
  <div className={`relative w-full ${className}`}>
    {Icon && (
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <Icon size={18} />
      </span>
    )}
    <input
      className={`w-full pl-${Icon ? "10" : "3"} pr-4 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400`}
      {...props}
    />
  </div>
);

// 🔹 Card
export const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-2xl border bg-white shadow-sm cursor-pointer transition duration-200 hover:shadow-md hover:rounded-2xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

// 🔹 Card Content
export const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-5 ${className}`} {...props}>
    {children}
  </div>
);

// 🔹 Booking Modal Form
export const BookingFormModal = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted:", {
      serviceName: service.name,
      ...formData,
    });
    alert("Booking submitted!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Book Service: <span className="text-yellow-600">{service.name}</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="text"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            placeholder="Phone or Email"
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="Service Location"
            className="w-full border p-2 rounded-lg"
          />
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            placeholder="Additional Notes"
            rows="3"
          />
          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white"
          >
            Submit Booking
          </Button>
        </form>
      </div>
    </div>
  );
};

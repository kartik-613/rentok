// src/pages/EmployeeInfo.jsx
import React, { useState } from "react";
import { FiMessageCircle, FiArrowLeft, FiStar } from "react-icons/fi";
import { BookingFormModal } from "./BookingFormModal";
import ChatPopup from "./ChatPopup";
import detail from "../../assets/detail.png";
import { useNavigate } from "react-router-dom";

const EmployeeInfo = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const navigate = useNavigate();

  // Fake multiple employees
const employees = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    availability: "Available",
    time: "10 AM - 5 PM",
    rating: 4.5,
    image: detail,
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    availability: "Busy",
    time: "2 PM - 6 PM",
    rating: 3.8,
    image: detail,
  },
  {
    id: 3,
    name: "Michael Lee",
    gender: "Male",
    availability: "Available",
    time: "9 AM - 1 PM",
    rating: 5,
    image: detail,
  },
  {
    id: 4,
    name: "Emily Davis",
    gender: "Female",
    availability: "Available",
    time: "11 AM - 7 PM",
    rating: 4.2,
    image: detail,
  },
  {
    id: 5,
    name: "Chris Brown",
    gender: "Male",
    availability: "Busy",
    time: "1 PM - 5 PM",
    rating: 3.5,
    image: detail,
  },
  {
    id: 6,
    name: "Sophia Wilson",
    gender: "Female",
    availability: "Available",
    time: "8 AM - 4 PM",
    rating: 4.8,
    image: detail,
  },
  {
    id: 7,
    name: "David Miller",
    gender: "Male",
    availability: "Available",
    time: "10 AM - 6 PM",
    rating: 4.1,
    image: detail,
  },
  {
    id: 8,
    name: "Olivia Johnson",
    gender: "Female",
    availability: "Busy",
    time: "3 PM - 7 PM",
    rating: 3.9,
    image: detail,
  },
    {
    id: 9,
    name: "Olivia Johnson",
    gender: "Female",
    availability: "Busy",
    time: "3 PM - 7 PM",
    rating: 3.9,
    image: detail,
  },
];


  // Render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FiStar key={i} className="text-yellow-400 inline" />);
    }
    if (halfStar) {
      stars.push(<FiStar key="half" className="text-yellow-300 inline opacity-60" />);
    }
    return stars;
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-start pt-25 px-4 py-10">
      {/* Back Button */}
      <div className="w-full max-w-7xl flex items-center ">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
        >
          <FiArrowLeft /> Back
        </button>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
        Employee Details
      </h2>

      {/* Employees Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl max-w-7xl">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="flex flex-col items-center text-center bg-gray-50 shadow hover:shadow-lg transform hover:scale-105 transition duration-300 p-4 rounded-lg"
          >
            <img
              src={employee.image}
              alt={employee.name}
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{employee.name}</h2>
            <p className="text-gray-600">Gender: {employee.gender}</p>
            <p
              className={`mt-1 font-medium ${
                employee.availability === "Available"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {employee.availability}{" "}
              {employee.availability === "Available" && (
                <span className="text-gray-500 text-sm">
                  ({employee.time})
                </span>
              )}
            </p>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-1">
              {renderStars(employee.rating)}
              <span className="text-gray-600 text-sm ml-1">
                {employee.rating.toFixed(1)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-evenly w-full mt-4">
              <button
                className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 shadow-sm flex items-center gap-2"
                onClick={() => {
                  setSelectedEmployee(employee);
                  setIsChatOpen(true);
                }}
              >
                <FiMessageCircle /> Chat
              </button>
              <button
                className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 shadow-sm"
                onClick={() => {
                  setSelectedEmployee(employee);
                  setIsBookingOpen(true);
                }}
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {isBookingOpen && selectedEmployee && (
        <BookingFormModal
          service={{ name: selectedEmployee.name }}
          onClose={() => setIsBookingOpen(false)}
        />
      )}

      {/* Chat Popup */}
      {isChatOpen && selectedEmployee && (
        <ChatPopup
          employee={selectedEmployee}
          onClose={() => setIsChatOpen(false)}
        />
      )}
    </div>
  );
};

export default EmployeeInfo;

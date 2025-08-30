import React, { useState } from "react";
import Button from "../../components/Button"


export const BookingFormModal = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    date: "",
    time: "",
    location: "",
    notes: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = () => {
    if (!formData.email) {
      alert("Please enter your email first!");
      return;
    }
    // Simulate sending OTP (you can integrate email API later)
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setOtp(generatedOtp);
    setOtpSent(true);
    alert(`OTP sent: ${generatedOtp}`); // In real app, don't alert, send via email
  };

  const handleVerifyOtp = () => {
    if (enteredOtp === otp) {
      handleSubmit(); // proceed to submit booking
    } else {
      alert("Invalid OTP! Please try again.");
    }
  };

  const handleSubmit = () => {
    console.log("Booking Submitted:", {
      serviceName: service.name,
      ...formData,
    });
    alert("Booking submitted!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center px-4">
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

        {!otpSent ? (
          <form className="space-y-4">
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
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              placeholder="Phone Number"
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
              type="button"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white"
              onClick={handleSendOtp}
            >
              Send OTP
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-700">
              Enter the OTP sent to <span className="font-medium">{formData.email}</span>
            </p>
            <input
              type="text"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full border p-2 rounded-lg"
            />
            <Button
              type="button"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white"
              onClick={handleVerifyOtp}
            >
              Verify OTP & Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default BookingFormModal;
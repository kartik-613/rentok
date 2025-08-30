// src/pages/LinkPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LinkPage = () => {
  const [status, setStatus] = useState(null); 
  const [showReason, setShowReason] = useState(false);
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const handleConfirm = () => {
    setStatus("confirmed");
    setShowReason(false);
  };

  const handleReject = () => {
    setShowReason(true);
    setStatus(null);
  };

  const handleSubmitReason = () => {
    if (!reason.trim()) {
      alert("Please enter a reason before submitting.");
      return;
    }
    setStatus("rejected");
    alert(`Booking Rejected ❌\nReason: ${reason}`);
    setReason("");
    setShowReason(false);
  };

  const handleBack = () => {
    navigate(-1); // go to previous page
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="bg-gray-50 shadow-md rounded-2xl w-full max-w-lg p-6">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-4 text-black font-semibold cursor-pointer "
        >
          &larr; Back
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Booking Details
        </h2>

        {/* Booking Info */}
        <div className="space-y-2 text-gray-700 mb-6">
          <p>
            <span className="font-semibold">Name:</span> John Doe
          </p>
          <p>
            <span className="font-semibold">Date:</span> 2nd Sept, 2025
          </p>
          <p>
            <span className="font-semibold">Service:</span> Car Rental
          </p>
        </div>

        {/* Buttons */}
        {!showReason && (
          <div className="flex justify-evenly">
            <button
              onClick={handleConfirm}
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 shadow-sm"
            >
              Confirm
            </button>
            <button
              onClick={handleReject}
              className="bg-yellow-400 text-white font-semibold px-8 py-2 rounded-md hover:bg-yellow-500 shadow-sm"
            >
              Reject
            </button>
          </div>
        )}

        {/* Reject Reason */}
        {showReason && (
          <div className="mt-4">
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason for rejection..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-1 focus:ring-yellow-400 outline-none"
              rows={3}
            />
            <button
              onClick={handleSubmitReason}
              className="mt-3 w-full bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 shadow-sm"
            >
              OK
            </button>
          </div>
        )}

        {/* Status */}
        {status && (
          <div className="mt-6 text-center">
            <p className="font-semibold text-gray-800">
              Current Status:{" "}
              <span
                className={
                  status === "confirmed" ? "text-green-600" : "text-yellow-400"
                }
              >
                {status.toUpperCase()}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkPage;

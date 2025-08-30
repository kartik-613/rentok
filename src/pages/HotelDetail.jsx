// src/pages/HotelDetail.jsx
import React from "react";
import { FiMapPin } from "react-icons/fi";

const HotelDetail = () => {
  return (
    <div className="min-h-screen bg-white pt-20 py-10">
      {/* 🔹 Top Section with Image + Info */}
      <div className="max-w-6xl mx-auto border rounded-lg overflow-hidden shadow">
        {/* Hotel Banner Image */}
        <img
          src="https://images.oyoroomscdn.com/uploads/hotel_image/123/medium/hotel-room.jpg"
          alt="hotel"
          className="w-full h-72 object-cover"
        />

        {/* Hotel Info */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            Super Townhouse Hoshangabad Road Near Aashima Mall
          </h2>
          <p className="text-gray-600 flex items-center gap-2 mb-3">
            <FiMapPin className="text-red-500" /> Hoshangabad Road, Bhopal
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm">
              4.4 ★
            </span>
            <span className="text-gray-600 text-sm">
              (976 Ratings) - Very Good
            </span>
          </div>

          {/* Amenities */}
          <h3 className="font-semibold text-lg mt-4 mb-2">Amenities</h3>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-6">
            <span>🚗 Parking facility</span>
            <span>🍽 Dining area</span>
            <span>🛎 Reception</span>
            <span>📶 Free Wi-Fi</span>
            <span>❄ AC Rooms</span>
            <span>+ 21 more</span>
          </div>

          {/* Price & CTA */}
          <div className="flex justify-between items-center border-t pt-4">
            <div>
              <span className="text-2xl font-bold">₹814</span>{" "}
              <span className="line-through text-gray-400">₹3464</span>{" "}
              <span className="text-green-600 font-medium">72% off</span>
              <p className="text-gray-500 text-sm">
                + ₹147 taxes & fees · per room per night
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border px-4 py-2 rounded-lg">Share</button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Similar Hotels */}
      <div className="max-w-6xl mx-auto mt-10">
        <h3 className="font-bold text-lg mb-4">Similar Hotels</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src="https://images.oyoroomscdn.com/uploads/hotel_image/123/medium/hotel-room.jpg"
                alt="hotel"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-md mb-1">
                  OYO Premium Stay {i}
                </h4>
                <p className="text-gray-500 text-sm mb-2">Bhopal</p>
                <span className="text-lg font-bold">₹999</span>{" "}
                <span className="text-green-600 text-sm">60% off</span>
                <button className="block mt-3 w-full border px-3 py-2 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;

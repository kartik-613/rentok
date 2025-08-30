// src/pages/Hotels.jsx
import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";

const Hotels = () => {
  // 🔹 Sample hotel data
    const navigate = useNavigate();

const hotelsData = [
  {
    id: 1,
    name: "Super Townhouse Hoshangabad Road Near Aashima Mall",
    location: "Hoshangabad Road, Bhopal",
    rating: 4.4,
    reviews: 976,
    facilities: ["Parking facility", "Dining area", "Reception"],
    price: 814,
    oldPrice: 3464,
    discount: "72% off",
    image: hotel1,
  },
  {
    id: 2,
    name: "Premium Stay at MP Nagar",
    location: "MP Nagar, Bhopal",
    rating: 4.2,
    reviews: 642,
    facilities: ["Free WiFi", "AC Rooms", "Power Backup"],
    price: 999,
    oldPrice: 2800,
    discount: "65% off",
    image: hotel2,
  },
  {
    id: 3,
    name: "Luxury Inn at New Market",
    location: "New Market, Bhopal",
    rating: 4.6,
    reviews: 1203,
    facilities: ["Swimming Pool", "Gym", "Restaurant"],
    price: 1450,
    oldPrice: 4100,
    discount: "64% off",
    image: hotel3,
  },
  {
    id: 4,
    name: "Comfort Stay at Habibganj",
    location: "Habibganj, Bhopal",
    rating: 4.1,
    reviews: 834,
    facilities: ["Parking", "24x7 Room Service", "CCTV Security"],
    price: 750,
    oldPrice: 2200,
    discount: "66% off",
    image: hotel4,
  },
  {
    id: 5,
    name: "Elite Residency Near Van Vihar",
    location: "Van Vihar Road, Bhopal",
    rating: 4.7,
    reviews: 1506,
    facilities: ["Lake View Rooms", "Dining Area", "Banquet Hall"],
    price: 1899,
    oldPrice: 5200,
    discount: "63% off",
    image: hotel1,
  },
];


  const [hotels, setHotels] = useState(hotelsData);
  const [sortOption, setSortOption] = useState("popularity");

  // 🔹 Sorting logic
  const handleSort = (option) => {
    setSortOption(option);
    let sorted = [...hotels];
    if (option === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted = hotelsData; // default
    }
    setHotels(sorted);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 🔹 Top Search Bar */}
      <div className="border-b py-4 px-6 flex flex-wrap items-center gap-4 shadow-sm">
        <input
          type="text"
          defaultValue="Bhopal, Madhya Pradesh, India"
          className="border px-4 py-2 rounded-lg flex-1 min-w-[200px] text-sm"
        />
        <button className="border px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:border-yellow-300">
          <FiMapPin /> Near me
        </button>
        <input type="date" className="border px-4 py-2 rounded-lg text-sm" />
        <input type="date" className="border px-4 py-2 rounded-lg text-sm" />
        <select className="border px-4 py-2 rounded-lg text-sm">
          <option>1 Room, 1 Guest</option>
          <option>2 Rooms, 2 Guests</option>
        </select>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg shadow-sm hover:bg-yellow-500 text-sm">
          Search
        </button>
      </div>

      <div className="flex">
        {/* 🔹 Left Filters */}
        <aside className="w-1/4 border-r p-6 hidden md:block">
          <h2 className="font-semibold text-lg mb-4">Filters</h2>
          <p className="text-gray-500 text-sm mb-2">
            Popular locations in Bhopal, Madhya Pradesh, India
          </p>
          <div className="space-y-2">
            {[
              "Mp Nagar",
              "Bhopal Junction Railway Station",
              "Kolar Road",
              "Ayodhya Bypass Road",
              "Lalghati",
            ].map((loc, i) => (
              <button
                key={i}
                className="block w-full text-left border px-3 py-2 rounded-lg hover:border-yellow-300 text-sm"
              >
                {loc}
              </button>
            ))}
            <button className="text-yellow-600 text-sm font-semibold hover:underline">
              + View More
            </button>
          </div>
        </aside>

        {/* 🔹 Right Hotel Listings */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              {hotels.length} OYOs in Bhopal, Madhya Pradesh, India
            </h2>
            <select
              className="border px-3 py-2 rounded-lg text-sm"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="popularity">Sort By: Popularity</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          {/* 🔹 Hotel Cards */}
          <div className="space-y-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="border rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <img
                  src={hotel.image}
                  alt="hotel"
                  className="w-full md:w-1/3 object-cover"
                />
                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{hotel.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{hotel.location}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                        {hotel.rating} ★
                      </span>
                      <span className="text-gray-600 text-sm">
                        ({hotel.reviews} Ratings)
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      {hotel.facilities.map((f, i) => (
                        <span key={i}>✔ {f}</span>
                      ))}
                      <span className="text-gray-500">+ more</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-lg font-bold">₹{hotel.price}</span>{" "}
                      <span className="line-through text-gray-400">
                        ₹{hotel.oldPrice}
                      </span>{" "}
                      <span className="text-green-600 font-medium">
                        {hotel.discount}
                      </span>
                      <p className="text-gray-500 text-sm">
                        + taxes & fees · per room per night
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button className="border px-4 py-2 rounded-lg text-sm font-semibold hover:border-yellow-300" onClick={() => navigate(`/hotels/${hotel.id}`)}>
                        
                        View Details
                      </button>
                      <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-yellow-500 text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hotels;

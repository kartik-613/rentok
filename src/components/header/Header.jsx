// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/newlogo.png";
import { FiSearch } from "react-icons/fi";
import LanguageSelector from "./LanguageSelector";
import LocationInput from "./LocationInput"; // NEW

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState(localStorage.getItem("userLocation") || "");
  const [language, setLanguage] = useState(localStorage.getItem("appLanguage") || "ENGLISH");

  useEffect(() => {
    localStorage.setItem("userLocation", location);
  }, [location]);

  useEffect(() => {
    localStorage.setItem("appLanguage", language);
  }, [language]);

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state ||
            data.display_name;
          setLocation(city);
        } catch (error) {
          console.error("Location fetch error:", error);
          alert("Unable to retrieve location name.");
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <header className="w-full fixed z-20 bg-white shadow-sm py-2 px-4 md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="flex items-center cursor-pointer">
          <img src={image} alt="RentOK Logo" className="h-12 md:h-16 object-contain" />
        </div>

        {/* Desktop Search & Location */}
        <div className="hidden lg:flex flex-col space-x-3 flex-1 px-4 md:px-16">
          <div className="flex justify-between items-center gap-3">
            {/* Location Component */}
            <LocationInput
              location={location}
              setLocation={setLocation}
              handleUseMyLocation={handleUseMyLocation}
            />

            {/* Search Bar */}
            <div className="flex items-center bg-white border border-gray-300 rounded flex-1 px-4 py-2 shadow-sm hover:border-yellow-300">
              <FiSearch className="text-gray-600 mr-2" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find Cars, Mobile Phones and more..."
                className="outline-none w-full bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={() => navigate("/login")}
            className="text-black font-semibold hover:underline"
          >
            Login
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/register");
            }}
            className="border border-gray-300 rounded px-4 py-2 font-semibold hover:border-yellow-300 shadow-sm"
          >
            Register
          </button>

          {/* Language Selector */}
          <LanguageSelector language={language} setLanguage={setLanguage} />

          <button
            onClick={() => navigate("/sell")}
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded shadow-sm hover:bg-yellow-500"
          >
            + Sell
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 p-4">
          <LocationInput
            location={location}
            setLocation={setLocation}
            handleUseMyLocation={handleUseMyLocation}
          />
          <input
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 text-sm"
          />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 text-sm"
          >
            <option value="ENGLISH">English</option>
            <option value="HINDI">Hindi</option>
          </select>
          <div className="flex flex-col gap-2 mt-2">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
              className="text-black font-medium hover:underline text-sm text-left"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/register");
              }}
              className="border border-gray-300 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-50 text-sm text-left"
            >
              Register
            </button>
            <button
              onClick={() => navigate("/sell")}
              className="bg-yellow-300 text-black font-semibold px-4 py-2.5 rounded hover:bg-yellow-400 text-sm text-left"
            >
              + Sell
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

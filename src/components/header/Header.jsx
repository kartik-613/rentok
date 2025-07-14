import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/image1.png";
import { FiSearch, FiMapPin, FiChevronDown } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("ENGLISH");


  return (
    <header className="w-full fixed z-10 bg-white shadow-sm py-2 px-4 md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={image}
            alt="RentOK Logo"
            className="h-12 md:h-16 object-contain"
          />
        </div>

        {/* Location + Searchbar (like OLX) */}
        <div className="hidden lg:flex flex-col space-x-3 flex-1 px-4 md:px-16">  {/* max-w-4xl mx-6 */}
          <div className=" flex justify-between items-center gap-3 "> {/* max-w-4xl mx-6 */}
            {/* Location Bar */}
            <div className="flex items-center bg-white border border-gray-300 rounded px-4 py-2 w-60 shadow-sm">
              <FiMapPin className="text-red-600 mr-2 " size={20} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search city, area or locality"
                className="outline-none w-full bg-transparent"
              />
              <FiChevronDown className="text-gray-600 ml-2" size={20} />
            </div>
            {/* Search Bar */}
            <div className="flex items-center bg-white border border-gray-300 rounded flex-1 px-4 py-2 shadow-sm">
              <FiSearch className="text-gray-600 mr-2" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find Cars, Mobile Phones and more..."
                className="outline-none w-full  bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <button className="text-black font-semibold hover:underline cursor-pointer ">
            Login
          </button>
          <button className="border border-gray-300 rounded  px-4 py-2 cursor-pointer font-semibold hover:bg-yellow-50 shadow-sm">
            Register
          </button>
          {/* Language Selector */}
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className=" border border-gray-300 rounded px-4 py-2 cursor-pointer font-semibold focus:outline-none shadow-sm"
            >
              <option value="ENGLISH">English</option>
              <option value="HINDI">Hindi</option>
            </select>
          </div>
          <button className="bg-yellow-500 text-black font-semibold px-4 py-2  rounded cursor-pointer shadow-sm">
            + Sell
          </button>
        </div>

        {/* Hamburger Icon (mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 p-4">
          <input
            type="text"
            placeholder="Search city, area or locality"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 text-sm"
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
            <button className="text-black font-medium hover:underline text-sm text-left">
              Login
            </button>
            <button className="border border-gray-300 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-50 text-sm text-left">
              Register
            </button>
            <button className="bg-yellow-300 text-black font-semibold px-4 py-2.5 rounded hover:bg-yellow-400 text-sm text-left">
              + Sell
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

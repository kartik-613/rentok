import React from "react";
import { Menu, X } from "lucide-react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import MainPowerService from "./MainPowerService";
import ProductService from "./ProductService";
import RentalService from "./RentalService";
import image from "../../assets/image1.png";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMainServiceChange = (type, value) => {
    if (type === "mainPowerService" && value) {
      navigate(`/${value.toLowerCase()}`);
    }
  };

  return (
    <header className="w-full bg-white px-4 md:px-8 shadow">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={image} alt="RentOK Logo" className="h-16 object-contain" />
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <MainPowerService onChange={handleMainServiceChange} />
          <ProductService onChange={(type, value) => console.log(type, value)} />
          <RentalService onChange={(type, value) => console.log(type, value)} />
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-black font-medium hover:underline text-sm">Login</button>
          <button className="border border-black text-black px-4 py-2 rounded font-semibold hover:bg-yellow-50 text-sm">
            Register
          </button>
          <button className="bg-yellow-300 text-black font-semibold px-4 py-2.5 rounded hover:bg-yellow-400 text-sm">
            + Sell
          </button>
        </div>
      </div>

      {/* Mobile Dropdowns */}
      {menuOpen && (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4">
          <MainPowerService onChange={handleMainServiceChange} />
          <ProductService onChange={(type, value) => console.log(type, value)} />
          <RentalService onChange={(type, value) => console.log(type, value)} />
          <div className="flex flex-col gap-2 mt-2">
            <button className="text-black font-medium hover:underline text-sm text-left">Login</button>
            <button className="border border-black text-black px-4 py-2 rounded font-semibold hover:bg-yellow-50 text-sm text-left">
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
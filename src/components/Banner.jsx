import React, { useEffect, useState } from "react";
import rentok from "../assets/rentok.png";
import rentok2 from "../assets/rentok.png";
import rentok3 from "../assets/rentok.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import banners from "../data/bannerData";



const RentokBanner = () => {
  const [index, setIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (i) => setIndex(i);
  const current = banners[index];

  return (
    <div className="w-full relative bg-white overflow-hidden rounded-lg pb-1 my-2 ">
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-in-out;
        }
      `}</style>

      <section
        key={index}
        className={`relative bg-gradient-to-r ${current.bg} rounded-lg overflow-hidden  px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-6 mb-1 animate-slide-in-right`}
      >
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-center md:text-left  space-y-5">
          <h2 className="text-lg sm:text-xl md:text-2xl text-black font-bold tracking-wider bg-white/70 px-4 py-1 inline-block rounded shadow-md hover:scale-105 transition duration-300">
            {current.title}
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            <span className="text-white">{current.heading.split(",")[0]},</span>{" "}
            {current.heading.split(",")[1]}
          </h1>
          <p className="text-gray-800 text-base sm:text-lg lg:text-xl max-w-lg mx-auto md:mx-0">
            {current.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-3">
            <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 transition duration-200">
              {current.buttonText}
            </button>
            <span className="bg-white text-yellow-700 font-semibold px-4 py-2 rounded shadow-md text-sm">
              {current.badge}
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start space-x-4 pt-4 text-white text-xl">
            <a href="#">
              <FaFacebookF className="hover:text-black transition" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-black transition" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-black transition" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={current.image}
            alt="Rentok Banner"
            className="max-h-72 sm:max-h-80 md:max-h-96 object-contain"
          />
        </div>
      </section>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-1.5 h-1.5 rounded-full transition duration-300 ${
              i === index ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default RentokBanner;

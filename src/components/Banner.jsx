import React from "react";
import rentok from "../assets/rentok.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const RentokBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-300 rounded-lg overflow-hidden shadow-lg px-6 py-10 sm:px-10 md:px-12 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
      {/* Left Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
        <h2 className="text-lg sm:text-xl md:text-2xl text-black  font-bold tracking-wider bg-white/70 px-4 py-1 inline-block rounded shadow-md hover:scale-105 transition duration-300">
          Welcome to RentOk
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          <span className="text-white">Rent Smart,</span> Save Big!
        </h1>
        <p className="text-gray-800 text-base sm:text-lg lg:text-xl max-w-lg mx-auto md:mx-0">
          Rent electronics, furniture, bikes, and more at the best prices —
          anytime, anywhere.
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-3">
          <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 transition duration-200">
            Rent Now
          </button>
          <span className="bg-white text-yellow-700 font-semibold px-4 py-2 rounded shadow-md text-sm">
            Up to 50% OFF
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
          src={rentok}
          alt="Rentok Banner Woman"
          className="max-h-72 sm:max-h-80 md:max-h-96 object-contain"
        />
      </div>
    </section>
  );
};

export default RentokBanner;

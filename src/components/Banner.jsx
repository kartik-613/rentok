import React from "react";
// import image from "../assets/red-white-banner-rent.jpg"; // Replace with your image path

const Banner = () => {
  return (
    <section className="relative bg-gray-100 h-64 flex items-center justify-center text-center overflow-hidden rounded-md shadow">
      <img
        // src={image}
        alt="Rentok Banner"
        className="absolute inset-0 bg-black w-full h-full object-cover opacity-80"
      />
      <div className="relative z-10 text-white px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Rentok</h1>
        <p className="text-lg md:text-xl">Rent anything, anywhere – hassle free</p>
      </div>
    </section>
  );
};

export default Banner;

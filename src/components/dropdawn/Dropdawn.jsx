import React from "react";
import MainPowerService from "./MainPowerService";
import ProductService from "./ProductService";
import RentalService from "./RentalService";

const Dropdawn = () => {
  return (
    <div className="w-full flex items-center justify-center bg-white pt-4 pb-6 px-4 rounded-lg">
      <div className="w-full md:w-5/6 lg:w-2/3 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
        <MainPowerService />
        <ProductService onChange={(type, value) => console.log(type, value)} />
        <RentalService onChange={(type, value) => console.log(type, value)} />
      </div>
    </div>
  );
};

export default Dropdawn;

import React from "react";
import MainPowerService from "./MainPowerService";
import ProductService from "./ProductService";
import RentalService from "./RentalService";

const Dropdawn = () => {
  return (
    <div className="w-full flex items-center justify-center bg-white pt-2 pb-6 rounded-lg">
      <div className=" w-2/3 flex flex-wrap items-center gap-3 justify-between pr-3">
        <MainPowerService  />
        <ProductService onChange={(type, value) => console.log(type, value)} />
        <RentalService onChange={(type, value) => console.log(type, value)} />
      </div>
    </div>
  );
};

export default Dropdawn;



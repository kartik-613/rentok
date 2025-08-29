import React, { useState } from "react";
import ManPowerService from "./ManPowerService";
import ProductService from "./ProductService";
import RentalService from "./RentalService";

const Dropdawn = () => {
  const [userType, setUserType] = useState("");

  return (
    <div className="w-full flex items-center justify-center bg-white py-4 px-2 rounded-lg">
      <div className="w-full flex justify-center items-center flex-col">
        
        {/* ---------- Mobile View (Radio + Dropdown) ---------- */}
        <div className="block md:hidden w-full">
          {/* Radio Buttons */}
          <div className="flex gap-4 justify-center sm:justify-center">
            {["ManPowerService", "ProductService", "RentalService"].map((type) => (
              <label
                key={type}
                className="flex items-center font-medium capitalize cursor-pointer"
              >
                <input
                  type="radio"
                  value={type}
                  checked={userType === type}
                  onChange={(e) => setUserType(e.target.value)}
                  className="mr-2 accent-yellow-400"
                />
                {type.replace("Service", " Service")}
              </label>
            ))}
          </div>

          {/* Conditionally render dropdown */}
          <div className="pt-2">
            {userType === "ManPowerService" && <ManPowerService />}
            {userType === "ProductService" && (
              <ProductService onChange={(type, value) => console.log(type, value)} />
            )}
            {userType === "RentalService" && (
              <RentalService onChange={(type, value) => console.log(type, value)} />
            )}
          </div>
        </div>

        {/* ---------- Laptop/Desktop View (Simple Dropdowns) ---------- */}
        <div className="hidden md:flex w-full md:w-5/6 lg:w-2/3 flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
          <ManPowerService />
          <ProductService onChange={(type, value) => console.log(type, value)} />
          <RentalService onChange={(type, value) => console.log(type, value)} />
        </div>
      </div>
    </div>
  );
};

export default Dropdawn;














// import React from "react";
// import ManPowerService from "./ManPowerService";
// import ProductService from "./ProductService";
// import RentalService from "./RentalService";

// const Dropdawn = () => {
//   return (
//     <div className="w-full flex items-center justify-center bg-white pt-2 pb-4 px-4 rounded-lg">
//       <div className="w-full md:w-5/6 lg:w-2/3 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
//         <ManPowerService />
//         <ProductService onChange={(type, value) => console.log(type, value)} />
//         <RentalService onChange={(type, value) => console.log(type, value)} />
//       </div>
//     </div>
//   );
// };

// export default Dropdawn;


//           {["ManPowerService", "ProductService", "RentalService"].map((type) => (
//             <label key={type} className="flex items-center font-medium capitalize"> 
//               <input
//                 type="radio"
//                 value={type}
//                 checked={userType === type}
//                 onChange={(e) => setUserType(e.target.value)}
//                 className="mr-2 accent-yellow-400 "
//               />
//               {type}
//             </label>
//           ))}



// import React from "react";
// import CustomDropdown from "./CustomDropdown";

// const productOptions = [
//   { value: "", label: "Select a product service" },
//   { value: "Cars", label: "Cars" },
//   { value: "Cameras & Lenses", label: "Cameras & Lenses" },
//   { value: "Computers & Laptops", label: "Computers & Laptops" },
//   { value: "Mobile Phones", label: "Mobile Phones" },
//   { value: "Motorcycles", label: "Motorcycles" },
//   { value: "Tablets", label: "Tablets" },
// ];

// const rentalOptions = [
//   { value: "", label: "Select a rental service" },
//   { value: "Rooms", label: "Rooms" },
//   { value: "Offices", label: "Offices" },
//   { value: "Furniture", label: "Furniture" },
// ];

// const mainPower = [
//   { value: "", label: "Select a main-power service" },
//   { value: "Hireperson", label: "Hire person" },
// ];

// const Dropdown = () => {
//   const handleChange = (type, value) => {
//     console.log("Selected:", type, value);
//   };

//   return (
//     <div className="w-full flex items-center justify-center bg-white pt-2 pb-4 px-4 rounded-lg">
//       <div className="w-full md:w-5/6 lg:w-2/3 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
//         <CustomDropdown
//           id="mainPower"
//           label="Main Power Service"
//           options={mainPower}
//           onChange={handleChange}
//         />
//         <CustomDropdown
//           id="productService"
//           label="Product Service"
//           options={productOptions}
//           onChange={handleChange}
//         />
//         <CustomDropdown
//           id="rentalService"
//           label="Rental Service"
//           options={rentalOptions}
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

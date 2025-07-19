import React from "react";
import MainPowerService from "./MainPowerService";
import ProductService from "./ProductService";
import RentalService from "./RentalService";

const Dropdawn = () => {
  return (
    <div className="w-full flex items-center justify-center bg-white pt-2 pb-4 px-4 rounded-lg">
      <div className="w-full md:w-5/6 lg:w-2/3 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
        <MainPowerService />
        <ProductService onChange={(type, value) => console.log(type, value)} />
        <RentalService onChange={(type, value) => console.log(type, value)} />
      </div>
    </div>
  );
};

export default Dropdawn;


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

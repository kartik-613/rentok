// import React from "react";
// import MainPowerService from "./MainPowerService";
// import ProductService from "./ProductService";
// import RentalService from "./RentalService";
// import image from "../../assets/image.png";

// const Header = () => {
//   return (
//     <header className="bg-white shadow pr-10 flex flex-wrap items-center justify-between gap-4">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <img src={image} alt="OLX Logo" className="h-24" />
//       </div>

//       {/* Location Input */}
//       {/* <div className="flex items-center border rounded px-2 py-1 w-64">
//         <span className="text-gray-500 mr-2">📍</span>
//         <input
//           type="text"
//           placeholder="Search city, area or locality"
//           className="outline-none w-full text-sm"
//         />
//       </div> */}

//       {/* Services */}
//       <MainPowerService
//         onChange={(type, value) => {
//           console.log(type, value);
//           if (key === "mainPowerService") {
// if (key === "mainPowerService" && value) {
//   history.push(`/${value.toLowerCase()}`);
// }

//           }
//         }}
//       />
//       <ProductService onChange={(type, value) => console.log(type, value)} />
//       <RentalService onChange={(type, value) => console.log(type, value)} />

//       {/* Search Bar */}
//       {/* <div className="flex items-center border rounded px-2 py-1 w-96">
//         <input
//           type="text"
//           placeholder="Find Cars, Mobile Phones and more..."
//           className="outline-none w-full text-sm"
//         />
//         <button className="text-white bg-blue-500 px-3 py-1 rounded ml-2 hover:bg-blue-600 text-sm">
//           Search
//         </button>
//       </div> */}

//       {/* Auth & Sell */}
//       <div className="flex items-center space-x-4">
//         <button className="text-blue-500 font-semibold hover:underline text-sm">
//           Login
//         </button>
//         <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 text-sm">
//           Register
//         </button>
//         <button className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-500 text-sm">
//           + Sell
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Use navigate in v6
import MainPowerService from "./MainPowerService";
import ProductService from "./ProductService";
import RentalService from "./RentalService";
import image from "../../assets/image.png";

const Header = () => {
  const navigate = useNavigate(); // ✅ Initialize router navigation

  const handleMainServiceChange = (type, value) => {
    console.log(type, value);
    if (type === "mainPowerService" && value) {
      navigate(`/${value.toLowerCase()}`); // ✅ Navigate to dynamic route
    }
  };

  return (
    <header className="bg-white shadow pr-10 flex flex-wrap items-center justify-between gap-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={image} alt="OLX Logo" className="h-24" />
      </div>

      {/* Services */}
      <MainPowerService onChange={handleMainServiceChange} />
      <ProductService onChange={(type, value) => console.log(type, value)} />
      <RentalService onChange={(type, value) => console.log(type, value)} />

      {/* Auth & Sell */}
      <div className="flex items-center space-x-4">
        <button className="text-blue-500 font-semibold hover:underline text-sm">
          Login
        </button>
        <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 text-sm">
          Register
        </button>
        <button className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-500 text-sm">
          + Sell
        </button>
      </div>
    </header>
  );
};

export default Header;


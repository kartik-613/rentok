// import React, { useState, useRef, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import image from "../../assets/newlogo.png";
// import { FiSearch, FiMapPin, FiChevronDown } from "react-icons/fi";

// const Header = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [location, setLocation] = useState("");
//   const [language, setLanguage] = useState("ENGLISH");

//   const [langDropdownOpen, setLangDropdownOpen] = useState(false);
//   const langDropdownRef = useRef(null);

//   const languageOptions = [
//     { value: "ENGLISH", label: "English" },
//     { value: "HINDI", label: "Hindi" },
//   ];

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         langDropdownRef.current &&
//         !langDropdownRef.current.contains(event.target)
//       ) {
//         setLangDropdownOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="w-full fixed z-20 bg-white shadow-sm py-2 px-4 md:px-8">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <div
//           onClick={() => {
//             navigate("/");
//           }}
//           className="flex items-center cursor-pointer"
//         >
//           <img
//             src={image}
//             alt="RentOK Logo"
//             className="h-12 md:h-16 object-contain"
//           />
//         </div>

//         {/* Location + Searchbar */}
//         <div className="hidden lg:flex flex-col space-x-3 flex-1 px-4 md:px-16">
//           <div className="flex justify-between items-center gap-3">
//             {/* Location Bar */}
//             <div className="flex items-center bg-white border border-gray-300 rounded px-4 py-2 w-60 shadow-sm hover:border-yellow-300">
//               <FiMapPin className="text-red-600 mr-2" size={20} />
//               <input
//                 type="text"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 placeholder="Search city, area or locality"
//                 className="outline-none w-full bg-transparent"
//               />
//               <FiChevronDown className="text-gray-600 ml-2" size={20} />
//             </div>

//             {/* Search Bar */}
//             <div className="flex items-center bg-white border border-gray-300 rounded flex-1 px-4 py-2 shadow-sm hover:border-yellow-300">
//               <FiSearch className="text-gray-600 mr-2" size={20} />
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Find Cars, Mobile Phones and more..."
//                 className="outline-none w-full bg-transparent"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Actions */}
//         <div className="hidden lg:flex items-center space-x-3">
//           <button
//             onClick={() => navigate("/login")}
//             className="text-black font-semibold hover:underline cursor-pointer"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => {
//               setMenuOpen(false);
//               navigate("/register");
//             }}
//             className="border border-gray-300 rounded px-4 py-2 cursor-pointer font-semibold hover:border-yellow-300 shadow-sm"
//           >
//             Register
//           </button>

//           {/* Custom Language Dropdown */}
//           <div
//             ref={langDropdownRef}
//             className="relative"
//             style={{ width: "120px" }}
//           >
//             <button
//               type="button"
//               onClick={() => setLangDropdownOpen((prev) => !prev)}
//               className="border border-gray-300 rounded px-4 py-2 cursor-pointer font-semibold hover:border-yellow-300 shadow-sm w-full flex justify-between items-center"
//             >
//               <span>
//                 {languageOptions.find((opt) => opt.value === language)?.label}
//               </span>
//               <FiChevronDown
//                 className={`ml-2 transition-transform ${
//                   langDropdownOpen ? "rotate-180" : ""
//                 }`}
//                 size={20}
//               />
//             </button>

//             {langDropdownOpen && (
//               <div className="absolute left-0 mt-1 w-full bg-white rounded shadow-lg z-50 border border-gray-200">
//                 {languageOptions.map((option) => (
//                   <button
//                     key={option.value}
//                     type="button"
//                     onClick={() => {
//                       setLanguage(option.value);
//                       setLangDropdownOpen(false);
//                     }}
//                     className={`text-left w-full text-sm px-4 py-2 hover:bg-yellow-100 ${
//                       language === option.value
//                         ? "text-black font-semibold bg-gray-50"
//                         : "text-gray-700"
//                     }`}
//                   >
//                     {option.label}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           <button onClick={() => navigate("/sell")} className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded cursor-pointer shadow-sm hover:bg-yellow-500">
//             + Sell
//           </button>
//         </div>

//         {/* Hamburger Icon (mobile) */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-black focus:outline-none"
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="flex flex-col gap-4 p-4">
//           <input
//             type="text"
//             placeholder="Search city, area or locality"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//           />
//           <input
//             type="text"
//             placeholder="Find Cars, Mobile Phones and more..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//           />
//           <select
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//           >
//             <option value="ENGLISH">English</option>
//             <option value="HINDI">Hindi</option>
//           </select>
//           <div
//             onClick={() => {
//               set;
//             }}
//             className="flex flex-col gap-2 mt-2"
//           >
//             <button
//               onClick={() => {
//                 setMenuOpen(false);
//                 navigate("/login");
//               }}
//               className="text-black font-medium hover:underline text-sm text-left"
//             >
//               Login
//             </button>
//             <button
//               onClick={() => {
//                 setMenuOpen(false);
//                 navigate("/register");
//               }}
//               className="border border-gray-300 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-50 text-sm text-left"
//             >
//               Register
//             </button>
//             <button onClick={() => navigate("/sell")} className="bg-yellow-300 text-black font-semibold px-4 py-2.5 rounded hover:bg-yellow-400 text-sm text-left">
//               + Sell
//             </button>{" "}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/newlogo.png";
import { FiSearch, FiMapPin, FiChevronDown } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState(localStorage.getItem("userLocation") || "");
  const [language, setLanguage] = useState("ENGLISH");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef(null);

  const languageOptions = [
    { value: "ENGLISH", label: "English" },
    { value: "HINDI", label: "Hindi" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    localStorage.setItem("userLocation", location);
  }, [location]);

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state ||
            data.display_name;
          setLocation(city);
        } catch (error) {
          console.error("Error fetching location:", error);
          alert("Unable to retrieve location name.");
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <header className="w-full fixed z-20 bg-white shadow-sm py-2 px-4 md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer"
        >
          <img
            src={image}
            alt="RentOK Logo"
            className="h-12 md:h-16 object-contain"
          />
        </div>

        {/* Location + Searchbar */}
        <div className="hidden lg:flex flex-col space-x-3 flex-1 px-4 md:px-16">
          <div className="flex justify-between items-center gap-3">
            {/* Location Bar */}
            <div className="flex items-center bg-white border border-gray-300 rounded px-4 py-2 w-60 shadow-sm hover:border-yellow-300">
              <FiMapPin className="text-red-600 mr-2" size={20} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search city, area or locality"
                className="outline-none w-full bg-transparent"
              />
              <button
                onClick={handleUseMyLocation}
                title="Use My Location"
                className="ml-2 text-blue-600 font-semibold text-xs"
              >
                📍
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center bg-white border border-gray-300 rounded flex-1 px-4 py-2 shadow-sm hover:border-yellow-300">
              <FiSearch className="text-gray-600 mr-2" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find Cars, Mobile Phones and more..."
                className="outline-none w-full bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={() => navigate("/login")}
            className="text-black font-semibold hover:underline cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/register");
            }}
            className="border border-gray-300 rounded px-4 py-2 cursor-pointer font-semibold hover:border-yellow-300 shadow-sm"
          >
            Register
          </button>

          {/* Custom Language Dropdown */}
          <div
            ref={langDropdownRef}
            className="relative"
            style={{ width: "120px" }}
          >
            <button
              type="button"
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              className="border border-gray-300 rounded px-4 py-2 cursor-pointer font-semibold hover:border-yellow-300 shadow-sm w-full flex justify-between items-center"
            >
              <span>
                {languageOptions.find((opt) => opt.value === language)?.label}
              </span>
              <FiChevronDown
                className={`ml-2 transition-transform ${
                  langDropdownOpen ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute left-0 mt-1 w-full bg-white rounded shadow-lg z-50 border border-gray-200">
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setLanguage(option.value);
                      setLangDropdownOpen(false);
                    }}
                    className={`text-left w-full text-sm px-4 py-2 hover:bg-yellow-100 ${
                      language === option.value
                        ? "text-black font-semibold bg-gray-50"
                        : "text-gray-700"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/sell")}
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded cursor-pointer shadow-sm hover:bg-yellow-500"
          >
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
          <button
            onClick={handleUseMyLocation}
            className="text-blue-600 text-sm font-medium text-left"
          >
            📍 Use My Location
          </button>
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
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
              className="text-black font-medium hover:underline text-sm text-left"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/register");
              }}
              className="border border-gray-300 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-50 text-sm text-left"
            >
              Register
            </button>
            <button
              onClick={() => navigate("/sell")}
              className="bg-yellow-300 text-black font-semibold px-4 py-2.5 rounded hover:bg-yellow-400 text-sm text-left"
            >
              + Sell
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


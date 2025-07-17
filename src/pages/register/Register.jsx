// import React, { useState } from "react";

// export default function Register() {
//   const [userType, setUserType] = useState("buyer");
//   const [sellerType, setSellerType] = useState("individual");
//   const [submitted, setSubmitted] = useState(false);
//   const [adharCard, setAdharCard] = useState(null);
//   const [services, setServices] = useState([
//     { type: "", duration: "", skills: "", charges: "" },
//   ]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (userType === "buyer") {
//       alert("✅ Registered successfully as Buyer! You can now start using the platform.");
//     } else {
//       setSubmitted(true);
//       console.log("Submitted data:", { userType, sellerType, services });
//     }
//   };

//   const addService = () => {
//     setServices([...services, { type: "", duration: "", skills: "", charges: "" }]);
//   };

//   const handleServiceChange = (index, field, value) => {
//     const updated = [...services];
//     updated[index][field] = value;
//     setServices(updated);
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 py-10">
//       <div className="w-full max-w-4xl px-4 md:px-8 py-6 bg-white border border-gray-300 rounded-2xl shadow-sm overflow-y-auto">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Register Page</h2>

//         {/* User Type Toggle */}
//         <div className="mb-6 flex flex-wrap gap-6 justify-center">
//           {["buyer", "seller", "services"].map((type) => (
//             <label key={type} className="flex items-center">
//               <input
//                 type="radio"
//                 value={type}
//                 checked={userType === type}
//                 onChange={(e) => setUserType(e.target.value)}
//                 className="mr-2 accent-yellow-400"
//               />
//               {type.charAt(0).toUpperCase() + type.slice(1)}
//             </label>
//           ))}
//         </div>

//         {/* Form Start */}
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
//         >
//           {/* Common Fields */}
//           <div>
//             <label className="block font-medium mb-1">Name</label>
//             <input
//               type="text"
//               required
//               placeholder="Enter your full name"
//               className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Email</label>
//             <input
//               type="email"
//               required
//               placeholder="Enter your email address"
//               className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Mobile Number</label>
//             <input
//               type="tel"
//               required
//               placeholder="Enter your mobile number"
//               className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Address <span className="text-sm text-gray-500">(same as Aadhaar card)</span> </label>
//             <textarea
//               required
//               placeholder="Enter your full address"
//               className="w-full h-10 p-2 border border-gray-300 rounded outline-none resize-none hover:border-yellow-300"
//             ></textarea>
//           </div>

//           {/* Seller Fields */}
//           {userType === "seller" && (
//             <>
//               {/* Seller Type Toggle */}
//               <div className="md:col-span-2 flex gap-6">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     value="individual"
//                     checked={sellerType === "individual"}
//                     onChange={(e) => setSellerType(e.target.value)}
//                     className="mr-2 accent-yellow-400"
//                   />
//                   Individual
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     value="farm"
//                     checked={sellerType === "farm"}
//                     onChange={(e) => setSellerType(e.target.value)}
//                     className="mr-2 accent-yellow-400"
//                   />
//                   Farm
//                 </label>
//               </div>

//               <div>
//                 <label className="block font-medium mb-1">Date of Birth</label>
//                 <input
//                   type="date"
//                   required
//                   className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
//                 />
//               </div>

//               <div>
//                 <label className="block font-medium mb-1">
//                   Upload Aadhaar Card
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*,application/pdf"
//                   onChange={(e) => setAdharCard(e.target.files[0])}
//                   required
//                   className="w-full border border-gray-300 p-2 rounded hover:border-yellow-300"
//                 />
//               </div>

//               {sellerType === "farm" && (
//                 <div>
//                   <label className="block font-medium mb-1">GST Number</label>
//                   <input
//                     type="text"
//                     required
//                     placeholder="Enter your GST Number"
//                     className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-100"
//                   />
//                 </div>
//               )}
//             </>
//           )}

//           {/* Services Fields */}
//           {userType === "services" && (
//             <div className="md:col-span-2">
//               <label className="block font-medium mb-2">Services Offered</label>

//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 border p-4 rounded-md border-gray-300"
//                 >
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Type</label>
//                     <select
//                       className="w-full p-2 border border-gray-300 rounded"
//                       value={service.type}
//                       onChange={(e) =>
//                         handleServiceChange(index, "type", e.target.value)
//                       }
//                     >
//                       <option value="">Select</option>
//                       <option value="Plowing">Plowing</option>
//                       <option value="Harvesting">Harvesting</option>
//                       <option value="Irrigation">Irrigation</option>
//                       <option value="Transport">Transport</option>
//                       <option value="Pest Control">Pest Control</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">Duration</label>
//                     <input
//                       type="text"
//                       placeholder="e.g. 3 hours"
//                       className="w-full p-2 border border-gray-300 rounded"
//                       value={service.duration}
//                       onChange={(e) =>
//                         handleServiceChange(index, "duration", e.target.value)
//                       }
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">Skills</label>
//                     <input
//                       type="text"
//                       placeholder="e.g. Tractor driving"
//                       className="w-full p-2 border border-gray-300 rounded"
//                       value={service.skills}
//                       onChange={(e) =>
//                         handleServiceChange(index, "skills", e.target.value)
//                       }
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">Charges</label>
//                     <input
//                       type="number"
//                       placeholder="e.g. 500"
//                       className="w-full p-2 border border-gray-300 rounded"
//                       value={service.charges}
//                       onChange={(e) =>
//                         handleServiceChange(index, "charges", e.target.value)
//                       }
//                     />
//                   </div>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={addService}
//                 className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
//               >
//                 + Add Another Service
//               </button>
//             </div>
//           )}

//           {/* Submit Button */}
//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-sm"
//             >
//               Submit
//             </button>
//           </div>
//         </form>

//         {/* Success Message */}
//         {submitted && (
//           <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded shadow-sm">
//             ✅ Registered successfully as <strong>{userType.toUpperCase()}</strong>!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }







// File: RegisterPage.jsx
import React, { useState } from "react";
import RegisterBuyer from "./RegisterBuyer";
import RegisterSeller from "./RegisterSeller";
import RegisterServices from "./RegisterServices";

export default function RegisterPage() {
  const [userType, setUserType] = useState("buyer");

  return (
    <div className="w-full min-h-screen flex items-start justify-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-[1000px] bg-white border border-gray-300 rounded-2xl shadow-sm px-6 md:px-10 py-8 mt-19">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">
          Register Page
        </h2>

        {/* User Type Toggle */}
        <div className="mb-8 flex flex-wrap gap-6 justify-center">
          {["buyer", "seller", "services"].map((type) => (
            <label key={type} className="flex items-center font-medium capitalize">
              <input
                type="radio"
                value={type}
                checked={userType === type}
                onChange={(e) => setUserType(e.target.value)}
                className="mr-2 accent-yellow-400 "
              />
              {type}
            </label>
          ))}
        </div>

        {/* Conditional Form Rendering */}
        <div className="border-t-1 border-gray-300">
          {userType === "buyer" && <RegisterBuyer />}
          {userType === "seller" && <RegisterSeller />}
          {userType === "services" && <RegisterServices />}
        </div>
      </div>
    </div>
  );
}

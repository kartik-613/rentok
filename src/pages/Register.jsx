import React, { useState } from "react";

export default function Register() {
  const [userType, setUserType] = useState("buyer");
  const [sellerType, setSellerType] = useState("individual");
  const [submitted, setSubmitted] = useState(false);
  const [adharCard, setAdharCard] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === "buyer") {
      alert("✅ Registered successfully as Buyer! You can now start using the platform.");
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl h-auto mx-auto mt-4 px-4 md:px-8 py-6 bg-white border border-gray-300 rounded-2xl shadow-sm overflow-y-auto">
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
            Register Page
          </h2>
        </div>

        {/* User Type Toggle */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <label className="flex items-center">
            <input
              type="radio"
              value="buyer"
              checked={userType === "buyer"}
              onChange={(e) => setUserType(e.target.value)}
              className="mr-2 accent-yellow-400"
            />
            Buyer
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="seller"
              checked={userType === "seller"}
              onChange={(e) => setUserType(e.target.value)}
              className="mr-2 accent-yellow-400"
            />
            Seller
          </label>
        </div>

        {/* Seller Subtype */}
        {userType === "seller" && (
          <div className="mb-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                value="individual"
                checked={sellerType === "individual"}
                onChange={(e) => setSellerType(e.target.value)}
                className="mr-2 accent-yellow-300"
              />
              Individual
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="farm"
                checked={sellerType === "farm"}
                onChange={(e) => setSellerType(e.target.value)}
                className="mr-2 accent-yellow-300"
              />
              Farm
            </label>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              required
              placeholder="Enter your mobile number"
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Address <span className="text-sm text-gray-500">(same as Aadhaar card)</span> </label>
            <textarea
              required
              placeholder="Enter your full address"
              className="w-full h-10 p-2 border border-gray-300 rounded outline-none resize-none hover:border-yellow-300"
            ></textarea>
          </div>

          {/* Seller-specific fields */}
          {userType === "seller" && (
            <>
              <div>
                <label className="block font-medium mb-1">Date of Birth</label>
                <input
                  type="date"
                  required
                  className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Upload Aadhaar Card
                </label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={(e) => setAdharCard(e.target.files[0])}
                  required
                  className="w-full border border-gray-300 p-2 rounded hover:border-yellow-300"
                />
              </div>

              {sellerType === "farm" && (
                <div>
                  <label className="block font-medium mb-1">GST Number</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your GST Number"
                    className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-100"
                  />
                </div>
              )}
            </>
          )}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-sm"
            >
              Submit
            </button>
          </div>
        </form>

        {submitted && userType === "seller" && (
          <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded shadow-sm">
            ✅ Registered successfully as a <strong>Seller ({sellerType})</strong>. We’ll get back to you within 24 hours for verification.
          </div>
        )}
      </div>
    </div>
  );
}

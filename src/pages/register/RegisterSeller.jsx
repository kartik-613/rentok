import React, { useState } from "react";

export default function RegisterSeller() {
  const [submitted, setSubmitted] = useState(false);
  const [sellerType, setSellerType] = useState("individual");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [gstNumber, setGstNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      sellerType,
      name,
      email,
      mobile,
      address,
      dob,
      aadhaarCard,
      gstNumber: sellerType === "farm" ? gstNumber : null,
    };

    console.log(formData);
    alert("✅ Registered successfully as Seller!");
    setSubmitted(true);

    // Reset form
    setName("");
    setEmail("");
    setMobile("");
    setAddress("");
    setDob("");
    setAadhaarCard(null);
    setGstNumber("");
    setSellerType("individual");

    // Hide success message after timeout
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full mt-8">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
      >
        {/* Seller Type */}
        <div className="md:col-span-2 flex gap-6">
          <label className="flex items-center font-medium">
            <input
              type="radio"
              value="individual"
              checked={sellerType === "individual"}
              onChange={() => setSellerType("individual")}
              className="mr-2 accent-amber-300 shadow-sm"
            />
            Individual
          </label>
          <label className="flex items-center font-medium">
            <input
              type="radio"
              value="farm"
              checked={sellerType === "farm"}
              onChange={() => setSellerType("farm")}
              className="mr-2 accent-amber-300 shadow-sm"
            />
            Farm
          </label>
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            required
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            required
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block font-medium mb-1">Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            required
            pattern="[0-9]{10}"
            placeholder="Enter your mobile number"
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium mb-1">
            Address{" "}
            <span className="text-sm text-gray-500">
              (same as Aadhaar card)
            </span>
          </label>
          <textarea
            value={address}
            required
            rows="4"
            placeholder="Enter your full address"
            onChange={(e) => setAddress(e.target.value)}
            className="w-full h-10 p-2 border border-gray-300 rounded outline-none resize-none hover:border-yellow-300 shadow-sm"
          ></textarea>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            value={dob}
            required
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
          />
        </div>

        {/* Aadhaar Card */}
        <div>
          <label className="block font-medium mb-1">Aadhaar Card</label>
          <input
            type="file"
            required
            onChange={(e) => setAadhaarCard(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
          />
        </div>

        {/* GST Number - only for farm sellers */}
        {sellerType === "farm" && (
          <div>
            <label className="block font-medium mb-1">GST Number</label>
            <input
              type="text"
              value={gstNumber}
              required
              placeholder="Enter your GST number"
              onChange={(e) => setGstNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300 shadow-sm"
            />
          </div>
        )}

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-sm"
          >
            Submit
          </button>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="md:col-span-2 text-green-600 font-medium mt-2 text-center">
            ✅ Seller Registered Successfully!
          </div>
        )}
      </form>
    </div>
  );
}

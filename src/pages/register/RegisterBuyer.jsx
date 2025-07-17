import React, { useState } from "react";

export default function RegisterBuyer() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ fullName, email, mobile, address });
    alert("✅ Registered successfully as Buyer!");
    setSubmitted(true);

    // Reset form
    setFullName("");
    setEmail("");
    setMobile("");
    setAddress("");

    // Auto-clear success message
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full mt-6">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
      >
        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={fullName}
            required
            placeholder="Enter your full name"
            onChange={(e) => setFullName(e.target.value)}
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
            ✅ Buyer Registered Successfully!
          </div>
        )}
      </form>
    </div>
  );
}

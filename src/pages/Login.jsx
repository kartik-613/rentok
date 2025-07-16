import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder login logic (replace with API call)
    if (email === "user@example.com" && password === "password123") {
      setSubmitted(true);
    } else {
      alert("❌ Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md px-6 py-8 bg-white border border-gray-300 rounded-2xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 text-black">
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-yellow-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded shadow-sm"
          >
            Login
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded shadow-sm">
            ✅ Logged in successfully. Redirecting to your dashboard...
          </div>
        )}
      </div>
    </div>
  );
}

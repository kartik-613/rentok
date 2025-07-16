import React, { useState } from "react";

export default function Sell() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Car");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log({ title, category, price, description, location, image });
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-[900px] h-auto md:h-[630px] mx-auto mt-2 px-4 md:px-8 py-6 bg-white border border-gray-300 rounded-2xl shadow-sm overflow-y-auto">
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
            Post Your Ad
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          <div>
            <label className="block font-medium mb-1">Product Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter product title"
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            >
              <option value="Car">Car</option>
              <option value="Mobile">Mobile Phone</option>
              <option value="Bike">Bike</option>
              <option value="Furniture">Furniture</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter your price"
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city or area"
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a few details about your product..."
              className="w-full p-2 h-24 border border-gray-300 rounded outline-none resize-none hover:border-yellow-300"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded outline-none hover:border-yellow-300"
            />
            {image && (
              <p className="text-sm text-green-600 mt-1">Selected: {image.name}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full md:w-auto ${
                loading ? "bg-yellow-300" : "bg-yellow-400 hover:bg-yellow-500"
              } text-black font-semibold py-2 px-6 rounded shadow-sm`}
            >
              {loading ? "Posting..." : "Submit Ad"}
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded shadow-sm">
            ✅ Your ad has been <strong>posted successfully</strong> and is now live!
          </div>
        )}
      </div>
    </div>
  );
}

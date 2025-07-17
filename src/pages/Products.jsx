import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/productData";

const Products = () => {
  const { category } = useParams();

  // Filter states
  const [locationFilter, setLocationFilter] = useState([]);
  const [fuelFilter, setFuelFilter] = useState([]);
  const [transmissionFilter, setTransmissionFilter] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleCheckboxChange = (e, filter, setFilter) => {
    const { value, checked } = e.target;
    if (checked) {
      setFilter([...filter, value]);
    } else {
      setFilter(filter.filter((f) => f !== value));
    }
  };

  let filteredProducts = productData.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (locationFilter.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      locationFilter.includes(p.location)
    );
  }
  if (fuelFilter.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      fuelFilter.includes(p.fuelType)
    );
  }
  if (transmissionFilter.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      transmissionFilter.includes(p.transmission)
    );
  }

  if (sortBy === "lowToHigh") {
    filteredProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } else if (sortBy === "highToLow") {
    filteredProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));
  }

  return (
    <div className="w-full mx-auto px-4 py-10 pt-22 bg-gray-100">
      <div className="bg-white rounded-lg py-6">
        <h2 className="text-2xl sm:text-3xl font-bold capitalize text-gray-800 text-center">
          {category.replace("-", " ")} for Rent
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 py-6 px-4">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4 w-full bg-gray-100 rounded-lg shadow-md p-5 h-fit sticky top-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Filters
            </h3>

            {/* Location */}
            <div className="mb-6">
              <h4 className="font-medium text-sm text-gray-600 mb-2">
                LOCATION
              </h4>
              {["Maharashtra", "Tamil Nadu", "Kerala", "Delhi"].map((loc) => (
                <label className="block text-sm text-gray-700" key={loc}>
                  <input
                    type="checkbox"
                    value={loc}
                    onChange={(e) =>
                      handleCheckboxChange(e, locationFilter, setLocationFilter)
                    }
                  />{" "}
                  {loc}
                </label>
              ))}
            </div>

            {/* Fuel Type */}
            <div className="mb-6">
              <h4 className="font-medium text-sm text-gray-600 mb-2">
                FUEL TYPE
              </h4>
              {["Petrol", "Diesel", "CNG", "Electric"].map((fuel) => (
                <label className="block text-sm text-gray-700" key={fuel}>
                  <input
                    type="checkbox"
                    value={fuel}
                    onChange={(e) =>
                      handleCheckboxChange(e, fuelFilter, setFuelFilter)
                    }
                  />{" "}
                  {fuel}
                </label>
              ))}
            </div>

            {/* Transmission */}
            <div className="mb-6">
              <h4 className="font-medium text-sm text-gray-600 mb-2">
                TRANSMISSION
              </h4>
              {["Automatic", "Manual"].map((t) => (
                <label className="block text-sm text-gray-700" key={t}>
                  <input
                    type="checkbox"
                    value={t}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        transmissionFilter,
                        setTransmissionFilter
                      )
                    }
                  />{" "}
                  {t}
                </label>
              ))}
            </div>

            {/* Sort By */}
            <div className="mb-4">
              <h4 className="font-medium text-sm text-gray-600 mb-2">
                SORT BY
              </h4>
              <select
                className="w-full p-2 border border-gray-300 rounded text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">Latest</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </aside>

          {/* Product Cards */}
          <div className="lg:w-3/4 w-full">
            {filteredProducts.length === 0 ? (
              <p className="text-gray-600">
                No products available in this category.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition duration-300"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold text-gray-800">
                        {product.price}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {product.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
  </div>
  );
};

export default Products;

import React from "react";
import { useParams } from "react-router-dom";
import productData from "../data/productData";

const Products = () => {
  const { category } = useParams();
  const filteredProducts = productData.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold capitalize mb-6 text-gray-800">
        {category} for Rent
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products available in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

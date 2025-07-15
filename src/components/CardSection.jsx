import React from "react";
import { useNavigate } from "react-router-dom";
import cardData from "../data/cardData";

const CardSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    // Convert title to lowercase and remove spaces (e.g., "Home Appliances" → "home-appliances")
    const categorySlug = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/products/${categorySlug}`);
  };

  return (
    <section className="py-10 bg-white rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData.map((card) => (
            <div
              key={card.title}
              onClick={() => handleCardClick(card.title)}
              className="cursor-pointer bg-gray-50 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-44 sm:h-48 md:h-52 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;

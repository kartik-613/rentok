import React from "react";

const cardData = [
  {
    title: "Electronics",
    description: "Rent laptops, cameras, phones, and more.",
    image: "https://source.unsplash.com/400x300/?electronics",
  },
  {
    title: "Vehicles",
    description: "From bikes to cars, available on daily or monthly basis.",
    image: "https://source.unsplash.com/400x300/?vehicles",
  },
  {
    title: "Home Appliances",
    description: "Get washing machines, refrigerators and more for temporary use.",
    image: "https://source.unsplash.com/400x300/?appliances",
  },
  {
    title: "Furniture",
    description: "Chairs, tables, and complete room sets available.",
    image: "https://source.unsplash.com/400x300/?furniture",
  },
];

const CardSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
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

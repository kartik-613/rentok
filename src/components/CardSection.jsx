import React from "react";

const cardData = [
  {
    title: "Electronics",
    description: "Rent laptops, cameras, phones, and more.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Vehicles",
    description: "From bikes to cars, available on daily or monthly basis.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Home Appliances",
    description: "Get washing machines, refrigerators and more for temporary use.",
    image: "https://www.kitchenaid.com/is/image/content/dam/business-unit/kitchenaid/en-us/marketing-content/site-assets/page-content/pinch-of-help/filling-your-home-with-appliances/Filling-your-home-with-appliances-major.jpg?constrain=fit%2C1&fmt=png-alpha&op_usm=1.75%2C0.3%2C2%2C0&qlt=85%2C0&resMode=sharp2&scl=1",
  },
  {
    title: "Furniture",
    description: "Chairs, tables, and complete room sets available.",
    image: "https://cdn.cort.com/roomservice/images/content/blog/build_to_rent/btr_hero.jpg",
  },
  {
    title: "Cameras",
    description: "Professional camera equipment for rent.",
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsbSUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  },
  {
    title: "Motorcycles",
    description: "Ride a bike for daily trips or adventures.",
    image: "https://bikesbooking.com/static/media/lead-bg-2.a85a2e9e.webp",
  },
  {
    title: "Refrigerators",
    description: "Short-term fridge rentals for events and more.",
    image: "https://images.unsplash.com/photo-1586459008947-3b118abd1896?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym1kfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  },
  {
    title: "Living Room Sets",
    description: "Stylish furniture sets for any occasion.",
    image: "https://images.unsplash.com/photo-1737442724990-af0fa0885312?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000",
  },
];

const CardSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData.map((card) => (
            <div
              key={card.title}
              onClick={() => alert(`Clicked on: ${card.title}`)} // replace with real action
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

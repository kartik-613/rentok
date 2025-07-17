import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import services from "../data/services";

// --- Reusable UI Components ---
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-2xl border bg-white shadow-sm hover:shadow-md transition cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-5 ${className}`} {...props}>
    {children}
  </div>
);

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl transition font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className = "", icon: Icon, ...props }) => (
  <div className={`relative w-full ${className}`}>
    {Icon && (
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <Icon size={18} />
      </span>
    )}
    <input
      className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      {...props}
    />
  </div>
);

// --- Main Component ---
const HirePerson = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const allServices = services.flatMap((group) =>
    group.items.map((service) => ({
      name: service,
      category: group.category,
    }))
  );

  const filteredServices = allServices.filter(
    (service) =>
      (selectedCategory === "All" || service.category === selectedCategory) &&
      service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full px-4 mx-auto pt-22 pb-16 bg-gray-100">
      <div className="bg-white rounded-lg px-4 md:px-8 lg:px-12 xl:px-20 max-w-screen-2xl mx-auto">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold py-6 text-center">
            Hire a Trusted Service
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white rounded-2xl border p-5 shadow-md sticky top-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Search & Filter</h2>

            <Input
              placeholder="Search services..."
              icon={FiSearch}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-5"
            />

            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Categories
            </h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {["All", ...services.map((s) => s.category)].map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left text-sm border w-full ${
                    selectedCategory === cat
                      ? "bg-yellow-100 border-yellow-300 text-black font-semibold"
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-yellow-50"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <section className="flex-1">
            {selectedService ? (
              <div className="bg-white p-6 rounded-2xl border shadow-md">
                <h2 className="text-2xl font-semibold mb-2">
                  {selectedService.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  Category: {selectedService.category}
                </p>
                <p className="text-gray-500 italic">
                  More details coming soon...
                </p>
                <Button
                  onClick={() => setSelectedService(null)}
                  className="mt-4 bg-gray-100 hover:bg-gray-200 text-sm"
                >
                  ← Back to services
                </Button>
              </div>
            ) : filteredServices.length === 0 ? (
              <div className="text-center text-gray-500 mt-12">
                No services match your search.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServices.map((service, index) => (
                  <Card
                    key={index}
                    onClick={() => setSelectedService(service)}
                  >
                    <CardContent>
                      <h3 className="text-lg font-semibold mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {service.category}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default HirePerson;



import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import services from "../../data/services";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardContent from "../../components/CardContent";
import Input from "../../components/Input";

const HirePerson = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [preference, setPreference] = useState("");
  const navigate = useNavigate(); // ✅ hook

  const allServices = services.flatMap((group) =>
    group.items.map((service) => ({
      name: service,
      category: group.category,
      id: `${group.category}-${service}`.toLowerCase().replace(/\s+/g, "-"),
      preferred: ["female", "male", "nearby", "experienced"][
        Math.floor(Math.random() * 4)
      ],
    }))
  );

  const filteredServices = allServices.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesPreference = preference
      ? service.preferred.includes(preference.toLowerCase())
      : true;

    return matchesCategory && matchesSearch && matchesPreference;
  });

  const categories = ["All", ...new Set(services.map((s) => s.category))];

  return (
    <div className="w-full px-4 mx-auto pt-16 pb-24 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg px-4 md:px-8 lg:px-12 xl:px-20 max-w-[1440px] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold py-6 text-center">
          Hire a Trusted Service
        </h1>

        {/* Filters + Cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar filters */}
          <aside className="hidden lg:block w-[260px] shrink-0 bg-white rounded-2xl border p-5 shadow-md sticky top-28 h-fit space-y-4">
            <h2 className="text-xl font-semibold">Search & Filter</h2>
            <Input
              placeholder="Search services..."
              icon={FiSearch}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Input
              placeholder="Any preference (e.g., female, nearby)"
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
            />
            <div className="flex flex-wrap lg:flex-col gap-2">
              {categories.map((cat) => (
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

          {/* Service cards */}
          <section className="flex-1 min-w-0">
            {filteredServices.length === 0 ? (
              <div className="text-center text-gray-500 mt-12">
                No services match your filters.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
                {filteredServices.map((service) => (
                  <Card
                    key={service.id}
                    onClick={() => navigate(`/employee/${service.id}`)} // ✅ navigate instead of modal
                    className="hover:bg-yellow-50 active:bg-yellow-100"
                  >
                    <CardContent>
                      <h3 className="text-lg font-semibold mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {service.category}
                      </p>
                      <p className="text-xs text-gray-400">
                        Preference: {service.preferred}
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

import React, { useState } from "react";
import { FiSearch, FiCalendar } from "react-icons/fi";
import services from "../../data/services";
import ApprovalDashboard from "./ApprovalDashboard";

// ✅ Reusable UI Components
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-2xl border bg-white shadow-sm cursor-pointer transition duration-200 hover:shadow-md hover:rounded-2xl ${className}`}
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
    className={`px-4 py-2 rounded-xl transition duration-200 ease-in-out hover:scale-[1.02] font-medium ${className}`}
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

const HirePerson = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);
  const [expectedDate, setExpectedDate] = useState("");
  const [duration, setDuration] = useState("");
  const [preference, setPreference] = useState("");

  const allServices = services.flatMap((group) =>
    group.items.map((service) => ({
      name: service,
      category: group.category,
      id: `${group.category}-${service}`.toLowerCase().replace(/\s+/g, "-"),
      userType: "Worker",
      mobile: "9876543210",
      email: `${service.toLowerCase().replace(/\s+/g, "")}@example.com`,
      address: "Unknown Street, City",
      aadharImageUrl: "https://via.placeholder.com/100",
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
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold py-6 text-center">
            Hire a Trusted Service
          </h1>
        </div>

        {selectedService ? (
          <div className="mb-8">
            <Button
              onClick={() => setSelectedService(null)}
              className="mb-4 bg-yellow-100 text-yellow-800 border border-yellow-300"
            >
              ← Back to Services
            </Button>
            <ApprovalDashboard selectedUser={selectedService} />
          </div>
        ) : (
          <>
            {/* Filters (Mobile) */}
            <div className="lg:hidden mb-6 space-y-4">
              <Input
                placeholder="Search services..."
                icon={FiSearch}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Input
                type="date"
                icon={FiCalendar}
                value={expectedDate}
                onChange={(e) => setExpectedDate(e.target.value)}
              />

              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm"
              >
                <option value="">Select Duration</option>
                <option value="1hr">1 Hour</option>
                <option value="1day">1 Day</option>
                <option value="1week">1 Week</option>
              </select>

              <Input
                placeholder="Any preference (e.g., female, nearby)"
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
              />

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-sm border ${
                      selectedCategory === cat
                        ? "bg-yellow-100 border-yellow-300 text-black font-semibold"
                        : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-yellow-50"
                    }`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            {/* Filters & Results (Desktop) */}
            <div className="flex flex-col lg:flex-row gap-6">
              <aside className="hidden lg:block w-[260px] shrink-0 bg-white rounded-2xl border p-5 shadow-md sticky top-28 h-fit space-y-4">
                <h2 className="text-xl font-semibold">Search & Filter</h2>
                <Input
                  placeholder="Search services..."
                  icon={FiSearch}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Input
                  type="date"
                  icon={FiCalendar}
                  value={expectedDate}
                  onChange={(e) => setExpectedDate(e.target.value)}
                />
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm"
                >
                  <option value="">Select Duration</option>
                  <option value="1hr">1 Hour</option>
                  <option value="1day">1 Day</option>
                  <option value="1week">1 Week</option>
                </select>
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
                        onClick={() => setSelectedService(service)}
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
          </>
        )}
      </div>
    </div>
  );
};

export default HirePerson;

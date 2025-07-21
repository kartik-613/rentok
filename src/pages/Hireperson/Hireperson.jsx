import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import services from "../../data/services";

// 🔹 Shared UI Components
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
      className={`w-full ${Icon ? "pl-10" : "pl-3"} pr-4 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400`}
      {...props}
    />
  </div>
);

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-2xl border bg-white shadow-sm cursor-pointer transition duration-200 hover:shadow-md ${className}`}
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

// 🔹 Popup Booking Form Modal
const BookingFormModal = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted:", {
      serviceName: service.name,
      ...formData,
    });
    alert("Booking submitted!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Book Service: <span className="text-yellow-600">{service.name}</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="text"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            placeholder="Phone or Email"
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="Service Location"
            className="w-full border p-2 rounded-lg"
          />
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            placeholder="Additional Notes"
            rows="3"
          />
          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white"
          >
            Submit Booking
          </Button>
        </form>
      </div>
    </div>
  );
};

// 🔹 Main Page Component
const HirePerson = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [preference, setPreference] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

        {/* 🔍 Filters - Mobile */}
        <div className="mb-6 space-y-4 lg:hidden">
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

        {/* 🔍 Filters + Results - Desktop */}
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

          {/* 📋 Service Cards */}
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
                    onClick={() => {
                      setSelectedService(service);
                      setShowModal(true);
                    }}
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

        {/* 🧾 Modal Popup */}
        {showModal && selectedService && (
          <BookingFormModal
            service={selectedService}
            onClose={() => {
              setShowModal(false);
              setSelectedService(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default HirePerson;

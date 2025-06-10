import { useState } from "react";
import { businessCategories } from "../../data/categories";
import { FaSearch, FaFilter, FaRedo } from "react-icons/fa";

export default function TenderFilters({ filters, setFilters, tenderCount }) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      category: "",
      minPrice: "",
      maxPrice: "",
      company: "",
      expiryFrom: "",
      expiryTo: "",
      sortBy: "",
    });
  };

  return (
    <div
      className="
        sticky top-0 z-30
        backdrop-blur-lg
        border border-gray-700
        rounded-xl
        px-6 py-5 mb-6
        shadow-lg
        transition-all duration-300
        text-gray-300
      "
    >
      <div className="flex flex-col sm:flex-row justify-between items-center text-white mb-5 gap-3">
        <h2 className="text-2xl font-semibold drop-shadow-md">
          Your Requirements
        </h2>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white">
          <span>
            Showing: <strong className="text-white">{tenderCount}</strong>{" "}
            tenders
          </span>

          <button
            onClick={resetFilters}
            className="text-sm cursor-pointer text-red-500 hover:underline"
          >
            <FaRedo className="inline mr-1" /> Reset
          </button>
        </div>
      </div>

      <div>
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                name="search"
                type="text"
                placeholder="Search e.g.: Requirement of 20 split ac's"
                className="text-black w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-600 focus:outline-none
                 focus:ring-1 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-500"
                value={filters.search}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <select
                name="category"
                className="px-4 py-2.5 rounded-lg  border border-gray-600 text-gray-700 placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={filters.category}
                onChange={handleChange}
              >
                <option value="">All Categories</option>
                {businessCategories.map((cat, idx) => (
                  <option key={idx} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className=" inline-flex items-center px-4 py-2.5 border border-gray-300 rounded-lg
                 bg-white text-sm font-medium hover:bg-gray-50
                      text-gray-700
            placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition"
              >
                <FaFilter /> {showAdvanced ? "Hide" : "Filters"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          <input
            name="minPrice"
            type="number"
            placeholder="Min Budget"
            className="w-full mt-4 md:w-40 px-4 py-2 rounded-lg border border-gray-600 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={filters.minPrice}
            onChange={handleChange}
          />

          <input
            name="maxPrice"
            type="number"
            placeholder="Max Budget"
            className="w-full md:mt-4 md:w-40 px-4 py-2 rounded-lg border border-gray-600 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={filters.maxPrice}
            onChange={handleChange}
          />

          <input
            name="company"
            type="text"
            placeholder="Company name"
            className="w-full md:mt-4 md:w-48 px-4 py-2 text-gray-700 placeholder-gray-500 border-gray-600 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none transition"
            value={filters.company}
            onChange={handleChange}
          />

          <select
            name="sortBy"
            className="w-full md:mt-4 md:w-48 px-4 py-2 text-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            value={filters.sortBy}
            onChange={handleChange}
          >
            <option value="">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="expirySoon">Expiry Soonest</option>
            <option value="expiryLate">Expiry Latest</option>
          </select>

          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="expiryFrom"
                className="mb-1 text-sm text-gray-700"
              >
                Expiry From:
              </label>
              <input
                id="expiryFrom"
                name="expiryFrom"
                type="date"
                className="w-full px-4 py-2 text-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
                value={filters.expiryFrom}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="expiryTo" className="mb-1 text-sm text-gray-700">
                Expiry To:
              </label>
              <input
                id="expiryTo"
                name="expiryTo"
                type="date"
                className="w-full px-4 py-2 text-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
                value={filters.expiryTo}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

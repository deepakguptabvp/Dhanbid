import { useState, useEffect } from "react";
import { businessCategories } from "../../data/categories";
import { FaSearch, FaFilter, FaRedo } from "react-icons/fa";

export default function TenderFilters({ filters, setFilters, tenderCount }) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const selected = businessCategories.find(
      (item) => item.category === filters.category
    );
    setSubcategories(selected ? selected.subcategories : []);
  }, [filters.category]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update category and reset subcategory
    if (name === "category") {
      const selected = businessCategories.find(
        (item) => item.category === value
      );
      setSubcategories(selected ? selected.subcategories : []);
      setFilters((prev) => ({
        ...prev,
        category: value,
        subcategory: "", // Reset subcategory when category changes
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      category: "",
      subcategory: "",
      minPrice: "",
      maxPrice: "",
      company: "",
      expiryFrom: "",
      expiryTo: "",
      sortBy: "",
    });
    setSubcategories([]);
  };

  return (
    <div className="sticky top-0 bg-white z-30 border border-gray-700 rounded-xl px-5 py-5 mb-6 shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-center text-black mb-3 gap-3">
        <h2 className="text-2xl font-semibold drop-shadow-md">
          Your Requirements
        </h2>
        <div className="flex flex-wrap items-center gap-8 text-sm text-white ">
          <span className="text-black/90">
            Showing: <strong>{tenderCount}</strong>{" "}
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              name="search"
              type="text"
              placeholder="Search e.g.: Requirement of 20 split ac's"
              className="text-black w-full pl-10 px-4 py-2.5 rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
              value={filters.search}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            {/* Category */}
            <select
              name="category"
              className="px-2 py-2.5 md:w-50 rounded-lg border border-gray-600 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={filters.category}
              onChange={handleChange}
            >
              <option value="">All Categories</option>
              {businessCategories.map((cat, idx) => (
                <option key={idx} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>

            {/* Subcategory */}
            <select
              name="subcategory"
              value={filters.subcategory}
              onChange={handleChange}
              className="px-4 py-2.5 md:w-50 rounded-lg border border-gray-600 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              disabled={!filters.category}
            >
              <option value="">Select Sub Category </option>
              {subcategories.map((subcat, idx) => (
                <option key={idx} value={subcat}>
                  {subcat}
                </option>
              ))}
            </select>

            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="inline-flex items-center px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-sm font-medium hover:bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <FaFilter className="mr-2" /> {showAdvanced ? "Hide" : "Filters"}
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mt-6">
          <input
            name="minPrice"
            type="text"
            placeholder="Min Budget"
            className="w-full md:w-50 px-4 py-2 rounded-lg border border-gray-600 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={filters.minPrice}
            onChange={handleChange}
          />

          <input
            name="maxPrice"
            type="text"
            placeholder="Max Budget"
            className="w-full md:w-50 px-4 py-2 rounded-lg border border-gray-600 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={filters.maxPrice}
            onChange={handleChange}
          />

          <input
            name="company"
            type="text"
            placeholder="Company name"
            className="w-full md:w-50 px-4 py-2 text-gray-700 placeholder-gray-500 border-gray-600 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none transition"
            value={filters.company}
            onChange={handleChange}
          />

          <select
            name="sortBy"
            className="w-full md:w-50 p-2 text-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            value={filters.sortBy}
            onChange={handleChange}
          >
            <option value="">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="expirySoon">Expiry Soonest</option>
            <option value="expiryLate">Expiry Latest</option>
          </select>

          {/* <div className="flex flex-col md:flex-row gap-4 md:w-100"> */}
            <div className="flex flex-col ">
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
                className="w-full md:w-40 px-4 py-2 text-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
                value={filters.expiryFrom}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="expiryTo" className="mb-1 text-sm text-gray-700">
                Expiry To:
              </label>
              <input
                id="expiryTo"
                name="expiryTo"
                type="date"
                className="w-full md:w-40 px-4 py-2 text-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
                value={filters.expiryTo}
                onChange={handleChange}
              />
            </div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
}

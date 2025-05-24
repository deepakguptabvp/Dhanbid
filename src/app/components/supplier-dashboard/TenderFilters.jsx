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
        px-6 py-5 mx-2 my-3
        shadow-lg
        transition-all duration-300
      "
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-3">
        <h2 className="text-2xl font-semibold drop-shadow-md">
          Find Your Tender
        </h2>
        <div className="flex flex-wrap items-center gap-4 text-sm text-black/80">
          <span>
            Showing: <strong className="text-black/80">{tenderCount}</strong>{" "}
            tenders
          </span>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-1 text-blue-400 hover:text-blue-500 transition underline cursor-pointer select-none"
          >
            <FaFilter /> {showAdvanced ? "Hide" : "Advanced Filters"}
          </button>
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-red-500 hover:text-red-600 transition underline cursor-pointer select-none"
          >
            <FaRedo /> Reset
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <div className="relative w-full sm:w-64">
          <FaSearch className="absolute top-3.5 left-3 text-gray-500" />
          <input
            name="search"
            type="text"
            placeholder="Search by tender title..."
            className="
              w-full pl-10 pr-4 py-2 rounded-lg
              border border-gray-600
              text-black
              placeholder-black/80
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition
            "
            value={filters.search}
            onChange={handleChange}
          />
        </div>

        <select
          name="category"
          className="
            w-full sm:w-48 px-4 py-2 rounded-lg
           
            border border-gray-600
            text-black/80
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition
          "
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

        <input
          name="minPrice"
          type="number"
          placeholder="Min Budget"
          className="
            w-40 px-4 py-2 rounded-lg
          
            border border-gray-600
            text-black
            placeholder-black/80
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition
          "
          value={filters.minPrice}
          onChange={handleChange}
        />

        <input
          name="maxPrice"
          type="number"
          placeholder="Max Budget"
          className="
            w-40 px-4 py-2 rounded-lg
           
             border border-gray-600
            text-black
            placeholder-black/80
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition
          "
          value={filters.maxPrice}
          onChange={handleChange}
        />

        {showAdvanced && (
          <>
            <input
              name="company"
              type="text"
              placeholder="Company name"
              className="
                w-full sm:w-48 px-4 py-2 rounded-lg
                bg-[rgba(255,255,255,0.07)]
                border border-gray-600
                text-gray-200
                placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition
              "
              value={filters.company}
              onChange={handleChange}
            />

            <input
              name="expiryFrom"
              type="date"
              className="
                w-full sm:w-44 px-4 py-2 rounded-lg
                bg-[rgba(255,255,255,0.07)]
                border border-gray-600
                text-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition
              "
              value={filters.expiryFrom}
              onChange={handleChange}
            />

            <input
              name="expiryTo"
              type="date"
              className="
                w-full sm:w-44 px-4 py-2 rounded-lg
                bg-[rgba(255,255,255,0.07)]
                border border-gray-600
                text-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition
              "
              value={filters.expiryTo}
              onChange={handleChange}
            />

            <select
              name="sortBy"
              className="
                w-full sm:w-48 px-4 py-2 rounded-lg
                bg-[rgba(255,255,255,0.07)]
                border border-gray-600
                text-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition
              "
              value={filters.sortBy}
              onChange={handleChange}
            >
              <option value="">Sort By</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="expirySoon">Expiry Soonest</option>
              <option value="expiryLate">Expiry Latest</option>
            </select>
          </>
        )}
      </div>
    </div>
  );
}

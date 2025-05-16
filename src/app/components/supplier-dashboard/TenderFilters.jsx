import { businessCategories } from "../../data/categories";

export default function TenderFilters({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm rounded-xl px-6 py-4 mb-2">
      <div className="flex flex-wrap gap-4">
        {/* Search */}
        <input
          name="search"
          type="text"
          placeholder="🔍 Search tenders..."
          className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={filters.search}
          onChange={handleChange}
        />

        {/* Category */}
        <select
          name="category"
          className="w-full sm:w-48 px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          {businessCategories.map((cat)=><option value={cat.value}>{cat.label}</option>)}
        </select>

        {/* Min Price */}
        <input
          name="minPrice"
          type="number"
          placeholder="Min ₹"
          className="w-28 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={filters.minPrice}
          onChange={handleChange}
        />

        {/* Max Price */}
        <input
          name="maxPrice"
          type="number"
          placeholder="Max ₹"
          className="w-28 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={filters.maxPrice}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

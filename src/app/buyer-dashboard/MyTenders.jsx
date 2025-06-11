import React, { useEffect, useState } from "react";
import TenderFilters from "../components/supplier-dashboard/TenderFilters";

const MyTenders = ({ emptyArray }) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });
  const [height, setHeight] = useState(0);
  const [tenders, setTenders] = useState(emptyArray);

  useEffect(() => {
    // Adjust dynamically if needed based on header height
    window.scrollTo({ top: 0, behavior: "smooth" });
    const headerHeight = 200; // estimate filter height
    setHeight(window.innerHeight - headerHeight);
  }, []);

  useEffect(() => {
    const filteredTenders = emptyArray
      .filter(
        (t) =>
          (!filters.search ||
            t.name.toLowerCase().includes(filters.search.toLowerCase())) &&
          (!filters.category || t.category === filters.category) &&
          (!filters.company ||
            t.company.toLowerCase().includes(filters.company.toLowerCase())) &&
          (!filters.minPrice || t.minPrice >= Number(filters.minPrice)) &&
          (!filters.maxPrice || t.maxPrice <= Number(filters.maxPrice)) &&
          (!filters.expiryFrom ||
            new Date(t.expiryDate) >= new Date(filters.expiryFrom)) &&
          (!filters.expiryTo ||
            new Date(t.expiryDate) <= new Date(filters.expiryTo))
      )
      .sort((a, b) => {
        if (filters.sortBy === "priceLowHigh") return a.minPrice - b.minPrice;
        if (filters.sortBy === "priceHighLow") return b.maxPrice - a.maxPrice;
        if (filters.sortBy === "expirySoon")
          return new Date(a.expiryDate) - new Date(b.expiryDate);
        if (filters.sortBy === "expiryLate")
          return new Date(b.expiryDate) - new Date(a.expiryDate);
        return 0;
      });
    setTenders(filteredTenders);
  }, [filters]);

  return (
    <div className=" min-h-screen">
      {/* Sticky filters */}
      <TenderFilters
        filters={filters}
        setFilters={setFilters}
        tenderCount={emptyArray?.length}
      />

      <div className="grid grid-cols-1 2xl:grid-cols-3  gap-6">
        {tenders.map((tender, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:bg-gray-100  transition-shadow duration-200"
          >
            {/* Logo / Icon placeholder */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-blue-500 bg-blue-100 px-2 py-1 rounded-xl font-semibold text-sm">
                {tender.category}
              </div>
              <span
                className={`
            px-3 py-1 rounded-xl text-sm font-semibold
            ${
              tender.status === "Urgent"
                ? "bg-red-50 text-red-600"
                : tender.status === "Closing Soon"
                ? "bg-orange-50 text-orange-600"
                : "bg-green-50 text-green-600"
            }
          `}
              >
                {tender.status}
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {tender.name}
            </h2>

            <p className="text-sm mb-1 text-gray-700">
              <strong>Company:</strong> {tender.company}
            </p>
            <p className="text-sm mb-1 text-gray-700">
              <strong>Description:</strong> {tender.description}
            </p>

            <div className="flex justify-between  items-center mt-3 text-sm text-gray-600">
              <p>
                <strong>Expiry Date: </strong>

                {tender.expiryDate}
              </p>
            </div>

            <div className="flex flex-col mt-4">
              <div className="flex-col text-left text-lg font-bold text-green-600">
                Budget: ₹{tender.minPrice} - {tender.maxPrice}
              </div>
              <button className="flex-col px-3 py-2 rounded-xl text-md mt-3 cursor-pointer bg-indigo-400 hover:bg-indigo-500 md:w-30 md:mx-auto">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTenders;

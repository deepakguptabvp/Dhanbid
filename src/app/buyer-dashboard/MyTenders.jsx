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
    <div className=" bg-gray-100 ">
      {/* Sticky filters */}
      <TenderFilters
        filters={filters}
        setFilters={setFilters}
        tenderCount={emptyArray?.length}
      />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 overflow-y-auto max-h-screen"
        style={{ height: `${height}px` }}
      >
        {emptyArray.map((tender, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Logo / Icon placeholder */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-orange-500 bg-orange-100 p-3 rounded-xl font-semibold text-md">
                {tender.tenderCategory}
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {tender.tenderName}
            </h2>

            <p className="text-sm mb-1 text-gray-700">
              <strong>Company:</strong> {tender.companyName}
            </p>
            <p className="text-sm mb-1 text-gray-700">
              <strong>Description:</strong> {tender.tenderDescription}
            </p>

            <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
              <p>
                <strong>Bid Date:</strong>
                <br />
                {tender.bidSubmissionDate}
              </p>
              <p>
                <strong>Opening:</strong>
                <br />
                {tender.tenderOpeningDate}
              </p>
            </div>

            <div className="flex flex-col mt-4">
              <div className="flex-col text-left text-lg font-bold text-green-600">
                Price: ₹{tender.minimumPrice} - {tender.maximumPrice}
              </div>
              <button className="flex-col bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-md mt-3">
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

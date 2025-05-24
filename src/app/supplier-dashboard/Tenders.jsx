import { useState, useEffect } from "react";
import TenderFilters from "../components/supplier-dashboard/TenderFilters";
import TenderList from "../components/supplier-dashboard/TenderList";
import { sampleTenders } from "../data/categories";

export default function TendersPage({ setCreateBid, setActiveSection }) {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    company: "",
    minPrice: "",
    maxPrice: "",
    expiryFrom: "",
    expiryTo: "",
    sortBy: "",
  });

  const [height, setHeight] = useState(0);
  const [tenders, setTenders] = useState(sampleTenders);

  useEffect(() => {
    const headerHeight = 200;
    setHeight(window.innerHeight - headerHeight);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const filteredTenders = sampleTenders?.filter((t) => {
        return (
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
        );
      })
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
    <div
      className="max-h-screen flex flex-col py-6 p-4 max-w-full mx-auto
                 bg-black backdrop-blur-md
                 border border-gray-700 shadow-lg
                 text-gray-200"
      style={{
        boxShadow:
          "0 4px 30px rgba(0, 0, 0, 0.6), inset 0 0 60px rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Filters */}
      <TenderFilters
        filters={filters}
        setFilters={setFilters}
        tenderCount={sampleTenders.length}
        className="mb-4"
      />

      {/* Scrollable list */}
      <div
        className="overflow-y-auto pr-3 rounded-lg"
        style={{
          height: height,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0))",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(12px)",
        }}
      >
        <TenderList
          tenders={tenders}
          setCreateBid={setCreateBid}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
}

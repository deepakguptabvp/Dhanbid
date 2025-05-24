import { useState, useMemo, useEffect } from "react";
import TenderFilters from "../components/supplier-dashboard/TenderFilters";
import TenderList from "../components/supplier-dashboard/TenderList";
import { sampleTenders } from "../data/categories";

export default function TendersPage({ setCreateBid, setActiveSection }) {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });
  const [height, setHeight] = useState(0);
  const [tenders, setTenders] = useState(sampleTenders);

  useEffect(() => {
    // Adjust dynamically if needed based on header height
    window.scrollTo({ top: 0, behavior: "smooth" });
    const headerHeight = 200; // estimate filter height
    setHeight(window.innerHeight - headerHeight);
  }, []);

  useEffect(() => {
    const filteredTenders = sampleTenders
      ?.filter(
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
    <div className="max-h-screen flex flex-col bg-white pb-4 max-w-6xl mx-auto">
      {/* <h1 className="text-3xl font-bold mb-2">Browse Tenders</h1> */}

      {/* Sticky filters */}
      <TenderFilters
        filters={filters}
        setFilters={setFilters}
        tenderCount={sampleTenders?.length}
      />

      {/* Scrollable fixed-height list */}
      <div
        className="overflow-y-auto mt-4 pr-1"
        style={{ height: `${height}px` }}
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

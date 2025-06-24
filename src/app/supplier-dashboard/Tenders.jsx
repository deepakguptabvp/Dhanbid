import { useState, useEffect } from "react";
import TenderFilters from "../components/supplier-dashboard/TenderFilters";
import TenderList from "../components/supplier-dashboard/TenderList";
import { sampleTenders } from "../data/categories";
import axiosAPI from "../api/useAxios";
import { useAppContext } from "../context/AppContext";

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
  const axios = axiosAPI();
  const { tenders, setTenders } = useAppContext();
  const getTenders = async () => {
    try {
      const { data } = await axios.get('/tenders');
      setTenders(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    const headerHeight = 200;
    setHeight(window.innerHeight - headerHeight);
    window.scrollTo({ top: 0, behavior: "smooth" });
    getTenders();
  }, []);

  useEffect(() => {
    const filteredTenders = tenders
      ?.filter((t) => {
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
    <div className="max-h-screen ">
      <TenderFilters
        filters={filters}
        setFilters={setFilters}
        tenderCount={sampleTenders.length}
      />
      {/* Scrollable list */}
      <div className=" pr-3 rounded-lg">
        <TenderList
          tenders={tenders}
          setCreateBid={setCreateBid}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
}

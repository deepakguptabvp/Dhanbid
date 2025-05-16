import { useState, useMemo, useEffect } from "react";
import TenderFilters from "../components/supplier-dashboard/TenderFilters";
import TenderList from "../components/supplier-dashboard/TenderList";
const sampleTenders = [
  {
    id: 1,
    tenderId: "TND-PLB-0001",
    name: "Require 10,000 Plastic Bottles",
    company: "AquaFresh Ltd",
    description: "Need 10,000 BPA-free plastic bottles for mineral water packaging.",
    expiryDate: "2025-06-30",
    minPrice: 50000,
    maxPrice: 150000,
    category: "Packaging",
    bids: [
      { supplier: "PolyPack Solutions", amount: 120000, date: "2025-05-10" },
      { supplier: "EcoBottle Inc.", amount: 130000, date: "2025-05-12" },
    ],
  },
  {
    id: 2,
    tenderId: "TND-CBX-0002",
    name: "Need 5 Tons of Corrugated Boxes",
    company: "QuickCart Pvt Ltd",
    description: "Looking for durable and eco-friendly corrugated boxes for shipment.",
    expiryDate: "2025-07-15",
    minPrice: 80000,
    maxPrice: 200000,
    category: "Packaging",
    bids: [
      { supplier: "BoxyKart", amount: 185000, date: "2025-05-14" },
      { supplier: "GreenWrap Co.", amount: 175000, date: "2025-05-16" },
    ],
  },
  {
    id: 3,
    tenderId: "TND-SRD-0003",
    name: "2000 Steel Rods for Factory Setup",
    company: "Infratech",
    description: "Require 2000 high-grade steel rods for structural construction.",
    expiryDate: "2025-07-20",
    minPrice: 300000,
    maxPrice: 600000,
    category: "Construction",
    bids: [
      { supplier: "SteelMax Ltd", amount: 550000, date: "2025-05-11" },
      { supplier: "IronWorks Co.", amount: 530000, date: "2025-05-13" },
    ],
  },
  {
    id: 4,
    tenderId: "TND-APT-0004",
    name: "500 Custom Printed T-Shirts",
    company: "EventX",
    description: "Need 500 branded T-Shirts for an upcoming corporate event.",
    expiryDate: "2025-07-10",
    minPrice: 20000,
    maxPrice: 50000,
    category: "Apparel",
    bids: [
      { supplier: "Printify", amount: 45000, date: "2025-05-09" },
      { supplier: "BrandThreads", amount: 47000, date: "2025-05-11" },
    ],
  },
];

export default function TendersPage({setCreateBid, setActiveSection}) {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    minPrice: '',
    maxPrice: '',
  });
const [height, setHeight] = useState(0);

  useEffect(() => {
    // Adjust dynamically if needed based on header height
    window.scrollTo({top:0,behavior:'smooth'})
    const headerHeight = 200; // estimate filter height
    setHeight(window.innerHeight - headerHeight);
  }, []);
  const filteredTenders = useMemo(() => {
    return sampleTenders.filter((t) => {
      const matchSearch = t.name.toLowerCase().includes(filters.search.toLowerCase());
      const matchCategory = filters.category ? t.category === filters.category : true;
      const matchMin = filters.minPrice ? t.minPrice >= +filters.minPrice : true;
      const matchMax = filters.maxPrice ? t.maxPrice <= +filters.maxPrice : true;
      return matchSearch && matchCategory && matchMin && matchMax;
    });
  }, [filters]);

  return (
    <div className="max-h-screen flex flex-col bg-white pb-4 max-w-6xl mx-auto">
      {/* <h1 className="text-3xl font-bold mb-2">Browse Tenders</h1> */}

      {/* Sticky filters */}
      <TenderFilters filters={filters} setFilters={setFilters} />

      {/* Scrollable fixed-height list */}
      <div
        className="overflow-y-auto mt-4 pr-1"
        style={{ height: `${height}px` }}
      >
        <TenderList tenders={filteredTenders} setCreateBid={setCreateBid} setActiveSection={setActiveSection}/>
      </div>
    </div>
  );
}
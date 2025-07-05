import React, { useEffect, useState } from "react";
import TenderFilters from "../components/supplier-dashboard/TenderFilters";
import axiosAPI from "../api/useAxios";
import { useAppContext } from "../context/AppContext";
import { FiEdit2 } from "react-icons/fi";
import TenderDetailsModal from "./TenderDetails";

const MyTenders = ({ setActiveSection, setId }) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  const getTenderStatus = (timelineDate) => {
    const today = new Date();
    const deadline = new Date(timelineDate);
    const diffInDays = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));

    if (diffInDays < 0) return "Expired";
    if (diffInDays <= 2) return "Closing Soon";
    return "Live";
  };

  const [height, setHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [tenderToShow, setTenderToShow] = useState(null);
  const axios = axiosAPI();
  const { myTenders, setMyTenders } = useAppContext();
  const getTenders = async () => {
    try {
      const { data } = await axios.get('/tenders/my');
      setMyTenders(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    // Adjust dynamically if needed based on header height
    window.scrollTo({ top: 0, behavior: "smooth" });
    const headerHeight = 200; // estimate filter height
    setHeight(window.innerHeight - headerHeight);
    getTenders();
  }, []);

  useEffect(() => {
    const filteredTenders = myTenders?.filter(
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
    setMyTenders(filteredTenders);
  }, [filters]);

  return (
    <div className=" min-h-screen dark:bg-white">
      {/* Sticky filters */}
      <TenderFilters
        filters={filters}
        setFilters={setFilters}
        tenderCount={myTenders?.length}
      />

      <div className="grid grid-cols-1 2xl:grid-cols-3  gap-6">
        {myTenders?.map((tender, index) => {
          const status = getTenderStatus(tender.timeline);
          return(
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
    ${status === "Expired"
                    ? "bg-gray-100 text-gray-500"
                    : status === "Closing Soon"
                      ? "bg-orange-50 text-orange-600"
                      : "bg-green-50 text-green-600"}
  `}
              >
                {status}
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {tender.requirement}
            </h2>

            <p className="text-sm mb-1 text-gray-700">
              <strong>Location:</strong> {tender.location}
            </p>
            <p className="text-sm mb-1 text-gray-700">
              <strong>Quantity:</strong> {tender.quantity}
            </p>
            <p className="text-sm mb-1 text-gray-700">
              <strong>Sub Category:</strong> {tender.subcategory}
            </p>

            <div className="flex justify-between  items-center mt-3 text-sm text-gray-600">
              <p>
                <strong>Closing Date: </strong>

                {formatDate(tender.timeline)}
              </p>
            </div>

            <div className="flex flex-col mt-4">
              <div className="flex-col text-left text-lg font-bold text-green-600">
                Budget: ₹{tender.minPrice} - {tender.maxPrice}
              </div>
              <div className="flex gap-1.5 mt-4">
                <button onClick={() => {
                  setId(tender?._id);
                  setTenderToShow(tender)
                  setIsOpen(true)}} className="flex-col px-3 py-2 rounded-xl text-md mt-3 cursor-pointer bg-[#0200b9] hover:bg-indigo-500 md:w-30 md:mx-auto">
                  View Details
                </button>
                <button onClick={() => {
                  setId(tender?._id);
                  setActiveSection('edit-tender');
                }} className="flex justify-center items-center gap-2 px-3 py-2 rounded-xl text-md mt-3 cursor-pointer bg-yellow-400 hover:bg-yellow-500 md:w-30 md:mx-auto">
                  <FiEdit2 /> Edit
                </button>
              </div>
            </div>
          </div>
        )})}
        <TenderDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} tender={tenderToShow} setActiveSection={setActiveSection} setId={setId}/>
      </div>
    </div>
  );
};

export default MyTenders;

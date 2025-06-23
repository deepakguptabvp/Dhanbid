import React from "react";
import { FaTimes } from "react-icons/fa";

const TenderDetailsModal = ({ isOpen, setIsOpen, tender }) => {
  if (!isOpen || !tender) return null;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4 bg-indigo-600 text-white rounded-t-2xl">
          <h2 className="text-lg font-semibold">Tender Details</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-xl hover:text-gray-300 transition" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3 text-sm text-gray-700">
          <p><strong>Requirement:</strong> {tender.requirement}</p>
          <p><strong>Category:</strong> {tender.category}</p>
          <p><strong>Subcategory:</strong> {tender.subcategory}</p>
          <p><strong>Location:</strong> {tender.location}</p>
          <p><strong>Quantity:</strong> {tender.quantity}</p>
          <p><strong>Timeline:</strong> {formatDate(tender.timeline)}</p>
          <p><strong>Min Price:</strong> ₹{tender.minPrice || "-"}</p>
          <p><strong>Max Price:</strong> ₹{tender.maxPrice || "-"}</p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 flex justify-end rounded-b-2xl">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenderDetailsModal;

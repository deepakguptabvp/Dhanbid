"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddTender = ({ emptyArray, setEmptyArray, setActiveSection }) => {
  const [tenderName, setTenderName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [tenderCategory, setTenderCategory] = useState("");
  const [tenderDescription, setTenderDescription] = useState("");
  const [bidSubmissionDate, setBidSubmissionDate] = useState("");
  const [tenderOpeningDate, setTenderOpeningDate] = useState("");
  const [minimumPrice, setMinimumPrice] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for required fields (you can add more validation as needed)
    if (
      !tenderName ||
      !companyName ||
      !tenderCategory ||
      !tenderDescription ||
      !bidSubmissionDate ||
      !tenderOpeningDate ||
      !minimumPrice ||
      !maximumPrice
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Simulate saving the tender
    const tenderData = {
      tenderName,
      companyName,
      tenderCategory,
      tenderDescription,
      bidSubmissionDate,
      tenderOpeningDate,
      minimumPrice,
      maximumPrice,
    };

    console.log("Tender submitted:", tenderData);

    setEmptyArray([tenderData, ...emptyArray]);

    toast.success("Tender submitted successfully!");
    setActiveSection("my-tenders");

    // Reset the form (optional)
    setTenderName("");
    setCompanyName("");
    setTenderCategory("");
    setTenderDescription("");
    setBidSubmissionDate("");
    setTenderOpeningDate("");
    setMinimumPrice("");
    setMaximumPrice("");
  };

  return (
    <div className="flex flex-col mx-auto p-4 max-w-2xl min-h-screen text-black">
      <div className="w-full bg-gray-200 p-6 rounded-xl shadow-lg border">
        <h1 className="text-2xl py-3 font-bold text-center">Add New Tender</h1>

        {/* tender form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Tender Name */}
          <div className="flex flex-col">
            <label htmlFor="tenderName" className="pb-1 font-semibold text-sm">
              Tender Name
            </label>
            <input
              id="tenderName"
              type="text"
              value={tenderName}
              onChange={(e) => setTenderName(e.target.value)}
              className="border rounded-md pl-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label htmlFor="companyName" className="text-sm font-semibold pb-1">
              Company / Organization Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="border rounded-md pl-2 py-2"
              required
            />
          </div>

          {/* Tender Category */}
          <div className="flex flex-col">
            <label
              htmlFor="tenderCategory"
              className="pb-1 font-semibold text-sm"
            >
              Tender Category
            </label>
            <input
              type="text"
              id="tenderCategory"
              value={tenderCategory}
              onChange={(e) => setTenderCategory(e.target.value)}
              className="border rounded-md pl-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Tender Description */}
          <div className="flex flex-col">
            <label
              htmlFor="tenderDescription"
              className="pb-1 font-semibold text-sm"
            >
              Tender Description
            </label>
            <input
              type="text"
              id="tenderDescription"
              value={tenderDescription}
              onChange={(e) => setTenderDescription(e.target.value)}
              className="border rounded-md pl-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Bid Dates */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1 pb-4 md:pb-0">
              <label
                htmlFor="bidSubmissionDeadline"
                className="text-sm font-semibold pb-1"
              >
                Bid Submission Deadline
              </label>
              <input
                type="date"
                id="bidSubmissionDeadline"
                value={bidSubmissionDate}
                onChange={(e) => setBidSubmissionDate(e.target.value)}
                className="border rounded-md pl-2 py-2"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="tenderOpeningDate"
                className="text-sm font-semibold pb-1"
              >
                Tender Opening Date
              </label>
              <input
                type="date"
                id="tenderOpeningDate"
                value={tenderOpeningDate}
                onChange={(e) => setTenderOpeningDate(e.target.value)}
                className="border rounded-md pl-2 py-2"
                required
              />
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1 pb-4 md:pb-0">
              <label
                htmlFor="minimumPrice"
                className="pb-1 font-semibold text-sm"
              >
                Minimum Price
              </label>
              <input
                id="minimumPrice"
                type="number"
                value={minimumPrice}
                onChange={(e) => setMinimumPrice(e.target.value)}
                className="rounded-md pl-3 py-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="maximumPrice"
                className="pb-1 font-semibold text-sm"
              >
                Maximum Price
              </label>
              <input
                id="maximumPrice"
                type="number"
                value={maximumPrice}
                onChange={(e) => setMaximumPrice(e.target.value)}
                className="rounded-md pl-3 py-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                required
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" required />
            <label htmlFor="termsConditions" className="text-md">
              I agree to the terms & conditions. *
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition cursor-pointer"
            >
              Submit Tender
            </button>
            <button
              type="button"
              onClick={() => toast("Saved as Draft")}
              className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white cursor-pointer px-5 py-2 rounded-lg font-semibold text-sm transition"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTender;

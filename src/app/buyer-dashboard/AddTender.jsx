"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddTender = ({ emptyArray, setEmptyArray, setActiveSection }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  // const [bidSubmissionDate, setBidSubmissionDate] = useState("");
  // const [tenderOpeningDate, setTenderOpeningDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for required fields (you can add more validation as needed)
    if (
      !name ||
      !company ||
      !category ||
      !description ||
      !expiryDate ||
      !minPrice ||
      !maxPrice
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Simulate saving the tender
    const tenderData = {
      name,
      company,
      category,
      description,
      expiryDate,
      minPrice,
      maxPrice,
    };

    console.log("Tender submitted:", tenderData);

    setEmptyArray([tenderData, ...emptyArray]);

    toast.success("Tender submitted successfully!");
    setActiveSection("my-tenders");

    // Reset the form (optional)
    setName("");
    setCompany("");
    setCategory("");
    setDescription("");
    setExpiryDate("");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="flex flex-col mx-auto p-4 max-w-2xl min-h-screen text-black">
      <div className="w-full bg-gray-200 p-6 rounded-xl shadow-lg border">
        <h1 className="text-2xl py-3 font-bold text-center">Add New Tender</h1>

        {/* tender form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Tender Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="pb-1 font-semibold text-sm">
              Tender Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md pl-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label htmlFor="company" className="text-sm font-semibold pb-1">
              Company / Organization Name
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border rounded-md pl-2 py-2"
              required
            />
          </div>

          {/* Tender Category */}
          <div className="flex flex-col">
            <label htmlFor="category" className="pb-1 font-semibold text-sm">
              Tender Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-md pl-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Tender Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="pb-1 font-semibold text-sm">
              Tender Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-md pl-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Bid Dates */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1 pb-4 md:pb-0">
              <label
                htmlFor="expiryDate"
                className="text-sm font-semibold pb-1"
              >
                Expiry Date
              </label>
              <input
                type="date"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="border rounded-md pl-2 py-2"
                required
              />
            </div>
            {/* <div className="flex flex-col flex-1">
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
            </div> */}
          </div>

          {/* Price Range */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1 pb-4 md:pb-0">
              <label htmlFor="minPrice" className="pb-1 font-semibold text-sm">
                Minimum Price
              </label>
              <input
                id="minPrice"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="rounded-md pl-3 py-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="maxPrice" className="pb-1 font-semibold text-sm">
                Maximum Price
              </label>
              <input
                id="maxPrice"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
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

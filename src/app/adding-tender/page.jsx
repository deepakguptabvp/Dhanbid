import React from "react";

const page = () => {
  return (
    <div className="flex flex-col mx-auto p-4 max-w-2xl min-h-screen">
      <div className="w-full bg-gray-200 p-6 rounded-xl shadow-lg border">
        <h1 className="text-2xl py-3 font-bold text-center">Add New Tender</h1>
        <form className="space-y-5">
          {/* Tender Title */}
          <div className="flex flex-col">
            <label htmlFor="tenderTitle" className="pb-1 font-semibold text-sm">
              Tender Title
            </label>
            <input
              type="text"
              id="tenderTitle"
              className="border rounded-md pl-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Tender Id and Dapartment/organisation */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1 pb-4 md:pb-0">
              <label htmlFor="tenderId" className="text-sm font-semibold pb-1">
                Tender Id *
              </label>
              <input
                type="text"
                id="tenderId"
                className="border rounded-md pl-2 py-2"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="tenderId" className="text-sm font-semibold pb-1">
                Department / Organization
              </label>
              <input
                type="text"
                id="tenderId"
                className="border rounded-md pl-2 py-2"
                required
              />
            </div>
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
              className="border rounded-md pl-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Location and Estimated Cost */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1 pb-4 md:pb-0">
              <label htmlFor="location" className="text-sm font-semibold pb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="border rounded-md pl-2 py-2"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="estimatdCost"
                className="text-sm font-semibold pb-1"
              >
                Estimated Cost
              </label>
              <input
                type="text"
                id="estimatedCost"
                className="border rounded-md pl-2 py-2"
                required
              />
            </div>
          </div>

          {/* Bid Submission Deadline and Tender opening Date */}
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
                className="border rounded-md pl-2 py-2"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="tenderOpeningDate"
                className="text-sm font-semibold pb-1"
              >
                Tender opening Date
              </label>
              <input
                type="date"
                id="tenderOpeningDate"
                className="border rounded-md pl-2 py-2"
                required
              />
            </div>
          </div>

          {/* Documents Upload */}
          <div className="flex flex-col">
            <label
              htmlFor="documentsUpload"
              className="pb-1 font-semibold text-sm"
            >
              Documents Upload *
            </label>
            <input
              id="documentsUpload"
              type="file"
              accept=".pdf,.doc,.docx"
              className="border p-2  rounded-md cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Email and Phone No */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1 pb-4 md:pb-0">
              <label htmlFor="name" className="pb-1 font-semibold text-sm">
                Name *
              </label>
              <input
                id="name"
                type="name"
                className="rounded-md pl-3 py-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="phone" className="pb-1 font-semibold text-sm">
                Phone No. *
              </label>
              <input
                id="phone"
                type="tel"
                className="rounded-md pl-3 py-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                required
              />
            </div>
          </div>
          {/* Email  */}
          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="pb-1 font-semibold text-sm">
              Email *
            </label>
            <input
              id="email"
              type="email"
              className="rounded-md pl-3 py-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Terms & Conditions */}
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
              className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white
              cursor-pointer px-5 py-2 rounded-lg font-semibold text-sm transition"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;

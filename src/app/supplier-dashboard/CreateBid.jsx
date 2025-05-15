import React from "react";

const CreateBid = () => {
  return (
    <div className="flex flex-col max-w-2xl p-4 mx-auto min-h-screen dark:text-white">
      <div className="w-full bg-gray-50 dark:bg-gray-500 p-6 rounded-xl shadow-lg border">
        <h1 className="text-2xl font-bold py-3 text-center">Submit Bid</h1>
        <form className="space-y-5">
          {/* Tender ID */}
          <div className="flex flex-col">
            <label htmlFor="tenderId" className="pb-1 font-semibold text-sm">
              Tender ID *
            </label>
            <input
              id="tenderId"
              type="text"
              className="rounded-md pl-3 py-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Bidder Name and Bidder Type */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="bidderName"
                className="pb-1 font-semibold text-sm"
              >
                Bidder Name *
              </label>
              <input
                id="bidderName"
                type="text"
                className="rounded-md pl-3 py-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="bidderType"
                className="pb-1 font-semibold text-sm"
              >
                Bidder Type *
              </label>
              <input
                id="bidderType"
                type="text"
                className="rounded-md pl-3 py-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                required
              />
            </div>
          </div>

          {/* Bid Description */}
          <div className="flex flex-col">
            <label
              htmlFor="bidDescription"
              className="pb-1 font-semibold text-sm"
            >
              Bid Description *
            </label>
            <textarea
              id="bidDescription"
              rows="3"
              className="rounded-md pl-3 pt-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            ></textarea>
          </div>

          {/* Company Profile Upload */}
          <div className="flex flex-col">
            <label
              htmlFor="companyProfile"
              className="pb-1 font-semibold text-sm"
            >
              Company Profile *
            </label>
            <input
              id="companyProfile"
              type="file"
              accept=".pdf,.doc,.docx"
              className="border p-2  rounded-md cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Contact Person */}
          <div className="flex flex-col">
            <label
              htmlFor="contactPerson"
              className="pb-1 font-semibold text-sm"
            >
              Contact Person *
            </label>
            <input
              id="contactPerson"
              type="text"
              className="rounded-md pl-3 py-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              required
            />
          </div>

          {/* Email and Phone No */}
          <div className="flex flex-col md:flex-row md:space-x-4">
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

          {/* Eligibility Checkbox */}
          <div className="flex flex-col">
            <label className="pb-2 font-semibold text-sm">
              Eligibility Criteria *
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="criteria"
                className="w-4 h-4"
                required
              />
              <label
                htmlFor="criteria"
                className="text-gray-800 dark:text-gray-300 text-sm"
              >
                I confirm that I meet the eligibility criteria.
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition cursor-pointer"
            >
              Submit Bid
            </button>
            <button
              type="button"
              className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white
              cursor-pointer px-5 py-2 rounded-lg font-semibold text-sm transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBid;

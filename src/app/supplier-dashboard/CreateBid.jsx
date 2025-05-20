import React, { useState } from "react";
import toast from "react-hot-toast";

const CreateBid = ({ createBid: tender, setActiveSection, setBids }) => {
  const [bidderName, setBidderName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompanyName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmed = window.confirm(
      `Are you sure you want to submit a bid of ₹${amount} for Tender ID: ${tender?.tenderId}?`
    );

    if (!confirmed) return;

    try {
      const bidData = {
        tenderId: tender?.tenderId,
        bidderName,
        company,
        amount: parseFloat(amount),
        description,
      };

      // Update local bids state (demo only)
      setBids((prev) => [bidData, ...prev]);
      setActiveSection('my-biddings');
      toast.success(`Submitted bid for ${tender?.tenderId} at ₹${amount}`);

      // Optionally clear the form
      setBidderName("");
      setAmount("");
      setDescription("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col max-w-3xl mx-auto p-6 min-h-screen dark:text-white">
      <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Tender Details */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">Tender Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-gray-700 dark:text-gray-200">
            <p><strong>ID:</strong> {tender?.tenderId}</p>
            <p><strong>Title:</strong> {tender?.name}</p>
            <p><strong>Company:</strong> {tender?.company}</p>
            <p><strong>Category:</strong> {tender?.category}</p>
            <p><strong>Expiry:</strong> {tender?.expiryDate}</p>
            <p><strong>Budget:</strong> ₹{tender?.minPrice} - ₹{tender?.maxPrice}</p>
            <p className="md:col-span-2"><strong>Description:</strong> {tender?.description}</p>
          </div>

          {/* Other Bids */}
          {tender?.bids?.length > 0 && (
            <div className="mt-5">
              <p className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Competing Bids:
              </p>
              <div className="flex flex-wrap gap-2">
                {tender.bids.map((bid, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    ₹{bid.amount.toLocaleString("en-IN")}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Submit Bid Form */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-6">Place Your Bid</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="bidderName" className="block text-sm font-medium mb-1">
                Bidder Name <span className="text-red-500">*</span>
              </label>
              <input
                id="bidderName"
                type="text"
                value={bidderName}
                onChange={(e) => setBidderName(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium mb-1">
                Bid Amount (INR) <span className="text-red-500">*</span>
              </label>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min={tender?.minPrice}
                max={tender?.maxPrice}
                className="w-full border rounded-md px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be between ₹{tender?.minPrice} and ₹{tender?.maxPrice}
              </p>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                Bid Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition"
              >
                Submit Bid
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBid;

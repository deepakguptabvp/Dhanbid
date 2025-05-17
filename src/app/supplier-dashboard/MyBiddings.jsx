import React, { useState } from "react";

const MyBids = ({ bids }) => {
  const [selectedBid, setSelectedBid] = useState(null);

  const handleClose = () => setSelectedBid(null);

  return (
    <div className="max-w-6xl mx-auto px-4 pb-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        My Bids
      </h2>

      {bids.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No bids placed yet. Start bidding to see them here!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-h-[75vh] pb-8 overflow-y-auto px-2 pr-2">
          {bids.map((bid, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {bid.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Tender ID:</span> {bid.tenderId}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Company:</span> {bid.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Bidder:</span> {bid.bidderName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Amount:</span> ₹{bid.amount}
                </p>
              </div>

              <div className="mt-4 text-right">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  onClick={() => setSelectedBid(bid)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedBid && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] px-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Bid Details
            </h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Name:</strong> {selectedBid.name}</p>
              <p><strong>Tender ID:</strong> {selectedBid.tenderId}</p>
              <p><strong>Company:</strong> {selectedBid.company}</p>
              <p><strong>Bidder Name:</strong> {selectedBid.bidderName}</p>
              <p><strong>Amount:</strong> ₹{selectedBid.amount}</p>
              <p><strong>Email:</strong> {selectedBid.email||"abc@mail.com"}</p>
              <p><strong>Phone:</strong> {selectedBid.phone||"+91-98768XXXXX"}</p>
              <p><strong>Submitted At:</strong> {new Date().toLocaleString()}</p>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBids;

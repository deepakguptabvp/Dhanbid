"use client";

export default function TenderList({
  tenders,
  setCreateBid,
  setActiveSection,
}) {
  return (
    <div className="space-y-6 pb-20">
      {tenders.length === 0 ? (
        <p className="text-center text-gray-700">
          No tenders match the filters.
        </p>
      ) : (
        tenders.map((tender) => (
          <div
            key={tender.id}
            className= "z-0 bg-white p-6 rounded-xl border space-y-3 border-gray-200 overflow-hidden hover:shadow-lg hover:bg-gray-100  transition-shadow duration-200"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold drop-shadow-md">
                {tender.name}
              </h2>
              <span className="text-md font-semibold text-blue-700 bg-blue-200 p-2 rounded-lg">
                Expires:{" "}
                {new Date(tender.expiryDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>

            <p className="text-sm mb-1 text-gray-700">
              <strong>Company:</strong> {tender.company}
            </p>
            <p className="text-sm mb-1 text-gray-700">
              <strong>Category:</strong> {tender.category}
            </p>
            <p className="text-sm mb-1 text-gray-700">
              <strong>Description:</strong> {tender.description}
            </p>

            <div className="flex flex-col mt-4">
              <div className="flex-col text-left text-lg font-bold text-green-600">
                ₹{tender.minPrice} - ₹{tender.maxPrice}
              </div>
              <button
                onClick={() => {
                  setCreateBid(tender);
                  setActiveSection("create-bid");
                }}
                className="flex-col px-3 py-2 rounded-xl text-md mt-3 cursor-pointer bg-indigo-400 hover:bg-indigo-500 md:w-30 md:mx-auto"
              >
                Bid Now
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

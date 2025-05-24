'use client';

export default function TenderList({ tenders, setCreateBid, setActiveSection }) {
  return (
    <div className="space-y-6 pb-20">
      {tenders.length === 0 ? (
        <p className="text-center text-gray-400 italic">No tenders match the filters.</p>
      ) : (
        tenders.map((tender) => (
          <div
            key={tender.id}
            className="
              bg-[rgba(30,30,40,0.6)] 
              backdrop-blur-md 
              border border-gray-700 
              rounded-xl 
              shadow-lg 
              p-5
              hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]
              transition-shadow
              duration-300
              cursor-default
              text-gray-200
            "
            style={{
              boxShadow:
                "inset 0 0 15px rgba(255,255,255,0.1), 0 4px 20px rgba(59,130,246,0.3)",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0))",
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold drop-shadow-md">{tender.name}</h2>
              <span className="text-xs text-gray-400">
                Expires: {new Date(tender.expiryDate).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </span>
            </div>
            <p className="text-gray-300 mt-3 leading-relaxed">{tender.description}</p>
            <div className="text-sm text-gray-400 mt-2">
              Category: <strong className="text-gray-100">{tender.category}</strong> | Company:{" "}
              {tender.company || "N/A"}
            </div>
            <div className="mt-5 flex justify-between items-center">
              <span className="text-green-400 font-bold text-lg drop-shadow-md">
                ₹{tender.minPrice} - ₹{tender.maxPrice}
              </span>
              <button
                onClick={() => {
                  setCreateBid(tender);
                  setActiveSection("create-bid");
                }}
                className="
                  bg-gradient-to-r from-blue-600 to-indigo-700
                  hover:from-blue-700 hover:to-indigo-800
                  text-white px-5 py-2 rounded-lg
                  font-semibold shadow-lg
                  transition-colors duration-300
                  drop-shadow-md
                "
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
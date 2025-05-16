'use client';

export default function TenderList({ tenders, setCreateBid, setActiveSection }) {
    return (
        <div className="space-y-4 pb-8">
            {tenders.length === 0 ? (
                <p className="text-center text-gray-500">No tenders match the filters.</p>
            ) : (
                tenders.map((tender) => (
                    <div key={tender.id} className="bg-white shadow p-4 rounded-lg border">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">{tender.name}</h2>
                            <span className="text-xs text-gray-500">Expires: {tender.expiryDate}</span>
                        </div>
                        <p className="text-gray-700 mt-2">{tender.description}</p>
                        <div className="text-sm text-gray-600 mt-1">
                            Category: <strong>{tender.category}</strong> | Company: {tender.company || "N/A"}
                        </div>
                        <div className="mt-3 flex justify-between items-center">
                            <span className="text-green-600 font-bold">
                                ₹{tender.minPrice} - ₹{tender.maxPrice}
                            </span>
                            <button
                                onClick={() => {
                                    setCreateBid(tender);
                                    setActiveSection('create-bid');
                                }}
                                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-sm transition duration-200 ease-in-out"
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

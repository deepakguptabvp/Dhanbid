
export default function TenderDetails({ tender, setCreateBid, setActiveSection }) {
    const formatDate = (date) =>
        new Date(date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl mt-10 shadow">
            <div className="text-blue-500 bg-blue-100 px-3 py-1 rounded-xl w-fit text-sm font-medium mb-4">
                {tender.category}
            </div>

            <h1 className="text-3xl font-bold mb-2">{tender.requirement}</h1>

            <p className="text-gray-700 mb-2">
                <strong>Location:</strong> {tender.location}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Quantity:</strong> {tender.quantity}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Sub Category:</strong> {tender.subcategory}
            </p>

            <p className="text-gray-700 mb-2">
                <strong>Timeline:</strong> {formatDate(tender.timeline)}
            </p>

            <p className="text-green-600 font-semibold text-lg mt-4">
                Budget: ₹{tender.minPrice} - ₹{tender.maxPrice}
            </p>
            <button
                onClick={() => {
                    setCreateBid(tender);
                    setActiveSection("create-bid");
                }}
                className="flex-col px-3 py-2 rounded-xl text-md mt-3 cursor-pointer bg-[#0200b9] text-white hover:bg-indigo-500 md:w-30 md:mx-auto"
            >
                Bid Now
            </button>
        </div>
    );
}

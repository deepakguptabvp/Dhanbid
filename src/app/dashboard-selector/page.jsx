import Link from 'next/link';

const DashboardSelector = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Select Your Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
        {/* Buyer Dashboard Card */}
        <Link href="/buyer-dashboard">
          <div className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 p-8 text-center border border-blue-300">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Buyer Dashboard</h2>
            <p className="text-gray-600">View tenders, submit bids, and manage your purchase needs.</p>
          </div>
        </Link>

        {/* Supplier Dashboard Card */}
        <Link href="/supplier-dashboard">
          <div className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 p-8 text-center border border-green-300">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Supplier Dashboard</h2>
            <p className="text-gray-600">Manage your submissions, respond to tenders, and track bid status.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSelector;

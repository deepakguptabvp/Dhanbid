import Link from 'next/link';
import { FaUserTie, FaTruckMoving } from 'react-icons/fa'; // Buyer & Supplier icons

const DashboardSelector = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-white to-purple-300 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 drop-shadow-lg">
        Select Your Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* Buyer Dashboard */}
        <Link href="/buyer-dashboard" passHref>
          <div className="cursor-pointer backdrop-blur-md bg-white/30 border border-blue-400/40 hover:border-blue-600/60 hover:shadow-blue-500/30 shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out rounded-2xl p-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <FaUserTie className="text-blue-700 text-4xl drop-shadow-sm" />
              <h2 className="text-2xl font-semibold text-blue-800">Buyer Dashboard</h2>
              <p className="text-gray-700 mt-2 text-sm">
                View tenders, submit bids, and manage your purchase needs.
              </p>
            </div>
          </div>
        </Link>

        {/* Supplier Dashboard */}
        <Link href="/supplier-dashboard" passHref>
          <div className="cursor-pointer backdrop-blur-md bg-white/30 border border-green-400/40 hover:border-green-600/60 hover:shadow-green-500/30 shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out rounded-2xl p-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <FaTruckMoving className="text-green-700 text-4xl drop-shadow-sm" />
              <h2 className="text-2xl font-semibold text-green-800">Supplier Dashboard</h2>
              <p className="text-gray-700 mt-2 text-sm">
                Manage your submissions, respond to tenders, and track bid status.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSelector;

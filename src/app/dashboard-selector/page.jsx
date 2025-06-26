import Link from "next/link";

const DashboardSelector = () => {
  return (
    <div className=" flex flex-col items-center justify-center dark:bg-white dark:text-black">
      <div className="space-y-6 mb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 drop-shadow-lg pt-14">
          Welcome to Dhanbid
        </h1>

        <h1 className="text-xl font-medium text-center justify-center text-gray-600">
          Select your role to continue
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-4xl p-6 pb-20">
        {/* Buyer Dashboard */}
        <Link href="/buyer-dashboard" passHref>
          <div
            className="cursor-pointer backdrop-blur-lg bg-white/70 border border-blue-400/40
           hover:border-blue-600/60 hover:shadow-blue-500/30 shadow-lg hover:scale-[1.03] 
           transition-all duration-300 ease-in-out rounded-2xl p-8 text-center"
          >
            <div className="flex flex-col items-center gap-3">
              <img
                src="/dashboard-selector/buyer.png"
                alt="Buyer Image"
                className="h-40 w-40"
              />
              <h2 className="text-2xl font-semibold">I'm a Buyer</h2>
              <p className="text-gray-700 text-md">
                Post tenders, and manage your purchases.
              </p>
            </div>
          </div>
        </Link>

        {/* Supplier Dashboard */}
        <Link href="/supplier-dashboard" passHref>
          <div className="cursor-pointer backdrop-blur-md bg-white/30 border border-green-400/40 hover:border-green-600/60 hover:shadow-green-500/30 shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out rounded-2xl p-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <img
                src="/dashboard-selector/supplier.png"
                alt="Buyer Image"
                className="h-40 w-60"
              />
              <h2 className="text-2xl font-semibold ">I'm a supplier</h2>
              <p className="text-gray-700 text-md">
                Submit bids and grow your business widely.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSelector;

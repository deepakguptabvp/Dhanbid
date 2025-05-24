import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdOutlineGavel } from "react-icons/md";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BsClipboardCheck } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { PiSealCheckFill } from "react-icons/pi";
import { GoUnverified } from "react-icons/go";
export default function SupplierProfile({ supplier }) {
  const {
    name,
    email,
    number,
    address,
    category,
    gstin,
    isVerified,
    totalBids,
    successfulBids,
  } = supplier;

  const successRate =
    totalBids > 0 ? Math.round((successfulBids / totalBids) * 100) : 0;

  return (
    <div className=" bg-white px-4 flex justify-center ">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-10 border border-gray-200">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              {name?.charAt(0)}
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
                {name}
                {isVerified ? (
                  <span
                    className="relative group"
                    data-tooltip-id="verify-tip"
                    data-tooltip-content="Verified Supplier"
                  >
                    <PiSealCheckFill className="text-emerald-500 text-xl md:text-2xl mt-1 animate-pulse drop-shadow-md group-hover:scale-110 transition" />
                    <Tooltip id="verify-tip" />
                  </span>
                ):(<GoUnverified className="text-red-600" />)}
              </h2>
              <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full capitalize">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-10">
          <InfoRow icon={<HiOutlineMail />} label="Email" value={email} />
          <InfoRow icon={<HiPhone />} label="Phone" value={number} />
          <InfoRow icon={<HiLocationMarker />} label="Address" value={address} />
          <InfoRow icon={<MdOutlineGavel />} label="GSTIN" value={gstin} />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard
            title="Total Bids"
            value={totalBids}
            icon={<BsClipboardCheck className="text-2xl text-purple-500" />}
          />
          <StatCard
            title="Successful Bids"
            value={successfulBids}
            icon={<FiUser className="text-2xl text-green-500" />}
          />
          <StatCard
            title="Success Rate"
            value={`${successRate}%`}
            icon={<MdOutlineGavel className="text-2xl text-blue-500" />}
          />
        </div>
      </div>
    </div>
  );
}

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-xl text-indigo-500 mt-1">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      <p className="text-base text-gray-800">{value}</p>
    </div>
  </div>
);

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md p-6 transition-all duration-300 text-center">
    <div className="flex justify-center mb-3">{icon}</div>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <p className="text-sm text-gray-500 mt-1">{title}</p>
  </div>
);

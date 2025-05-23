import {
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black p-6 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-[0_10px_40px_rgba(255,255,255,0.05)] p-10 border border-white/10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              {name?.charAt(0)}
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
                {name}
                {isVerified ? (
                  <span
                    className="relative group"
                    data-tooltip-id="verify-tip"
                    data-tooltip-content="Verified Supplier"
                  >
                    <PiSealCheckFill className="text-emerald-400 text-xl md:text-2xl mt-1 animate-pulse drop-shadow-md group-hover:scale-110 transition" />
                    <Tooltip id="verify-tip" />
                  </span>
                ) : (
                  <GoUnverified className="text-red-500 text-xl" />
                )}
              </h2>
              <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-purple-800/40 text-purple-200 rounded-full capitalize">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90 mb-10">
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
            icon={<BsClipboardCheck className="text-2xl text-purple-400" />}
          />
          <StatCard
            title="Successful Bids"
            value={successfulBids}
            icon={<FiUser className="text-2xl text-green-400" />}
          />
          <StatCard
            title="Success Rate"
            value={`${successRate}%`}
            icon={<MdOutlineGavel className="text-2xl text-blue-400" />}
          />
        </div>
      </div>
    </div>
  );
}

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-xl text-indigo-400 mt-1">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-white/60">{label}</p>
      <p className="text-base text-white">{value}</p>
    </div>
  </div>
);

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white/10 border border-white/10 rounded-2xl backdrop-blur-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
    <div className="flex justify-center mb-3">{icon}</div>
    <p className="text-2xl font-bold text-white">{value}</p>
    <p className="text-sm text-white/60 mt-1">{title}</p>
  </div>
);

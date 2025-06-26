import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdOutlineGavel } from "react-icons/md";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BsClipboardCheck } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { PiSealCheckFill } from "react-icons/pi";
import { GoUnverified } from "react-icons/go";
import axiosAPI from "../api/useAxios";
import { useAppContext } from "../context/AppContext";
import { businessCategories } from "../data/categories";

export default function SupplierProfile({ supplier }) {
  const [editMode, setEditMode] = useState(false);
  const axios = axiosAPI();
  const { user } = useAppContext();
  const [form, setForm] = useState({ ...user });
  console.log(user);
  const successRate =
    form.totalBids > 0
      ? Math.round((form.successfulBids / form.totalBids) * 100)
      : 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`/auth/profile/${user._id}`, form);
      setForm(res.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating supplier:", error);
    }
  };

  return (
    <div className="bg-white md:mt-10 flex justify-center">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-3xl p-4 md:p-10 border border-gray-200">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-5">
            <div className="w-15 h-15 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              {form.name?.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-semibold text-gray-800 flex items-center gap-2">
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="text-xl md:text-3xl font-semibold border-b border-gray-400 outline-none bg-transparent"
                  />
                ) : (
                  form.name
                )}
                {form.isVerified ? (
                  <span
                    className="relative group"
                    data-tooltip-id="verify-tip"
                    data-tooltip-content="Verified Supplier"
                  >
                    <PiSealCheckFill className="text-emerald-500 text-xl md:text-2xl mt-1 animate-pulse drop-shadow-md group-hover:scale-110 transition" />
                    <Tooltip id="verify-tip" />
                  </span>
                ) : (
                  <GoUnverified className="text-red-600" />
                )}
              </h2>
              {/* {editMode ? (
                <>
                  <div className="mb-4">
                    <label className="text-sm text-gray-500 font-medium">Category</label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={(e) => {
                        const selectedCategory = e.target.value;
                        setForm((prev) => ({
                          ...prev,
                          category: selectedCategory,
                          subcategory: "", // Reset subcategory
                        }));
                      }}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                    >
                      <option value="">Select Category</option>
                      {businessCategories.map((cat) => (
                        <option key={cat.id} value={cat.category}>
                          {cat.category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500 font-medium">Subcategory</label>
                    <select
                      name="subcategory"
                      value={form.subcategory}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                      disabled={!form.category}
                    >
                      <option value="">Select Subcategory</option>
                      {businessCategories
                        .find((cat) => cat.category === form.category)
                        ?.subcategories.map((sub, idx) => (
                          <option key={idx} value={sub}>
                            {sub}
                          </option>
                        ))}
                    </select>
                  </div>
                </>
              ) : (
                <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full capitalize">
                  {form.category} {form.subcategory ? `— ${form.subcategory}` : ""}
                </span>
              )} */}
            </div>
          </div>

          {/* Edit / Save Button */}
          <div>
            {editMode ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-xl"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-xl"
              >
                Edit
              </button>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-10">
          <InfoRow
            icon={<HiOutlineMail />}
            label="Email"
            value={form.email}
            name="email"
            editable={editMode}
            onChange={handleChange}
          />
          <InfoRow
            icon={<HiPhone />}
            label="Phone"
            value={form.phone}
            name="number"
            // editable={editMode}
            onChange={handleChange}
          />
          <InfoRow
            icon={<HiLocationMarker />}
            label="Address"
            value={form.address}
            name="address"
            editable={editMode}
            onChange={handleChange}
          />
          {/* <InfoRow
            icon={<MdOutlineGavel />}
            label="GSTIN"
            value={form.gstin}
            name="gstin"
            editable={editMode}
            onChange={handleChange}
          /> */}
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard
            title="Total Bids"
            value={form.totalBids}
            icon={<BsClipboardCheck className="text-2xl text-purple-500" />}
          />
          <StatCard
            title="Successful Bids"
            value={form.successfulBids}
            icon={<FiUser className="text-2xl text-green-500" />}
          />
          <StatCard
            title="Success Rate"
            value={`${successRate}%`}
            icon={<MdOutlineGavel className="text-2xl text-blue-500" />}
          />
        </div> */}
      </div>
    </div>
  );
}

// ✅ Editable InfoRow
const InfoRow = ({ icon, label, value, name, editable, onChange }) => (
  <div className="flex items-start gap-3">
    <div className="text-xl text-indigo-500 mt-1">{icon}</div>
    <div className="w-full">
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      {editable ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border-b border-gray-400 bg-transparent text-gray-800 focus:outline-none"
        />
      ) : (
        <p className="text-base text-gray-800">{value}</p>
      )}
    </div>
  </div>
);

// ✅ Stat Card
const StatCard = ({ title, value, icon }) => (
  <div className="bg-purple-200 border border-gray-200 rounded-2xl shadow hover:shadow-md p-6 transition-all duration-300 text-center">
    <div className="flex justify-center mb-3">{icon}</div>
    <p className="text-2xl font-bold text-gray-900">{value || 0}</p>
    <p className="text-sm text-gray-500 mt-1">{title}</p>
  </div>
);

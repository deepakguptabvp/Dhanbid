"use client";

import { useState } from "react";
import { businessCategories } from "../data/categories";
import toast from "react-hot-toast";

export default function EditProfile({ setSupplier, setActiveSection }) {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    category: "",
    address: "",
    gstin: "",
    totalBids: 0,
    successfulBids: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number, email, category, address, gstin, totalBids, successfulBids } = form;

    // Check if all main fields are filled (excluding bids)
    const isVerified = !!(name && number && email && category && address && gstin);

    setSupplier({
      ...form,
      isVerified,
    });

    toast.success('Updated Profile!');
    setActiveSection("my-profile");
  };


  return (
    <div className="min-h-screen flex  justify-center">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-10 border overflow-auto border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Number */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
            <input
              name="number"
              value={form.number}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Enter phone number"
              type="tel"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Enter email"
              type="email"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            >
              <option value="" disabled>Select a category</option>
              {businessCategories.map((cat, idx) => (
                <option key={idx} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
              placeholder="Enter address"
              rows="3"
            />
          </div>

          {/* GSTIN */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-700">GSTIN</label>
            <input
              name="gstin"
              value={form.gstin}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Enter GSTIN"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 cursor-pointer text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

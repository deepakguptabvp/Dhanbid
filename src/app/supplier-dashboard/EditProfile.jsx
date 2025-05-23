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
    const { name, number, email, category, address, gstin } = form;
    const isVerified = !!(name && number && email && category && address && gstin);

    setSupplier({ ...form, isVerified });
    toast.success("Updated Profile!");
    setActiveSection("my-profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#1e1e2f] via-[#11111b] to-[#1e1e2f] flex py-10 justify-center items-start px-4">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-10 overflow-auto text-gray-300">
        <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow">
          Edit Profile
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <FormField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          {/* Number */}
          <FormField
            label="Phone Number"
            name="number"
            value={form.number}
            onChange={handleChange}
            placeholder="Enter phone number"
            type="tel"
          />

          {/* Email */}
          <FormField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            type="email"
          />

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-400">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            >
              <option value="" disabled className="text-white
              ">
                Select a category
              </option>
              {businessCategories.map((cat, idx) => (
                <option className="text-black" key={idx} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-400">
              Address
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
              placeholder="Enter address"
              rows="3"
            />
          </div>

          {/* GSTIN */}
          <FormField
            label="GSTIN"
            name="gstin"
            value={form.gstin}
            onChange={handleChange}
            placeholder="Enter GSTIN"
            colSpan={2}
          />

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const FormField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  colSpan = 1,
}) => (
  <div className={`md:col-span-${colSpan}`}>
    <label className="block mb-1 text-sm font-medium text-gray-400">
      {label}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    />
  </div>
);

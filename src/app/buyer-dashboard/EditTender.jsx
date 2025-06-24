"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { businessCategories } from "../data/categories";
import axiosAPI from "../api/useAxios";

const EditTender = ({ id, setActiveSection }) => {
  const router = useRouter();
  const axios = axiosAPI();

  const [formData, setFormData] = useState({
    requirement: "",
    category: "",
    subcategory: "",
    location: "",
    quantity: "",
    timeline: "",
    minPrice: "",
    maxPrice: "",
    files: null,
    agreed: false,
  });

  const [subcategories, setSubcategories] = useState([]);
  const [step, setStep] = useState(1);

  // Fetch tender data
  useEffect(() => {
    const fetchTender = async () => {
      try {
        const res = await axios.get(`/tenders/${id}`);
        const tender = res.data;

        setFormData({
          requirement: tender.requirement,
          category: tender.category,
          subcategory: tender.subcategory,
          location: tender.location,
          quantity: tender.quantity,
          timeline: tender.timeline?.split("T")[0],
          minPrice: tender.minPrice || "",
          maxPrice: tender.maxPrice || "",
          files: null,
          agreed: true,
        });
        if (formData.files && formData.files.length > 0) {
          for (let file of formData.files) {
            formPayload.append("files", file);
          }
        }
        const selectedCat = businessCategories.find(
          (item) => item.category === tender.category
        );
        setSubcategories(selectedCat?.subcategories || []);
      } catch (error) {
        toast.error("Failed to load tender.");
      }
    };

    fetchTender();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "category") {
      const selected = businessCategories.find(
        (item) => item.category === value
      );
      setSubcategories(selected?.subcategories || []);
      setFormData((prev) => ({ ...prev, category: value, subcategory: "" }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : type === "file" ? files : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confirm("Are you sure you want to update this tender?")) return;

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        if (key === "files" && val) {
          for (let file of val) formPayload.append("files", file);
        } else {
          formPayload.append(key, val);
        }
      });

      const res = await axios.patch(`/tenders/${id}`, formPayload);
      const updatedTender = res.data;
      setActiveSection("my-tenders");
      toast.success("Tender updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update tender.");
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 2));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="max-w-2xl mx-auto p-4 text-black dark:bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-center py-4">Edit Tender</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 border rounded-xl p-6 shadow-md"
      >
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">
                What do you need? *
              </label>
              <textarea
                name="requirement"
                rows="3"
                value={formData.requirement}
                onChange={handleChange}
                className="w-full border rounded-md p-2 text-sm"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 text-sm"
                  required
                >
                  <option value="">--- Select a Category ---</option>
                  {businessCategories.map((cat, idx) => (
                    <option key={idx} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Sub-Category *
                </label>
                <select
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 text-sm"
                  required
                >
                  <option value="">--- Select a Sub Category ---</option>
                  {subcategories.map((subcat, idx) => (
                    <option key={idx} value={subcat}>
                      {subcat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border rounded-md p-2 text-sm"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Quantity *</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Expiry Date *
                </label>
                <input
                  type="date"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 text-sm"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">
                  Minimum Budget
                </label>
                <input
                  type="number"
                  name="minPrice"
                  value={formData.minPrice}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 text-sm"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Maximum Budget
                </label>
                <input
                  type="number"
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Upload Files</label>
              <input
                type="file"
                name="files"
                onChange={handleChange}
                multiple
                className="w-full border rounded-md p-2 text-sm"
              />
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="w-4 h-4"
                required
              />
              <label className="text-sm">
                I agree to the terms & conditions *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
            >
              Update Tender
            </button>
          </div>
        )}

        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 border rounded-md cursor-pointer"
            >
              Back
            </button>
          )}
          {step < 2 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditTender;

// "use client";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { businessCategories } from "../data/categories";

// const AddTender = ({ emptyArray, setEmptyArray, setActiveSection }) => {
//   const [name, setName] = useState("");
//   const [company, setCompany] = useState("");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check for required fields (you can add more validation as needed)
//     if (
//       !name ||
//       !company ||
//       !category ||
//       !description ||
//       !expiryDate ||
//       !minPrice ||
//       !maxPrice
//     ) {
//       toast.error("Please fill in all required fields.");
//       return;
//     }

//     // Simulate saving the tender
//     const tenderData = {
//       name,
//       company,
//       category,
//       description,
//       expiryDate,
//       minPrice,
//       maxPrice,
//     };

//     console.log("Tender submitted:", tenderData);

//     setEmptyArray([tenderData, ...emptyArray]);

//     toast.success("Tender submitted successfully!");
//     setActiveSection("my-tenders");

//     // Reset the form (optional)
//     setName("");
//     setCompany("");
//     setCategory("");
//     setDescription("");
//     setExpiryDate("");
//     setMinPrice("");
//     setMaxPrice("");
//   };

//   return (
//     <div className="flex flex-col mx-auto p-2 max-w-2xl min-h-screen text-black dark:bg-white">
//       <h1 className="text-2xl py-3 font-bold text-center">Add New Tender</h1>
//       <div className="w-full p-6 rounded-xl shadow-lg border">
//         {/* tender form */}
//         <form className="space-y-5" onSubmit={handleSubmit}>
//           {/* Tender Name */}
//           <div className="flex flex-col md:flex-row md:space-x-4">
//             <div className="flex flex-col flex-1 pb-4 md:pb-0">
//               <label htmlFor="name" className="pb-1 font-semibold text-sm">
//                 Tender Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="border rounded-md pl-2 py-2  text-sm"
//                 required
//               />
//             </div>

//             {/* Company Name */}
//             <div className="flex flex-col flex-1 pb-4 md:pb-0">
//               <label htmlFor="company" className="text-sm font-semibold pb-1">
//                 Company / Organization Name
//               </label>
//               <input
//                 type="text"
//                 id="company"
//                 value={company}
//                 placeholder="e.g.: XYZ Pvt. Ltd. "
//                 onChange={(e) => setCompany(e.target.value)}
//                 className="border rounded-md pl-2 py-2"
//                 required
//               />
//             </div>
//           </div>

//           {/* Tender Category */}
//           <div className="flex flex-col md:flex-row md:space-x-4">
//             <div className="flex flex-col flex-1 pb-4 md:pb-0">
//               <label htmlFor="company" className="text-sm font-semibold pb-1">
//                 Category
//               </label>
//               <select
//                 name="category"
//                 className="border rounded-md p-2 h-10"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">All Categories</option>
//                 {businessCategories.map((cat, idx) => (
//                   <option key={idx} value={cat.value}>
//                     {cat.label}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Expiry Date */}
//             <div className="flex flex-col flex-1 pb-4 md:pb-0">
//               <label
//                 htmlFor="expiryDate"
//                 className="text-sm font-semibold pb-1"
//               >
//                 Expiry Date
//               </label>
//               <input
//                 type="date"
//                 id="expiryDate"
//                 value={expiryDate}
//                 onChange={(e) => setExpiryDate(e.target.value)}
//                 className="border rounded-md pl-2 py-2"
//                 required
//               />
//             </div>
//           </div>

//           {/* Tender Description */}
//           <div className="flex flex-col">
//             <label htmlFor="description" className="pb-1 font-semibold text-sm">
//               Tender Description
//             </label>
//             <input
//               type="text"
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="border rounded-md pl-2 py-2  text-sm"
//               required
//             />
//           </div>

//           {/* Price Range */}
//           <div className="flex flex-col md:flex-row md:space-x-4">
//             <div className="flex flex-col flex-1 pb-4 md:pb-0">
//               <label htmlFor="minPrice" className="pb-1 font-semibold text-sm">
//                 Minimum Price
//               </label>
//               <input
//                 id="minPrice"
//                 type="number"
//                 value={minPrice}
//                 placeholder="Min Budget"
//                 onChange={(e) => setMinPrice(e.target.value)}
//                 className="rounded-md pl-3 py-2 border  text-sm"
//                 required
//               />
//             </div>
//             <div className="flex flex-col flex-1">
//               <label htmlFor="maxPrice" className="pb-1 font-semibold text-sm">
//                 Maximum Price
//               </label>
//               <input
//                 id="maxPrice"
//                 type="number"
//                 value={maxPrice}
//                 placeholder="Max Budget"
//                 onChange={(e) => setMaxPrice(e.target.value)}
//                 className="rounded-md pl-3 py-2 border  text-sm"
//                 required
//               />
//             </div>
//           </div>

//           {/* Terms */}
//           <div className="flex items-center space-x-2">
//             <input type="checkbox" className="w-4 h-4" required />
//             <label htmlFor="termsConditions" className="text-md">
//               I agree to the terms & conditions. *
//             </label>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end space-x-4 pt-4">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition cursor-pointer"
//             >
//               Submit Tender
//             </button>
//             <button
//               type="button"
//               onClick={() => toast("Saved as Draft")}
//               className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white cursor-pointer px-5 py-2 rounded-lg font-semibold text-sm transition"
//             >
//               Save as Draft
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddTender;

"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { businessCategories } from "../data/categories";
import axiosAPI from "../api/useAxios";
import { useAppContext } from "../context/AppContext";

const AddTender = ({ emptyArray, setEmptyArray, setActiveSection }) => {
  const [step, setStep] = useState(1);
  const {setMyTenders} = useAppContext();
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

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === "category") {
      const selected = businessCategories.find(
        (item) => item.category === value
      );
      setSubcategories(selected ? selected.subcategories : []);
      setFormData((prev) => ({ ...prev, category: value, subcategory: "" }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : type === "file" ? files : value,
      }));
    }
  };

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!confirm('Are you sure creating the tender?')) return;
    if (
      !formData.requirement ||
      !formData.category ||
      !formData.subcategory ||
      !formData.location ||
      !formData.quantity ||
      !formData.timeline ||
      !formData.agreed
    ) {
      toast.error("Please complete all required fields.");
      return;
    }

    try {
      const formPayload = new FormData();

      // Append all form fields
      formPayload.append("requirement", formData.requirement);
      formPayload.append("category", formData.category);
      formPayload.append("subcategory", formData.subcategory);
      formPayload.append("location", formData.location);
      formPayload.append("quantity", formData.quantity);
      formPayload.append("timeline", formData.timeline);
      formPayload.append("minPrice", formData.minPrice || "");
      formPayload.append("maxPrice", formData.maxPrice || "");
      formPayload.append("agreed", formData.agreed);

      // Append files (if any)
      if (formData.files && formData.files.length > 0) {
        for (let i = 0; i < formData.files.length; i++) {
          formPayload.append("files", formData.files[i]);
        }
      }

      const res = await axios.post("tenders",formPayload);

      const data = await res.json();

      // if (!res.ok) {
      //   toast.error(data?.error || "Failed to submit tender.");
      //   return;
      // }

      // Update local state after successful submission
      setEmptyArray([data, ...emptyArray]);
      setMyTenders((prev)=>[data, ...prev])
      toast.success("Tender submitted successfully!");
      setActiveSection("my-tenders");

      // Reset form
      setFormData({
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
      setSubcategories([]);
      setStep(1);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };


  return (
    <div className="max-w-2xl mx-auto p-4 text-black dark:bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-center py-4">
        Submit Your Requirement
      </h2>
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

            <div>
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
                title="Suppliers will soon place their DhanBids"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
              >
                Submit Requirement
              </button>
            </div>
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

export default AddTender;

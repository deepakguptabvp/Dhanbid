'use client'
import { useState } from "react";
import { businessCategories } from "../data/categories";

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubCategory(""); // Reset subcategory on category change
  };

  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
  };

  const selectedData = businessCategories.find(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Select Category 
      </h2>

      {/* Category Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Select a Category --</option>
          {businessCategories.map((item) => (
            <option key={item.id} value={item.category}>
              {item.category}
            </option>
          ))}
        </select>
      </div>

      {/* Sub-Category Dropdown */}
      {selectedData && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sub-Category
          </label>
          <select
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">-- Select a Sub-Category --</option>
            {selectedData.subcategories.map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Preview */}
      {selectedCategory && selectedSubCategory && (
        <div className="bg-blue-50 p-4 rounded-md mt-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Selected:</span> {selectedCategory} →{" "}
            <span className="text-green-700">{selectedSubCategory}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;

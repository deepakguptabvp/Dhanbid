import React from "react";
import productCategoryData from './../../data/productCategoryData.json';

const ProductCategories = () => {
  return (
    <div className="container mx-auto p-6 md:px-20 md:py-10 bg-white max-w-7xl">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-8 text-gray-800 underline">
        Popular Product Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategoryData.popularProductCategories.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border border-gray-100"
            >
              <div className="h-48 w-full overflow-hidden bg-gradient-to-br  flex items-center 
              justify-center transform transition-transform duration-300 hover:scale-110">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-44 h-40 object-contain"
                />
              </div>
              <div className="p-6">
                <u>

                <h2 className="text-xl font-semibold mb-3 text-gray-800  transition-colors duration-300">
                  {item.title}
                </h2>
                </u>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                {/* <div className="mt-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-colors duration-300 cursor-pointer">
                    Learn More
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row mx-auto items-center justify-center mt-2 p-8">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 
        to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
         dark:focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2"
        >
          EXPLORE THE MARKET
        </button>
      </div>
    </div>
  );
};

export default ProductCategories;

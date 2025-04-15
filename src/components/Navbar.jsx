"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
  };

  return (
    <div className=" bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white shadow-md p-4 transition-colors duration-200">
      <div className="mb-4 -mt-2 flex justify-center gap-4 text-xs text-gray-900 dark:text-gray-100">
        <span className="p-2 rounded-lg cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-600">
          English
        </span>
        <span
          onClick={toggleDarkMode}
          className="p-2 rounded-lg cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-600 flex items-center gap-1"
        >
          {/* {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"} */}
          {darkMode ? " Light Mode" : " Dark Mode"}
        </span>

        <span className="p-2">Font Size</span>
        <span className="p-2 rounded-lg cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-600">
          | A- |
        </span>
        <span className="p-2 rounded-lg cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-600">
          | A |
        </span>
        <span className="p-2 rounded-lg cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-600">
          | A+ |
        </span>
        <span className="p-2 rounded-lg cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-600">
          Skip to Main Content
        </span>
        <span className="p-2 rounded-lg cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-600">
          Raise a Ticket
        </span>
        <span className="p-2 rounded-lg cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-600">
          Need Help?
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly items-center gap-2">
        <div className="flex items-center gap-4">
          <img src="/Dhanbid.jpg" alt="Dhanbid logo" className="h-18" />
          <div>
            <div className="text-xl font-bold text-blue-900 dark:text-blue-100">
              Dhanbid
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Dhanbid
            </div>
            <div className="text-[10px] text-gray-400 dark:text-gray-500">
              Efficient • Transparent • Inclusive
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-2 w-full md:w-auto">
          <div className="flex gap-3 text-sm font-medium">
            <span className="hover:underline rounded-lg shadow-2xl p-2 cursor-pointer dark:hover:text-blue-400">
              Products
            </span>
            <span className="hover:underline rounded-lg shadow-2xl p-2 cursor-pointer dark:hover:text-blue-400">
              Services
            </span>
            <span className="hover:underline rounded-lg shadow-2xl p-2 cursor-pointer dark:hover:text-blue-400">
              Content
            </span>
            <span className="hover:underline rounded-lg shadow-2xl p-2 cursor-pointer flex items-center gap-1 dark:hover:text-blue-400">
              Training
              <span className="bg-yellow-400 text-black text-[10px] px-1 rounded">
                NEW
              </span>
            </span>
          </div>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Dhanbid..."
              className="pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:bg-gray-800 dark:text-white w-full"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-2 w-full md:w-auto text-sm">
          <span className="hover:underline p-2 rounded-lg cursor-pointer dark:hover:text-blue-400">
            Forward Auction
          </span>
          <span className="hover:underline p-2 rounded-lg cursor-pointer dark:hover:text-blue-400">
            Bids
          </span>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg 
            text-sm p-3 text-center me-2 mb-2"
          >
            Sign up
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg 
            text-sm p-3 text-center me-2 mb-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

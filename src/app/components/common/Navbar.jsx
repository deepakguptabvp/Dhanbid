"use client";
import { FaSearch } from "react-icons/fa";
import { BellIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-gray-100 shadow-md px-4 py-3 sticky top-0 z-50 dark:text-black">
      {/* Topbar */}
      <div className="flex items-center justify-between md:justify-normal gap-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/Dhanbid.jpg"
              alt="Dhanbid logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="text-xl font-bold text-shadow-yellow-950">
              Dhanbid
            </span>
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search requirement (ACs, Fabric Material, Chair's,...)"
              className="pl-4 pr-10 py-2 w-full rounded-full border border-gray-300 dark:border-gray-600
               bg-white dark:bg-gray-50 dark:text-black"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Right: Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 dark:text-black relative  right-25 cursor-pointer">
            <BellIcon size={23} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <Link href="/login">
            <button className="absolute top-4 right-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200 cursor-pointer">
              Login
            </button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:bg-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search requirement (ACs, Fabric Material, Chair's,...)"
              className="pl-4 pr-10 py-2 w-full rounded-full border border-gray-300 dark:border-gray-600
               bg-white dark:bg-gray-50 dark:text-black"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <div className="flex justify-end gap-5 items-center px-1">
            <button className="relative text-gray-700 ">
              <BellIcon size={23} />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <Link href="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

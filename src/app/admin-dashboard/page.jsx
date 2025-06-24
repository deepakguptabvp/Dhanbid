"use client";

import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Tenders from "./Tenders";
import Bids from "./Bids";
import Vendors from "./Vendors";
import Reports from "./Reports";
import Notification from "./Notification";
import { MenuIcon, XIcon } from "lucide-react";
import { LuClipboardList, LuLayoutDashboard } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { TbDeviceAnalytics } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const page = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to render the content based on active section
  // This function will return the corresponding component based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard setActiveSection={setActiveSection} />;
      case "tenders":
        return <Tenders setActiveSection={setActiveSection} />;
      case "bids":
        return <Bids setActiveSection={setActiveSection} />;
      case "vendors":
        return <Vendors setActiveSection={setActiveSection} />;
      case "reports":
        return <Reports setActiveSection={setActiveSection} />;
      case "notification":
        return <Notification />;
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  // Function to handle sidebar menu item click
  const sidebarMenuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <LuLayoutDashboard size={20} />,
    },
    {
      key: "tenders",
      label: "Tenders",
      icon: <LuClipboardList size={20} />,
    },
    { key: "bids", label: "Bids", icon: <GiReceiveMoney size={20} /> },
    {
      key: "vendors",
      label: "Vendors",
      icon: <IoPeople size={20} />,
    },
    {
      key: "reports",
      label: "Reports",
      icon: <TbDeviceAnalytics size={20} />,
    },
    {
      key: "notification",
      label: "Notification",
      icon: <FaBell size={20} />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-[100vw] dark:bg-white dark:text-black">
      {/* Mobile menu */}
      <div className="relative md:hidden flex justify-between items-center bg-white dark:text-black p-4 shadow-md w-full">
        <button
          onClick={toggleMobileMenu}
          className="flex cursor-pointer ml-auto"
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      <aside
        className={`fixed inset-y-0 left-0 z-50 md:z-20 w-64 bg-white shadow-md p-4 transform transition-transform duration-300 ease-in-out 
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0 md:block`}
      >
        <div className="h-40 bg-indigo-100 rounded-xl flex flex-col items-center justify-center space-y-2 mb-4">
          <CgProfile size={48} className="text-indigo-500" />
          <h1 className="text-lg text-left font-bold p-3">Admin Dashboard</h1>
        </div>

        <nav className="space-y-2 min-h-screen">
          {sidebarMenuItems.map((items) => (
            <button
              key={items.key}
              onClick={() => {
                setActiveSection(items.key);
                setIsMenuOpen(false);
              }}
              className={`w-full text-left cursor-pointer px-4 py-2 rounded-xl hover:bg-indigo-200 flex items-center  ${
                activeSection === items.key ? "bg-indigo-200" : ""
              }`}
            >
              <div className="mr-3">{items.icon}</div>
              {items.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Active section content part will displayed here */}
      <div className="flex-1 p-3">{renderContent()}</div>
    </div>
  );
};

export default page;

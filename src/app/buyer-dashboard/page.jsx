"use client";
import React, { useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { CgNotes, CgTimelapse } from "react-icons/cg";

// Importing content components for each sidebar section
import AddTender from "./AddTender";
import MyTenders from "./MyTenders";
import LiveTender from "./LiveTender";
import Profile from "./Profile";
import { sampleTenders } from "../data/categories";

// Main component for dashboard page
const page = () => {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState("my-tenders");
  const [emptyArray, setEmptyArray] = useState(sampleTenders);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  // Function to render the content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "my-tenders":
        return <MyTenders emptyArray={emptyArray} />;
      case "create-tender":
        return (
          <AddTender
            emptyArray={emptyArray}
            setEmptyArray={setEmptyArray}
            setActiveSection={setActiveSection}
          />
        );  
      case "live-tender":
        return <LiveTender />;
      case "profile":
        return <Profile />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex min-h-screen w-full text-black dark:bg-white  ">
      {/* Sidebar navigation panel */}
      <aside className="w-64 bg-gray-50 shadow-md p-4">
        <h1 className="text-xl font-bold mb-4">Buyer Dashboard</h1>

        {/* Sidebar menu items */}
        <nav className="space-y-2">
          {/* My tender button */}

          <button
            onClick={() => setActiveSection("my-tenders")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "my-tenders" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <TbLayoutDashboardFilled size={20} className="m-1" />
              <span className="m-1">My Tenders</span>
            </div>
          </button>

          {/* Create Tender button */}
          <button
            onClick={() => setActiveSection("create-tender")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "create-tender" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <CgNotes size={20} className="m-1" />
              <span className="m-1">Create Tender</span>
            </div>
          </button>

          {/* Live Tender button */}
          <button
            onClick={() => setActiveSection("live-tender")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "live-tender" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <CgNotes size={20} className="m-1" />
              <span className="m-1">Live Tenders</span>
            </div>
          </button>

          {/* Profile Button */}
          <button
            onClick={() => setActiveSection("profile")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "profile" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <CgTimelapse size={20} className="m-1" />
              <span className="m-1">Profile</span>
            </div>
          </button>
        </nav>
      </aside>

      {/* Main content area which renders selected section */}
      <div className="flex-1 p-3 ">{renderContent()}</div>
    </div>
  );
};

export default page;

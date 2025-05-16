"use client";
import React, { useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { CgNotes, CgTimelapse } from "react-icons/cg";

// Importing content components for each sidebar section
import AddTender from "./AddTender";
import MyTenders from "./MyTenders";
import LiveTender from "./LiveTender";
import Profile from "./Profile";
import dummyTender from "./../data/dummyTenderData.json";

// Main component for dashboard page
const page = () => {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState("my-tenders");
  const [emptyArray, setEmptyArray] = useState(dummyTender.dummyTenderData);

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
    <div className="flex min-h-screen w-full dark:text-black ">
      {/* Sidebar navigation panel */}
      <div className="w-64 bg-white shadow-md p-4">
        <h1 className="text-xl font-bold mb-4">Dhanbid Portal</h1>

        {/* Sidebar menu items */}
        <div className="space-y-2">
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
        </div>
      </div>

      {/* Main content area which renders selected section */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default page;

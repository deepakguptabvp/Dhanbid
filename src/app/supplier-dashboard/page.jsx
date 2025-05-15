"use client";

import React, { useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { CgNotes, CgTimelapse } from "react-icons/cg";

// Importing content components for each sidebar section
import MyBiddings from "./MyBiddings";
import EditProfile from "./EditProfile";
import Notifications from "./Notifications";
import CreateBid from "./CreateBid";

// Main component for dashboard page
const page = () => {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState("my-biddings");

  // Function to render the content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "my-biddings":
        return <MyBiddings />;
      case "create-bid":
        return <CreateBid />;
      case "edit-profile":
        return <EditProfile />;
      case "notifications":
        return <Notifications />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex min-h-screen w-full dark:text-black">
      {/* Sidebar navigation panel */}
      <div className="w-64 bg-white shadow-md p-4">
        <h1 className="text-xl font-bold mb-4">Dhanbid Portal</h1>

        {/* Sidebar menu items */}
        <div className="space-y-2">

          {/* My Biddings button */}
          <button
            onClick={() => setActiveSection("my-biddings")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "my-biddings" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <TbLayoutDashboardFilled size={20} className="m-1" />
              <span className="m-1">My Biddings</span>
            </div>
          </button>

          {/* Create Bid button */}
          <button
            onClick={() => setActiveSection("create-bid")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "create-bid" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <TbLayoutDashboardFilled size={20} className="m-1" />
              <span className="m-1">Create Bid</span>
            </div>
          </button>

          {/* Edit Profile button */}
          <button
            onClick={() => setActiveSection("edit-profile")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "edit-profile" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <CgNotes size={20} className="m-1" />
              <span className="m-1">Edit Profile</span>
            </div>
          </button>

          {/* Notifications button */}
          <button
            onClick={() => setActiveSection("notifications")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "notifications" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <CgTimelapse size={20} className="m-1" />
              <span className="m-1">Notifications</span>
            </div>
          </button>
        </div>
      </div>

      {/* Main content area which renders selected section */}
      <div className="flex-1 p-6 bg-gray-100">
        {renderContent()}
      </div>
    </div>
  );
};

export default page;

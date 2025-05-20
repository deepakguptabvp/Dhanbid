"use client";

import React, { useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { CgNotes, CgTimelapse } from "react-icons/cg";

// Importing content components for each sidebar section
import MyBiddings from "./MyBiddings";
import EditProfile from "./EditProfile";
import Notifications from "./Notifications";
import CreateBid from "./CreateBid";
import TendersPage from "./Tenders";
import { myBids } from "../data/categories";
import SupplierProfile from "./Profile";
import { FaUserAlt } from "react-icons/fa";
import { ToastBar } from "react-hot-toast";

  const SampleSupplier={
            name: "Ravi Kumar",
            email: "ravi@supplypro.com",
            number: "9876543210",
            address: "Sector 12, Noida, India",
            category: "Construction",
            gstin: "27ABCDE1234F1Z6",
            isVerified: false,
            totalBids: 35,
            successfulBids: 18,
          }
// Main component for dashboard page
const page = () => {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState("tenders");
  const [createBid, setCreateBid] = useState(null);
  const [bids, setBids] = useState(myBids);
  const [supplier, setSupplier] = useState(SampleSupplier);
  // Function to render the content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "my-biddings":
        return <MyBiddings bids={bids} />;
      case "create-bid":
        return <CreateBid setActiveSection={setActiveSection} createBid={createBid} setBids={setBids} />;
      case "tenders":
        return <TendersPage setCreateBid={setCreateBid} setActiveSection={setActiveSection} />;
      case "edit-profile":
        return <EditProfile setSupplier={setSupplier} setActiveSection={setActiveSection}/>;
      case "my-profile":
        return <SupplierProfile supplier={supplier}/>;
      case "notifications":
        return <Notifications />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex min-h-screen w-full dark:text-black">
      {/* Sidebar navigation panel */}
      {/* <ToastBar/> */}
      <div className="w-64 bg-white shadow-md p-4">
        <h1 className="text-xl text-center font-bold mb-4">Dhanbid Portal</h1>

        {/* Sidebar menu items */}
        <div className="space-y-2">

          {/* My Biddings button */}
          <button
            onClick={() => setActiveSection("my-biddings")}
            className={`w-full text-left px-4 cursor-pointer py-2 rounded hover:bg-gray-200 ${activeSection === "my-biddings" ? "bg-gray-200" : ""
              }`}
          >
            <div className="inline-flex items-center justify-center">
              <TbLayoutDashboardFilled size={20} className="m-1" />
              <span className="m-1">My Biddings</span>
            </div>
          </button>
          {/* Tenders button */}
          <button
            onClick={() => setActiveSection("tenders")}
            className={`w-full text-left px-4 cursor-pointer py-2 rounded hover:bg-gray-200 ${activeSection === "tenders" ? "bg-gray-200" : ""
              }`}
          >
            <div className="inline-flex items-center justify-center">
              <TbLayoutDashboardFilled size={20} className="m-1" />
              <span className="m-1">Tenders</span>
            </div>
          </button>

          {/* Edit Profile button */}
          <button
            onClick={() => setActiveSection("edit-profile")}
            className={`w-full text-left px-4 cursor-pointer py-2 rounded hover:bg-gray-200 ${activeSection === "edit-profile" ? "bg-gray-200" : ""
              }`}
          >
            <div className="inline-flex items-center justify-center">
              <CgNotes size={20} className="m-1" />
              <span className="m-1">Edit Profile</span>
            </div>
          </button>
          {/* Edit Profile button */}
          <button
            onClick={() => setActiveSection("my-profile")}
            className={`w-full text-left px-4 cursor-pointer py-2 rounded hover:bg-gray-200 ${activeSection === "edit-profile" ? "bg-gray-200" : ""
              }`}
          >
            <div className="inline-flex items-center justify-center">
              <FaUserAlt size={20} className="m-1" />
              <span className="m-1">My Profile</span>
            </div>
          </button>

          {/* Notifications button */}
          <button
            onClick={() => setActiveSection("notifications")}
            className={`w-full text-left px-4 cursor-pointer py-2 rounded hover:bg-gray-200 ${activeSection === "notifications" ? "bg-gray-200" : ""
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
      <div className="flex-1 max-h-screen  overflow-y-auto py-8 p-3">
        {renderContent()}
      </div>
    </div>
  );
};

export default page;

"use client";

import React, { useState } from "react";
import { LuClipboardList } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { FaBell, FaCoins, FaUserAlt } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
// Import content components
import MyBiddings from "./MyBiddings";
import EditProfile from "./EditProfile";
import Notifications from "./Notifications";
import CreateBid from "./CreateBid";
import TendersPage from "./Tenders";
import SupplierProfile from "./Profile";
import ChatInterface from "./Chats";
import { myBids } from "../data/categories";
import { FiMenu } from "react-icons/fi";

const SampleSupplier = {
  name: "Ravi Kumar",
  email: "ravi@supplypro.com",
  number: "9876543210",
  address: "Sector 12, Noida, India",
  category: "Construction",
  gstin: "27ABCDE1234F1Z6",
  isVerified: false,
  totalBids: 35,
  successfulBids: 18,
};

const Page = () => {
  const [activeSection, setActiveSection] = useState("tenders");
  const [createBid, setCreateBid] = useState(null);
  const [bids, setBids] = useState(myBids);
  const [supplier, setSupplier] = useState(SampleSupplier);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "my-biddings":
        return <MyBiddings bids={bids} />;
      case "create-bid":
        return <CreateBid setActiveSection={setActiveSection} createBid={createBid} setBids={setBids} />;
      case "tenders":
        return <TendersPage setCreateBid={setCreateBid} setActiveSection={setActiveSection} />;
      case "edit-profile":
        return <EditProfile setSupplier={setSupplier} setActiveSection={setActiveSection} />;
      case "my-profile":
        return <SupplierProfile supplier={supplier} />;
      case "chats":
        return <ChatInterface />;
      case "notifications":
        return <Notifications />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  const menuItems = [
    { key: "my-biddings", label: "My Biddings", icon: <FaCoins size={20} /> },
    { key: "tenders", label: "Tenders", icon: <LuClipboardList size={20} /> },
    { key: "edit-profile", label: "Edit Profile", icon: <CgNotes size={20} /> },
    { key: "my-profile", label: "My Profile", icon: <FaUserAlt size={20} /> },
    { key: "chats", label: "Chats", icon: <IoChatboxEllipsesOutline size={20} /> },
    { key: "notifications", label: "Notifications", icon: <FaBell size={20} /> },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Hamburger for mobile */}
      <div className="md:hidden flex justify-between items-center bg-white p-4 shadow-md">
        <h1 className="text-xl font-bold">Dhanbid Portal</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <FiMenu size={24} />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-md p-4 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0 lg:block
        `}
      >
        <h1 className="text-xl text-center font-bold mb-4">Dhanbid Portal</h1>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveSection(item.key);
                setIsSidebarOpen(false); // Close sidebar on mobile after selection
              }}
              className={`w-full text-left cursor-pointer px-4 py-2 rounded hover:bg-gray-200 flex items-center ${
                activeSection === item.key ? "bg-gray-200" : ""
              }`}
            >
              <div className="mr-2">{item.icon}</div>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1  max-h-[100%] overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default Page;

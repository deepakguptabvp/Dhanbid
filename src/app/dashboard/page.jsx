"use client";
import React, { useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { CgNotes, CgTimelapse } from "react-icons/cg";
import Tender from "./../../components/Tender";
import Dashboard from "./../../components/Dashboard";
import Report from "./../../components/Report";

const page = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "tenders":
        return <Tender />;
      case "reports":
        return <Report />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex min-h-screen w-full dark:text-black ">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <h1 className="text-xl font-bold mb-4">Dhanbid Portal</h1>
        <div className="space-y-2">
          <button
            onClick={() => setActiveSection("dashboard")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "dashboard" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <TbLayoutDashboardFilled size={20} className="m-1" />
              <span className="m-1">Dashboard</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSection("tenders")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "tenders" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <CgNotes size={20} className="m-1" />
              <span className="m-1">Tenders</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSection("reports")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "reports" ? "bg-gray-200" : ""
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <CgTimelapse size={20} className="m-1" />
              <span className="m-1">Reports</span>
            </div>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">{renderContent()}</div>
    </div>
  );
};

export default page;

"use client";
import React, { useState } from "react";
// import Sidebar from "./../components/Sidebar";

const page = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <div>Welcome to your Dashboard 👋</div>;
      case "tenders":
        return <div>Here are the Tenders 📄</div>;
      case "reports":
        return <div>Reports Section 📊</div>;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
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
            <i className="bi bi-speedometer2 mr-2"></i> Dashboard
          </button>
          <button
            onClick={() => setActiveSection("tenders")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "tenders" ? "bg-gray-200" : ""
            }`}
          >
            <i className="bi bi-file-earmark-text mr-2"></i> Tenders
          </button>
          <button
            onClick={() => setActiveSection("reports")}
            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
              activeSection === "reports" ? "bg-gray-200" : ""
            }`}
          >
            <i className="bi bi-bar-chart-line mr-2"></i> Reports
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">{renderContent()}</div>
    </div>
  );
};

export default page;

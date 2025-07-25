"use client";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

// Importing content components for each sidebar section
import AddTender from "./AddTender";
import MyTenders from "./MyTenders";
import Profile from "./Profile";
import { sampleTenders } from "../data/categories";
import { MenuIcon, XIcon } from "lucide-react";
import { FaPlus, FaUserTie } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import EditTender from "./EditTender";
import TenderWithBidsCard from "./TenderAndBidsDetails";
import ChatInterface from "./BuyerChat";
import { useAppContext } from "../context/AppContext";
import { BsChat } from "react-icons/bs";

const SampleBuyer = {
  name: "Dinesh Kumar",
  email: "dinesh@steelcorp.com",
  number: "+91 8683827635",
  address: "Phase -2, Mayur Vihar, India",
  category: "Manufacturing & Industrial",
  isVerified: true,
};

// Main component for dashboard page
const page = () => {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState("my-tenders");
  const [emptyArray, setEmptyArray] = useState(sampleTenders);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [id, setId] = useState(null);
  const { user } = useAppContext();
  const [buyerProfile, setBuyerProfile] = useState(SampleBuyer);
  const [selectedChat, setSelectedChat] = useState(null);
  console.log(user)
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to render the content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "my-tenders":
        return <MyTenders emptyArray={emptyArray} setId={setId} setActiveSection={setActiveSection} />;
      case "create-tender":
        return (
          <AddTender
            emptyArray={emptyArray}
            setEmptyArray={setEmptyArray}
            setActiveSection={setActiveSection}
          />
        );
      case "profile":
        return <Profile buyerProfile={buyerProfile} />;
      case "chats":
        return <ChatInterface selectedChat={selectedChat} buyerProfile={buyerProfile} userId={user?._id} role={"buyer"} />;
      case "edit-tender":
        return <EditTender id={id} setActiveSection={setActiveSection} />;
      case "tender-bids":
        return <TenderWithBidsCard id={id} setActiveSection={setActiveSection} setSelectedChat={setSelectedChat} />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden dark:text-black w-full bg-white">
      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center bg-white dark:text-black p-4 shadow-md">
        <h1 className="text-xl font-bold">Buyer Portal</h1>
        <button onClick={toggleMobileMenu} className="flex cursor-pointer">
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Sidebar navigation panel */}
      <aside
        className={`
          fixed top-0 z-[200] inset-y-0 left-0 w-64 bg-white shadow-md p-4 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0 lg:block
        `}
      >
        <div className="h-40 bg-indigo-100 mt-2 rounded-xl flex flex-col items-center justify-center space-y-2 mb-4">
          {/* Toggle Menu Button */}
          <CgProfile size={48} className="text-indigo-500" />
          <h1 className="text-lg text-left font-bold p-3">Buyer Dashboard</h1>
        </div>

        {/* Sidebar menu items */}
        <nav className="space-y-2 mt-4">
          {/* My tender button */}
          <button
            onClick={() => setActiveSection("my-tenders")}
            className={`w-full text-left px-4 py-2 rounded-xl hover:bg-indigo-200 ${activeSection === "my-tenders" ? "bg-indigo-200" : ""
              }`}
          >
            <div className="inline-flex items-center justify-center">
              <LuClipboardList size={20} className="m-1" />
              <span className="m-1">My Orders</span>
            </div>
          </button>

          {/* Create Tender button */}
          <button
            onClick={() => setActiveSection("chats")}
            className={`w-full text-left px-4 py-2 rounded-xl hover:bg-indigo-200 ${activeSection === "chats" ? "bg-indigo-200" : ""
              }`}
          >
            <div className="inline-flex items-center justify-center">
              <BsChat size={20} className="m-1" />
              <span className="m-1">Chats</span>
            </div>
          </button>
          {/* Create Tender button */}
          <button
            onClick={() => setActiveSection("create-tender")}
            className={`w-full text-left px-4 py-2 rounded-xl hover:bg-indigo-200 ${activeSection === "create-tender" ? "bg-indigo-200" : ""
              }`}
          >
            <div className="inline-flex items-center justify-center">
              <FaPlus size={20} className="m-1" />
              <span className="m-1">Create order</span>
            </div>
          </button>

          {/* Profile Button */}
          <button
            onClick={() => setActiveSection("profile")}
            className={`w-full text-left px-4 py-2 rounded-xl hover:bg-indigo-200 ${activeSection === "profile" ? "bg-indigo-200" : ""
              }`}
          >
            <div className="inline-flex items-center justify-center">
              <FaUserTie size={20} className="m-1" />
              <span className="m-1">My Profile</span>
            </div>
          </button>
        </nav>
      </aside>

      {/* Main content area which renders selected section */}
      <div className="flex-1 max-h-[90vh] overflow-auto p-3">{renderContent()}</div>
    </div>
  );
};

export default page;

"use client";
import React, { useEffect, useState } from "react";
import { LuClipboardList } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaBell, FaCoins, FaUserTie } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

// Import content components
import MyBiddings from "./MyBiddings";
import Notifications from "./Notifications";
import CreateBid from "./CreateBid";
import TendersPage from "./Tenders";
import SupplierProfile from "./Profile";
import ChatInterface from "./Chats";
import { myBids } from "../data/categories";
import { MenuIcon, XIcon } from "lucide-react";
import TenderDetails from "./TenderDetails";
import axiosAPI from "../api/useAxios";
import { useAppContext } from "../context/AppContext";
import socket from "../../../socket";
import toast from "react-hot-toast";

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
  const [tender, setTender] = useState(null);
  const [bids, setBids] = useState(myBids);
  const [supplier, setSupplier] = useState(SampleSupplier);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreads, setUnreads] = useState(0);
  const {user} = useAppContext();
  const axios = axiosAPI();
  const fetchNotifications = async () => {
    try {
      const res = await axios.get("/notifications");
      setNotifications(res.data.data);
      setUnreads(res.data?.data?.filter((d) => !d.isRead)?.length || 0);
      console.log(res.data?.data?.filter((d) => !d.isRead)?.length)
    } catch (error) {
      console.error("Error fetching notifications", error);
    }
  };
  useEffect(() => {


    fetchNotifications();
  }, []);
  useEffect(() => {
    if (!user?._id) return;

    // Receive unread message
    socket.on('unreadMessage', ({ from, message, chatId }) => {
      console.log(message)
      toast(`📩 New message from ${from}: ${message.text}`, {
        icon: '💬',
        duration: 4000,
      });

      // Optionally set unread state in your app's context or Redux
    });

    return () => {
      socket.off('unreadMessage');
    };
  }, [user]);
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "my-offers":
        return <MyBiddings bids={bids} />;
      case "create-bid":
        return (
          <CreateBid
            setActiveSection={setActiveSection}
            createBid={createBid}
            setBids={setBids}
          />
        );
      case "tenders":
        return (
          <TendersPage
            setCreateBid={setCreateBid}
            setActiveSection={setActiveSection}
          />
        );
      case "my-profile":
        return <SupplierProfile supplier={supplier} />;
      case "tender":
        return <TenderDetails tender={tender} setCreateBid={setCreateBid} setActiveSection={setActiveSection} />;
      case "chats":
        return <ChatInterface />;
      case "notifications":
        return <Notifications getNotifications={fetchNotifications} notifications={notifications} setNotifications={setNotifications} setTender={setTender} setActiveSection={setActiveSection} />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  const menuItems = [
    { key: "my-offers", label: "My Offers", icon: <FaCoins size={20} /> },
    { key: "tenders", label: "Tenders", icon: <LuClipboardList size={20} /> },
    // { key: "edit-profile", label: "Edit Profile", icon: <CgNotes size={20} /> },
    { key: "my-profile", label: "My Profile", icon: <FaUserTie size={20} /> },
    {
      key: "chats",
      label: "Chats",
      icon: <IoChatboxEllipsesOutline size={20} />,
    },
    {
      key: "notifications",
      label: `Notifications${unreads ? ` (${unreads})` : ''}`,
      icon: <FaBell size={20} />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row max-h-screen overflow-hidden dark:text-black dark:bg-white w-full">
      {/* Mobile Menu  */}
      <div className="relative md:hidden flex justify-between items-center bg-white dark:text-black p-4 shadow-md">
        {/* Toggle Menu Button */}
        <button onClick={toggleMobileMenu} className="flex cursor-pointer ml-auto">
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      <aside
        className={`
          fixed inset-y-0 left-0 z-[100] md:z-20 w-64 bg-white shadow-md p-4 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0 lg:block
        `}
      >
        <div className="h-40 bg-indigo-100 rounded-xl flex flex-col items-center justify-center space-y-2 mb-4">
          <CgProfile size={48} className="text-indigo-500" />
          <h1 className="text-lg text-left font-bold p-3">
            Supplier Dashboard
          </h1>
        </div>

        <div className="space-y-2 h-full">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveSection(item.key);
                setIsMenuOpen(false); // Close sidebar on mobile after selection
              }}
              className={`w-full text-left cursor-pointer px-4 py-2 rounded-xl hover:bg-indigo-200 flex items-center ${activeSection === item.key ? "bg-indigo-200" : ""
                }`}
            >
              <div className="mr-2">{item.icon}</div>
              {item.label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 max-h-[90vh] overflow-auto p-3">{renderContent()}</div>
    </div>
  );
};

export default Page;

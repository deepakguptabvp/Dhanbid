import React from "react";
import { SiTicktick } from "react-icons/si";
import { LuClipboardList } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

const cards = [
  {
    icon: (
      <LuClipboardList
        className="p-2 bg-indigo-100 rounded-lg text-indigo-500"
        size={35}
      />
    ),
    label: "Active Tenders",
    value: 42,
  },
  {
    icon: (
      <GiReceiveMoney
        className="p-2 bg-indigo-100 rounded-lg text-indigo-500"
        size={35}
      />
    ),
    label: "Total Bids Received",
    value: "1.120",
  },
  {
    icon: (
      <IoPeople
        className="p-2 bg-indigo-100 rounded-lg text-indigo-500"
        size={35}
      />
    ),
    label: "Registered Vendors",
    value: 350,
  },
  {
    icon: (
      <SiTicktick
        className="p-2 bg-indigo-100 rounded-lg text-indigo-500"
        size={35}
      />
    ),
    label: "Approved Tenders",
    value: 87,
  },
];

const Dashboard = () => (
  <div className="flex flex-col p-6 min-h-screen">
    <h1 className="text-3xl pb-4 font-semibold">Dashboard</h1>

    {/* Section-1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="flex items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
        >
          <div className="mx-4">{card.icon}</div>
          <div>
            <div className="text-gray-700 text-base">{card.label}</div>
            <div className="text-black font-semibold text-2xl">
              {card.value}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* section-2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-1 py-4 shadow-sm">
          <GoPlus className="p-1 bg-indigo-100 rounded-lg text-indigo-500 mx-4" size={30} />
          <h1>Create New Tender</h1>
        </div>
      </div>

  </div>
);

export default Dashboard;

import React from "react";
import { SiTicktick } from "react-icons/si";
import { LuClipboardList } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TiExport } from "react-icons/ti";
import DashboardCharts from "./DashboardCharts";
import { sampleTenders } from "../data/categories";

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
    value: "1.120 cr",
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
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      <button className="flex items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm cursor-pointer">
        <GoPlus
          className="p-1 bg-indigo-100 rounded-lg text-indigo-500 mx-2"
          size={30}
        />
        <h1>Create New Tender</h1>
      </button>
      <button className="flex items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm cursor-pointer">
        <FaRegChartBar
          className="p-1 bg-indigo-100 rounded-lg text-indigo-500 mx-2"
          size={30}
        />
        <h1>View Bids Report</h1>
      </button>
      <button className="flex items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm cursor-pointer">
        <MdOutlinePeopleAlt
          className="p-1 bg-indigo-100 rounded-lg text-indigo-500 mx-2"
          size={30}
        />
        <h1>Manage Vendors</h1>
        <TiExport
          className="p-1 bg-indigo-100 rounded-lg text-indigo-500 mx-2 "
          size={30}
        />
        <h1>Export</h1>
      </button>
    </div>

    {/* Section -3 ---- Charts  */}
    <div className="mt-8">
      <DashboardCharts />
    </div>

    {/* Section-4 --*/}
    <div className="mt-8">
      <h1 className="font-bold text-xl">Tender Management</h1>
      <div className="relative overflow-x-auto mt-4 border border-gray-300 rounded-xl">
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tender ID
              </th>
              <th scope="col" className="px-6 py-3">
                Tender Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                End Date
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(sampleTenders) && sampleTenders.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.tenderId}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.expiryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Dashboard;

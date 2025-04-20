import React from "react";
import { MdEventNote  } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const Dashboard = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3">
        {/* Status Board */}
        <div className="flex flex-row p-6">
          <MdEventNote  size={60} className="mx-3" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">12</h1>
            <span>Open Tenders</span>
          </div>
        </div>
        <div className="flex flex-row p-6">
          <TiTick  size={60} className="mx-3" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">8</h1>
            <span>Submitted Tenders</span>
          </div>
        </div>
        <div className="flex flex-row p-6">
          <IoMdCloseCircle size={60} className="mx-3" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">3</h1>
            <span>Closed Tenders</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold p-4">Open Tenders</h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Tender ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Submission Deadline
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">Supplies</td>
                <td className="px-6 py-4">open</td>
                <td className="px-6 py-4">May 27, 2025</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-4">Construction Services</td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4">April 12, 2025</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  3
                </th>
                <td className="px-6 py-4">IT Equipment</td>
                <td className="px-6 py-4">Closed</td>
                <td className="px-6 py-4">Jun 7, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

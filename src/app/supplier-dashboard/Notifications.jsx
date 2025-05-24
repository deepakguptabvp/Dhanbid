import React from "react";
import { CgBell } from "react-icons/cg";

const sampleTenders = [
  {
    id: 1,
    title: "Supply of Industrial Circuit Breakers",
    category: "Electrical Equipment",
    date: "2025-05-23",
  },
  {
    id: 2,
    title: "Procurement of Smart Meters",
    category: "Utilities & Metering",
    date: "2025-05-21",
  },
  {
    id: 3,
    title: "Construction of Community Toilets",
    category: "Infrastructure",
    date: "2025-05-19",
  },
  {
    id: 4,
    title: "IT Equipment for Government Schools",
    category: "Technology",
    date: "2025-05-18",
  },
];

const NotificationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Notifications
        </h2>

        <div className="space-y-4 max-h-[90vh] overflow-auto pb-8">
          {sampleTenders.map((tender) => (
            <div
              key={tender.id}
              className="relative bg-gradient-to-br from-white/80 to-white/40 border border-white/20 backdrop-blur-xl rounded-xl p-5 shadow-md transition hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-2 rounded-full shadow">
                  <CgBell className="h-6 w-6" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {tender.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Category:{" "}
                    <span className="text-blue-600 font-medium">
                      {tender.category}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Posted on: {tender.date}
                  </p>
                  <button className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    View Tender
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;

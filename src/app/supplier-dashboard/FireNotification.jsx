import React, { useEffect, useState } from "react";
import { CgBell } from "react-icons/cg";
// import { BellIcon } from "@heroicons/react/24/solid";

const sampleTenders = [
  {
    id: 5,
    title: "Supply of Smart Water Meters",
    category: "Utilities & Water Management",
  },
  {
    id: 6,
    title: "Construction of Rural Health Clinics",
    category: "Infrastructure & Healthcare",
  },
];

const TenderNotification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-4">
      {sampleTenders.map((tender, index) => (
        <div
          key={tender.id}
          className={`max-w-sm w-full p-4 shadow-2xl rounded-2xl bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-md border border-white/20
            transition-all duration-500 ease-in-out transform ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } delay-${index * 100}`}
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 text-white p-2 rounded-full shadow-md">
              <CgBell className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">New Tender in Your Category</p>
              <h3 className="text-md font-semibold text-gray-900">{tender.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                A tender has been created in{" "}
                <span className="font-semibold text-blue-600">
                  {tender.category}
                </span>
                .
              </p>
              <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition duration-200">
                View Tender
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TenderNotification;

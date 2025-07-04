"use client";
import React, { useEffect, useState } from "react";
import { CgBell } from "react-icons/cg";
import axiosAPI from "../api/useAxios";
import { useRouter } from "next/navigation";

const NotificationsPage = ({setTender,setActiveSection,notifications, getNotifications}) => {
  const markNotificationAsRead = async (notificationId) => {
  const axios = axiosAPI();
  try {
    const res = await axios.patch(`/notifications/read/${notificationId}`);
    return res.data;
  } catch (error) {
    console.error("Failed to mark notification as read:", error);
    throw error;
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h2>

        <div className="space-y-4 pb-8">
          {notifications.map((notif) => (
            <div
              key={notif._id}
              className="relative bg-gradient-to-br from-white/80 to-white/40 border
                border-white/20 backdrop-blur-xl rounded-xl p-5 shadow-md transition hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#0200b9] text-white p-2 rounded-full shadow">
                  <CgBell className="h-6 w-6" />
                </div>

                <div className="flex-1 my-auto">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {notif.tender?.requirement || "Tender Title"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Category:{" "}
                    <span className="text-blue-600 font-medium">
                      {notif.tender?.category || "N/A"}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Posted on:{" "}
                    {new Date(notif.tender?.createdAt).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => {markNotificationAsRead(notif._id); setTender(notif.tender); setActiveSection('tender'); getNotifications()}}
                    className="mt-3 flex items-center cursor-pointer bg-[#0200b9] hover:bg-blue-700 text-white 
                  text-center px-4 py-2 rounded-lg text-sm transition"
                  >
                    View Tender
                  </button>
                </div>
              </div>
            </div>
          ))}

          {notifications.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No notifications yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;

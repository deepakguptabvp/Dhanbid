import React, { useEffect, useState } from "react";
import axiosAPI from "../api/useAxios";
import { FaChevronCircleLeft, FaChevronLeft } from "react-icons/fa";
import socket from "../../../socket";
import { useAppContext } from "../context/AppContext";

export default function TenderWithBidsCard({
  id,
  setActiveSection,
  setSelectedChat,
}) {
  const axios = axiosAPI();
  const { user } = useAppContext();
  const [tender, setTender] = useState({});
  const getBids = async () => {
    try {
      const { data } = await axios.get(`/tenders/${id}`);
      setTender(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getBids();
  }, []);
  const handleChatNow = async (bid) => {
    try {
      const payload = {
        tenderId: tender._id,
        bidId: bid._id,
        buyerId: user?._id, // or currentUserId
        supplierId: bid.user?._id,
      };

      const res = await axios.post("/chats", payload);
      const chat = res.data;

      // Join chat room using socket
      socket.emit("joinChat", chat._id);
      // Optionally: send an intro message
      socket.emit("sendMessage", {
        chatId: chat._id,
        message: {
          sender: payload.buyerId, // current user
          content: "Hi, I'm interested in your bid.",
          timestamp: new Date(),
        },
      });

      // Redirect or set current chat state
      setSelectedChat(chat);
      setActiveSection("chats", chat);
    } catch (err) {
      console.error("Error creating chat:", err);
    }
  };

  if (!tender) {
    return <>Please Wait...</>;
  }
  return (
    <div className=" mx-auto p-6 h-full bg-white rounded-2xl shadow-md border border-gray-200 ">
      {/* Tender Header */}
      <div className="mb-4">
        <div className="flex items-center pb-4 justify-between">
          <button
            onClick={() => setActiveSection("my-tenders")}
            className="p-2 rounded-lg cursor-pointer flex gap-1 items-center justify-center text-white bg-black"
          >
            {" "}
            <FaChevronLeft /> Back
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {tender?.requirement}
          </h2>
          <span className="text-sm font-bold text-gray-800">
            {tender?.tenderId}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Posted on {new Date(tender?.createdAt)?.toLocaleDateString()} |
          Location: <span className="font-medium">{tender?.location}</span>
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
        <div>
          <span className="font-medium">Category:</span> {tender?.category}
        </div>
        <div>
          <span className="font-medium">Subcategory:</span>{" "}
          {tender?.subcategory}
        </div>
        <div>
          <span className="font-medium">Quantity:</span> {tender?.quantity}
        </div>
        <div>
          <span className="font-medium">Expected Price:</span> ₹
          {tender?.minPrice?.toLocaleString()} - ₹
          {tender?.maxPrice?.toLocaleString()}
        </div>
        <div>
          <span className="font-medium">Timeline:</span>{" "}
          {new Date(tender?.timeline).toLocaleDateString()}
        </div>
        <div>
          <span className="font-medium">Status:</span>{" "}
          {tender?.agreed ? (
            <span className="text-green-600 font-medium">Approved</span>
          ) : (
            <span className="text-red-500 font-medium">Pending</span>
          )}
        </div>
      </div>

      {/* Bids Section */}
      <div className="mt-6 ">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Bids</h3>
        <div className="max-h-[50vh] overflow-auto pb-16">
          {tender?.bids && tender?.bids.length > 0 ? (
            <div className="space-y-4">
              {tender?.bids.map((bid, index) => (
                <div
                  key={bid._id}
                  className="p-4 rounded-xl border border-gray-200 shadow-sm bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">
                        Bid - {index + 1}
                      </p>
                      <p className="text-sm text-gray-600">
                        Quantity: {bid.quantity} × ₹
                        {bid.amount.toLocaleString()} ={" "}
                        <span className="font-semibold">
                          ₹{bid.totalAmount.toLocaleString("en-IN")}
                        </span>
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 text-right">
                      {new Date(bid.createdAt).toLocaleDateString("en-IN")}
                    </div>
                  </div>
                  {bid.description && (
                    <p className="text-sm text-gray-700 mt-2 italic">
                      "{bid.description}"
                    </p>
                  )}
                  <button
                    onClick={() => handleChatNow(bid)}
                    className="mt-3 rounded-lg bg-[#0200b9] p-3 text-white"
                  >
                    Chat Now
                  </button>
                  <div
                    className="text-sm text-right
                                     text-gray-600"
                  >
                    <p className="font-medium text-gray-800">
                      {bid.user?.name || "Unknown Bidder"}
                    </p>
                    <p>{bid.user?.email}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">No bids yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

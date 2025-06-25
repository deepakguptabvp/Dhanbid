import React, { useEffect, useState, useRef } from "react";
import { FiSend, FiMenu } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { motion } from "framer-motion";
import socket from "../../../socket";
import axiosAPI from "../api/useAxios";
import { useAppContext } from "../context/AppContext";

export default function ChatInterface({ currentUser }) {
  const axios = axiosAPI();
  const { user } = useAppContext();
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatMessages, setChatMessages] = useState({});
  const [input, setInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  // const messagesEndRef = useRef(null);

  // Fetch supplier chats
  useEffect(() => {
    if (!user?._id) return;
    const fetchChats = async () => {
      try {
        const { data } = await axios.get(`/chats?userId=${user._id}&role=supplier`);
        setChats(data);
        if (data.length > 0) {
          setSelectedChat(data[0]);
        }
      } catch (err) {
        console.error("Failed to fetch chats", err);
      }
    };
    fetchChats();
  }, [currentUser, user]);

  // Join room when chat is selected
  useEffect(() => {
    if (selectedChat?._id) {
      socket.emit("joinChat", selectedChat._id);
    }
  }, [selectedChat]);

  // Scroll to bottom when messages update
  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [chatMessages, selectedChat]);

  // Handle incoming messages
  useEffect(() => {
    const handleNewMessage = (message) => {
      setChatMessages((prev) => {
        const existing = prev[message.chatId] || [];
        return {
          ...prev,
          [message.chatId]: [...existing, message],
        };
      });
    };

    socket.on("newMessage", handleNewMessage);
    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim() || !selectedChat) return;

    const message = {
      sender: user._id,
      text: input.trim(),
      timestamp: new Date(),
    };

    // Emit to socket
    socket.emit("sendMessage", {
      chatId: selectedChat._id,
      message,
    });

    // Add locally
    setChatMessages((prev) => ({
      ...prev,
      [selectedChat._id]: [...(prev[selectedChat._id] || []), message],
    }));

    // Save to DB
    try {
      await axios.post(`/messages/${selectedChat._id}`, {
        senderId: user._id,
        text: message.content,
      });
    } catch (err) {
      console.error("Failed to save message", err);
    }

    setInput("");
  };

  const selectedMessages = selectedChat
    ? chatMessages[selectedChat._id] || []
    : [];

  return (
    <div className="flex h-full  bg-white text-gray-900 overflow-hidden relative">
      {/* Sidebar */}
      <div
        className={`w-64 bg-gray-100 p-4 overflow-y-auto duration-300 ${
          showSidebar ? "fixed z-30 top-0 left-0 h-full" : "hidden lg:block"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BsChatDots /> Buyers
          </h2>
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setShowSidebar(false)}
          >
            ✕
          </button>
        </div>

        {chats.map((chat) => (
          <div
            key={chat._id}
            onClick={() => {
              setSelectedChat(chat);
              setShowSidebar(false);
            }}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-2 transition ${
              selectedChat?._id === chat._id
                ? "bg-blue-100"
                : "hover:bg-gray-200"
            }`}
          >
            <img
              src={
                chat.buyerId?.avatar ||
                `https://i.pravatar.cc/150?u=${chat.buyerId?._id}`
              }
              alt={chat.buyerId?.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{chat.buyerId?.name}</p>
              <p className="text-xs text-gray-500">
                {chat.tenderId?.requirement}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Chat Window */}
      <div className="flex-1 flex max-h-[90vh] overflow-auto flex-col ">
        {/* Header */}
        <div className="border-b bg-white px-4 py-4 flex items-center gap-4 shadow-sm">
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setShowSidebar(true)}
          >
            <FiMenu size={24} />
          </button>
          <h3 className="text-lg font-semibold">
            {selectedChat?.buyerId?.name || "Select a chat"}
          </h3>
        </div>

        {/* Messages */}
        <motion.div
          key={selectedChat?._id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 md:p-6 overflow-y-auto space-y-3"
        >
          {selectedMessages.map((msg, idx) => (
            <div
              key={idx*13}
              className={`max-w-xs px-4 py-2 rounded-xl text-sm shadow-md ${
                msg.sender === user._id
                  ? "bg-blue-600 text-white self-end ml-auto"
                  : "bg-gray-200 text-gray-800 self-start"
              }`}
            >
              {msg.content||msg.text}
            </div>
          ))}
          {/* <div ref={messagesEndRef} /> */}
        </motion.div>

        {/* Input */}
        {selectedChat && (
          <div className="p-4 border-t bg-white shadow-inner">
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white"
              >
                <FiSend />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

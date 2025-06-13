// ChatInterface.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMenu } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";

const buyers = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Looking forward to your response",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Sarah Smith",
    lastMessage: "Please check the bid",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "David Lee",
    lastMessage: "Any update?",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const messages = {
  1: [
    { from: "buyer", text: "Can you lower your bid?" },
    { from: "supplier", text: "Let me check with my team." },
  ],
  2: [{ from: "buyer", text: "We are considering your bid." }],
  3: [{ from: "buyer", text: "We need faster delivery." }],
};

export default function ChatInterface() {
  const [selectedBuyerId, setSelectedBuyerId] = useState(1);
  const [input, setInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const selectedMessages = messages[selectedBuyerId] || [];

  const handleSend = () => {
    if (!input.trim()) return;
    messages[selectedBuyerId] = [
      ...selectedMessages,
      { from: "supplier", text: input },
    ];
    setInput("");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Sidebar - responsive */}
      <div
        className={`fixed inset-y-0 left-0 z-30 bg-gray-800/70 backdrop-blur-md p-4 overflow-y-auto transform transition-transform duration-300 lg:static lg:translate-x-0 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BsChatDots /> Messages
          </h2>
          <button
            className="lg:hidden text-white"
            onClick={() => setShowSidebar(false)}
          >
            ✕
          </button>
        </div>
        {buyers.map((buyer) => (
          <div
            key={buyer.id}
            onClick={() => {
              setSelectedBuyerId(buyer.id);
              setShowSidebar(false);
            }}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer mb-2 ${
              selectedBuyerId === buyer.id
                ? "bg-purple-500/30"
                : "hover:bg-gray-700/50"
            }`}
          >
            <img
              src={buyer.avatar}
              alt={buyer.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{buyer.name}</p>
              <p className="text-xs text-gray-300">{buyer.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay for mobile */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col relative">
        <div className="border-b border-gray-700 px-4 py-4 bg-gray-800/60 backdrop-blur-md flex items-center justify-between lg:justify-start gap-4">
          <button
            className="lg:hidden text-white"
            onClick={() => setShowSidebar(true)}
          >
            <FiMenu size={24} />
          </button>
          <h3 className="text-lg font-semibold">
            {buyers.find((b) => b.id === selectedBuyerId)?.name}
          </h3>
        </div>

        {/* Messages */}
        <motion.div
          key={selectedBuyerId}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 md:p-6 overflow-y-auto space-y-2"
        >
          {selectedMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-xs px-4 py-2 rounded-xl text-sm ${
                msg.from === "buyer"
                  ? "bg-white/10 text-gray-200 self-start"
                  : "bg-purple-600 text-white self-end ml-auto"
              }`}
            >
              {/* {msg.from === "buyer"&&<img src={}/>} */}
              {msg.text}
            </div>
          ))}
        </motion.div>

        {/* Input Box */}
        <div className="p-4 border-t border-gray-700 bg-gray-800/60 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="p-2 bg-purple-600 hover:bg-purple-700 rounded-full transition"
            >
              <FiSend className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

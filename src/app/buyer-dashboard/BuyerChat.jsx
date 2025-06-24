import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMenu } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";

const suppliers = [
  {
    id: 1,
    name: "Acme Supplies",
    lastMessage: "Sure, I’ll check and revert.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 2,
    name: "Global Trade Co.",
    lastMessage: "Awaiting your confirmation.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export default function ChatInterface() {
  const [selectedSupplierId, setSelectedSupplierId] = useState(1);
  const [input, setInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [messages, setMessages] = useState({
    1: [{ from: "buyer", text: "Hi, could you provide a better quote?" }],
    2: [{ from: "buyer", text: "Can you confirm delivery timelines?" }],
  });

  const selectedMessages = messages[selectedSupplierId] || [];

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = {
      ...messages,
      [selectedSupplierId]: [
        ...selectedMessages,
        { from: "buyer", text: input.trim() },
      ],
    };

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-[200] bg-white shadow-md p-4 overflow-y-auto transform transition-transform duration-300 lg:static lg:translate-x-0 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BsChatDots /> Suppliers
          </h2>
          <button className="lg:hidden" onClick={() => setShowSidebar(false)}>
            ✕
          </button>
        </div>

        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            onClick={() => {
              setSelectedSupplierId(supplier.id);
              setShowSidebar(false);
            }}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-2 transition ${
              selectedSupplierId === supplier.id
                ? "bg-blue-100"
                : "hover:bg-gray-200"
            }`}
          >
            <img
              src={supplier.avatar}
              alt={supplier.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{supplier.name}</p>
              <p className="text-xs text-gray-500">{supplier.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay for mobile */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/20 z-[150] lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b bg-white px-4 py-4 flex items-center gap-4 shadow-sm">
          <button className="lg:hidden" onClick={() => setShowSidebar(true)}>
            <FiMenu size={24} />
          </button>
          <h3 className="text-lg font-semibold">
            {
              suppliers.find((s) => s.id === selectedSupplierId)?.name
            }
          </h3>
        </div>

        {/* Messages */}
        <motion.div
          key={selectedSupplierId}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 md:p-6 overflow-y-auto space-y-3"
        >
          {selectedMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-xs px-4 py-2 rounded-xl text-sm shadow-md ${
                msg.from === "buyer"
                  ? "bg-blue-600 text-white self-end ml-auto"
                  : "bg-gray-200 text-gray-800 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </motion.div>

        {/* Input Box */}
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
      </div>
    </div>
  );
}

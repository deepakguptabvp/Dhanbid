import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMenu } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import socket from "../../../socket"; // socket.io-client setup
import axiosAPI from "../api/useAxios";
import { useAppContext } from "../context/AppContext";

export default function ChatInterface({ chat, userId, role }) {

  useEffect(() => {
    if (chat?._id) {
      socket.emit("joinChat", chat._id);
    }
  }, [chat]);
  const axios = axiosAPI();
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(chat);
  const [input, setInput] = useState("");
  const { user } = useAppContext();
  const [showSidebar, setShowSidebar] = useState(false);
  const [messages, setMessages] = useState({}); // chatId: [msg, msg]
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  // Fetch all chats based on user role
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get(`/chats?userId=${userId}&role=${role}`);
        setChats(res.data);
        setSelectedChat(chat);
      } catch (err) {
        console.error("Error fetching chats", err);
      }
    };
    fetchChats();
  }, [userId, role]);
  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Socket connected:", socket.id);
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("Socket disconnected");
  //   });

  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //   };
  // }, []);

  // Join room and load messages
  const handleChatSelect = async (chat) => {
    setSelectedChat(chat);
    socket.emit("joinChat", chat._id);

    try {
      const { data } = await axios.get(`/chats/${selectedChat._id}`);

      // ✅ Update read status
      const { data: readData } = await axios.put(`/chats/${selectedChat._id}/read`, {
        userId: user._id,
      });
      console.log(readData)
      setMessages((prev) => ({
        ...prev,
        [selectedChat._id]: data.messages,
      }));
console.log(user)
      // Refresh chat list to reflect unread -> read
      const refreshedChats = await axios.get(`/chats?userId=${user._id}&role=buyer`);
      setChats(refreshedChats.data);
    } catch (err) {
      console.error("Failed to fetch messages", err);
    }
  };

  const selectedMessages = selectedChat?._id
    ? messages[selectedChat._id] || []
    : [];

  // Listen for incoming messages
  useEffect(() => {
    const handleMessage = (message) => {
      const { chatId } = message;
      console.log("Check", message)
      setMessages((prev) => ({
        ...prev,
        [chatId]: [...(prev[chatId] || []), message],
      }));
    };

    // socket.off("newMessage", handleMessage); // clean before add
    socket.on("newMessage", handleMessage);

    return () => {
      socket.off("newMessage", handleMessage);
    };
  }, []);
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [selectedMessages, selectedChat]);

  const handleSend = async () => {
    if (!input.trim() || !selectedChat) return;
    const receiverId = selectedChat.supplierId._id || selectedChat.supplierId
    const message = {
      chatId: selectedChat._id,
      receiverId,
      message: {
        sender: userId,
        text: input.trim(),
        timestamp: new Date(),
      },
    };

    // Emit socket event
    socket.emit("sendMessage", message);
    const { data } = await axios.post(`messages/${selectedChat._id}`, { senderId: userId, text: input.trim() });
    // Update local UI immediately
    setMessages((prev) => ({
      ...prev,
      [selectedChat._id]: [...(prev[selectedChat._id] || []), message.message],
    }));

    setInput("");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-[200] bg-white shadow-md p-4 overflow-y-auto transform transition-transform duration-300 lg:static lg:translate-x-0 ${showSidebar ? "translate-x-0" : "-translate-x-full"
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

        {chats.map((chat) => {
          const otherUser = chat.supplierId;

          return (
            <div
              key={chat._id}
              onClick={() => {
                handleChatSelect(chat);
                setShowSidebar(false);
              }}
              c className={`flex items-center z-[200] gap-3 p-3 rounded-lg cursor-pointer mb-2 transition 
    ${selectedChat?._id === chat._id ? "bg-blue-100" : chat.isUnread ? "bg-yellow-100" : "hover:bg-gray-200"}`}
            >

              <img
                src={
                  chat.supplierId?.avatar ||
                  `https://i.pravatar.cc/150?u=${chat.supplierId?._id}`
                }
                alt={chat.supplierId?.name || chat.supplierId?.phone}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{chat.supplierId?.name || chat.supplierId?.phone}</p>
                <p
                  className={`text-sm truncate ${chat.isUnread ? "font-bold text-black" : "text-light text-gray-500"}`}
                >
                  {chat.lastMessage?.text || chat.tenderId?.requirement || "No messages yet"}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/20 z-[150] lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Main Chat Window */}
      <div className="flex-1 max-h-[90vh] overflow-auto flex flex-col">
        {/* Header */}
        <div className="border-b bg-white px-4 py-4 flex items-center gap-4 shadow-sm">
          <button className="lg:hidden" onClick={() => setShowSidebar(true)}>
            <FiMenu size={24} />
          </button>
          <h3 className="text-lg font-semibold">
            {selectedChat
              ? (role === "buyer"
                ? selectedChat.supplierId?.name
                : selectedChat.buyerId?.name)
              : "Select a Chat"}
          </h3>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={messagesContainerRef}
            className="h-full overflow-y-auto p-4 md:p-6 space-y-3"
          >
            {selectedMessages.map((msg, idx) => {
              const isSender = msg.sender === user._id;
              return (
                <div
                  key={idx}
                  className={`flex ${isSender ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm shadow-md transition-all
              ${isSender
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-900 rounded-bl-none"}`}
                  >
                    {msg.text || msg.content}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        </div>


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

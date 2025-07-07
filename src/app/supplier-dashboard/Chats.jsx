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
  const [loadingMessages, setLoadingMessages] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  // Fetch supplier chats
  useEffect(() => {
    if (!user?._id) return;
    const fetchChats = async () => {
      try {
        const { data } = await axios.get(`/chats?userId=${user._id}&role=supplier`);
        setChats(data);
        if (data.length > 0) {
          setSelectedChat({ ...data[0], isUnread: false });
        }
      } catch (err) {
        console.error("Failed to fetch chats", err);
      }
    };
    fetchChats();
  }, [currentUser, user]);

  // Fetch messages when a chat is selected
  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedChat?._id) return;
      setLoadingMessages(true);
      try {
        const { data } = await axios.get(`/chats/${selectedChat._id}`);

        // ✅ Update read status
        const { data: readData } = await axios.put(`/chats/${selectedChat._id}/read`, {
          userId: user._id,
        });
        console.log(readData)
        setChatMessages((prev) => ({
          ...prev,
          [selectedChat._id]: data.messages,
        }));
        
        // Refresh chat list to reflect unread -> read
        const refreshedChats = await axios.get(`/chats?userId=${user._id}&role=supplier`);
        setChats(refreshedChats.data);
        setChats((prevChats) =>
          prevChats.map((chat) =>
            chat._id === selectedChat._id
              ? { ...chat, isUnread: false }
              : chat
          )
        );
      } catch (err) {
        console.error("Failed to fetch messages", err);
      } finally {
        setLoadingMessages(false);
      }
    };

    fetchMessages();
    if (selectedChat?._id) {
      socket.emit("joinChat", selectedChat._id);
    }
  }, [selectedChat]);


  // Handle incoming messages via socket
  useEffect(() => {
    const handleNewMessage = (message) => {
      console.log(message)

      setChatMessages((prev) => {
        const existing = prev[message.chatId] || [];
        return {
          ...prev,
          [message.chatId]: [...existing, message],
        };
      });
    };
    socket.on("newMessage", handleNewMessage);
    return () => socket.off("newMessage", handleNewMessage);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [chatMessages, selectedChat]);


  const handleSend = async () => {
    if (!input.trim() || !selectedChat) return;

    const message = {
      sender: user._id,
      text: input.trim(),
      timestamp: new Date(),
    };

    const receiverId = selectedChat.buyerId._id || selectedChat.buyerId; // Ensure this is a user ID

    // ✅ Emit complete message with receiverId + senderId
    socket.emit("sendMessage", {
      chatId: selectedChat._id,
      message,
      receiverId,
      senderId: user._id,
    });

    // Show locally
    setChatMessages((prev) => ({
      ...prev,
      [selectedChat._id]: [...(prev[selectedChat._id] || []), message],
    }));

    try {
      await axios.post(`/messages/${selectedChat._id}`, {
        senderId: user._id,
        text: message.text,
      });
    } catch (err) {
      console.error("Failed to save message", err);
    }

    setInput("");
  };


  const selectedMessages = selectedChat ? chatMessages[selectedChat._id] || [] : [];
  console.log(chats)
  return (
    <div className="flex h-full min-h-[80vh] max-h-[85vh] bg-white text-gray-900 overflow-hidden relative">
      {/* Sidebar */}
      <div
        className={`w-64 bg-gray-100 p-4 overflow-y-auto duration-300 ${showSidebar ? "fixed z-[200] top-0 left-0 h-full" : "hidden lg:block"
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
            className={`flex items-center z-[200] gap-3 p-3 rounded-lg cursor-pointer mb-2 transition 
    ${selectedChat?._id === chat._id ? "bg-blue-100" : chat.isUnread ? "bg-yellow-100" : "hover:bg-gray-200"}`}
          >

            <img
              src={
                chat.buyerId?.avatar ||
                `https://i.pravatar.cc/150?u=${chat.buyerId?._id}`
              }
              alt={chat.buyerId?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{chat.buyerId?.name}</p>
              <p
                className={`text-sm truncate ${chat.isUnread ? "font-bold text-black" : "text-light text-gray-500"}`}
              >
                {chat.lastMessage?.text || chat.tenderId?.requirement || "No messages yet"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/30 z-[100] lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Chat Window */}
      <div className="flex-1 flex flex-col overflow-hidden">
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
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <input
                type="text"
                className="flex-1 bg-transparent focus:outline-none text-sm"
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

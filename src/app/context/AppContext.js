// context/AppContext.js
"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [myTenders, setMyTenders] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, myTenders, setMyTenders }}>
      {children}
    </AppContext.Provider>
  );
};

// Optional: for easy useContext import
export const useAppContext = () => useContext(AppContext);

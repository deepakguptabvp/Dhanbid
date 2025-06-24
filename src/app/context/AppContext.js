// context/AppContext.js
"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [myTenders, setMyTenders] = useState([]);
  const [tenders, setTenders] = useState([]);
  const [bids, setBids] = useState([]);
  const [myBids, setMyBids] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, myTenders, setMyTenders, tenders, setTenders, bids, setBids, myBids, setMyBids }}>
      {children}
    </AppContext.Provider>
  );
};

// Optional: for easy useContext import
export const useAppContext = () => useContext(AppContext);

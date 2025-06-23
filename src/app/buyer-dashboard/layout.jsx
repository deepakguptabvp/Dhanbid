import React from "react";

export const metadata = {
  title: "Buyer Dashboard | DhanBid",
  description: "Manage tenders and view bids",
};

export default function BuyerDashboardLayout({ children }) {
  return (
    <div className="flex flex-1">
        {/* Navbar component */}

        
          {/* Sidebar for navigation */}
          {/* <Sidebar role="buyer" /> */}

          {/* Main content area */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
  );
}

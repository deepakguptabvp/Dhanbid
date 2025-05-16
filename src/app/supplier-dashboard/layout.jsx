import React from "react";

export const metadata = {
  title: "Seller Dashboard | DhanBid",
  description: "Manage bids and view tenders",
};

export default function BuyerDashboardLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navbar component */}

        <div className="flex flex-1">
          {/* Sidebar for navigation */}
          {/* <Sidebar role="seller" /> */}

          {/* Main content area */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
        {/* Footer Component */}
      </body>
    </html>
  );
}

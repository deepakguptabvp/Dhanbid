import React from "react";

export const metadata = {
  title: "Buyer Dashboard | DhanBid",
  description: "Manage tenders and view bids",
};

export default function BuyerDashboardLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navbar component */}

        <div className="flex flex-1">
          {/* Sidebar for navigation */}
          {/* <Sidebar role="buyer" /> */}

          {/* Main content area */}
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
            {children}
          </main>
        </div>
        {/* Footer Component */}
      </body>
    </html>
  );
}

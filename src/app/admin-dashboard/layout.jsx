import React from "react";

export const metadata = {
  title: "Admin Dashboard | Dhanbid",
  description:
    "Manage buyer tenders and supplier bids and check report analysis",
};

export default function layout({ children }) {
  return (
    <div className="flex flex-1 dark:bg-white dark:text-black">
      <main className="flex overflow-y-auto">{children}</main>
    </div>
  );
}

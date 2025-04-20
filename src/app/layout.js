'use client';

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
// import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  // const pathname = usePathname();

  // const showSidebar = pathname === "/dashboard";

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <div className={`flex flex-1 w-full`}>
          {/* Render Sidebar only on /login/dashboard */}
          {/* <Sidebar /> */}

          <main className="flex-1 p-4">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}

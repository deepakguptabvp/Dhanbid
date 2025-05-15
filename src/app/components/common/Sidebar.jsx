// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { BiMenu } from "react-icons/bi";

// const navItems = [
//   { label: "Dashboard", href: "/dashboard", icon: "bi-speedometer2" },
//   {
//     label: "Tenders",
//     href: "/dashboard/tenders",
//     icon: "bi-file-earmark-text",
//   },
//   { label: "Reports", href: "/dashboard/reports", icon: "bi-bar-chart-line" },
//   { label: "Profile", href: "/dashboard/profile", icon: "bi-person-circle" },
//   { label: "Settings", href: "/dashboard/settings", icon: "bi-gear" },
//   { label: "Logout", href: "/logout", icon: "bi-box-arrow-right" },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <aside
//       className={`bg-gray-100 border-r p-4 min-h-screen ${
//         collapsed ? "w-16" : "w-64"
//       } transition-all duration-300`}
//     >
//       <div className="flex justify-between items-center mb-8">
//         {!collapsed && (
//           <h2 className="text-xl font-bold text-purple-700">Dhanbid</h2>
//         )}
//         <button onClick={() => setCollapsed(!collapsed)} className="text-xl">
//           <BiMenu />
//         </button>
//       </div>

//       <nav className="space-y-2">
//         {navItems.map((item, index) => {
//           const isActive = pathname === item.href;
//           return (
//             <Link
//               href={item.href}
//               key={index}
//               className={`flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer ${
//                 isActive
//                   ? "bg-purple-500 text-white"
//                   : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"
//               }`}
//             >
//               <i className={`bi ${item.icon} text-lg`}></i>
//               {!collapsed && <span>{item.label}</span>}
//             </Link>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// }

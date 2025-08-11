// src/components/Sidebar.jsx
import React from "react";
import { User, FileText, Compass, Heart, CheckCircle } from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { label: "My Profile", icon: <User size={18} /> },
    { label: "My Posts", icon: <FileText size={18} /> },
    { label: "Browse Listings", icon: <Compass size={18} /> },
    { label: "My Matches", icon: <Heart size={18} /> },
    { label: "Completed History", icon: <CheckCircle size={18} /> },
  ];

  return (
    <aside className="bg-white w-60 shadow-md p-4 flex flex-col gap-3">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100 text-gray-700"
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </aside>
  );
}

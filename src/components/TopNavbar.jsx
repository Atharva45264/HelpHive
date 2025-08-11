// src/components/Navbar.jsx
import React from "react";
import { Bell, Search } from "lucide-react"; // npm install lucide-react

export default function TopNavbar() {
  return (
    <nav className="bg-purple-600 text-white flex items-center justify-between px-6 py-3 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/src/assets/mylogo.png" alt="Helphive Logo" className="h-8" />
        <span className="font-bold text-lg">Helphive</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full px-3 py-1 w-1/3">
        <Search className="text-gray-500 mr-2" size={18} />
        <input
          type="text"
          placeholder="Search listings or profiles..."
          className="w-full bg-transparent outline-none text-gray-700"
        />
      </div>

      {/* Notifications & User Avatar */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Avatar */}
        <img
          src="/src/assets/avatar1.png"
          alt="User Avatar"
          className="h-8 w-8 rounded-full cursor-pointer border-2 border-white"
        />
      </div>
    </nav>
  );
}

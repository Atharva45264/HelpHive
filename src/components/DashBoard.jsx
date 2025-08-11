// src/pages/Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../components/TopNavbar";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

// Dashboard Page
export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <motion.main
          className="flex-1 p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.h1
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Dashboard Overview
          </motion.h1>

          {/* Cards View */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Active Requests", "Completed Tasks", "New Messages"].map(
              (title, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200"
                >
                  <h2 className="text-xl font-semibold mb-2">{title}</h2>
                  <p className="text-3xl font-bold text-indigo-600">
                    {Math.floor(Math.random() * 100)}
                  </p>
                </motion.div>
              )
            )}
          </div>

          {/* Map View */}
          <motion.div
            className="mt-10 bg-white shadow-xl rounded-2xl p-4 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">📍 Map View</h2>
            <MapContainer
              center={[19.076, 72.8777]} // Mumbai coords
              zoom={10}
              style={{ height: "400px", borderRadius: "12px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              />
              <Marker position={[19.076, 72.8777]}>
                <Popup>Mumbai - Example Location</Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </motion.main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}

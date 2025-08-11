// src/components/MainContent.jsx
import React, { useState } from "react";

export default function MainContent() {
  const [view, setView] = useState("cards");

  return (
    <main className="flex-1 bg-gray-100 p-4 relative">
      {/* View Switch */}
      <div className="flex gap-3 mb-4">
        <button
          className={`px-4 py-2 rounded-md ${view === "cards" ? "bg-purple-600 text-white" : "bg-white"}`}
          onClick={() => setView("cards")}
        >
          Cards View
        </button>
        <button
          className={`px-4 py-2 rounded-md ${view === "map" ? "bg-purple-600 text-white" : "bg-white"}`}
          onClick={() => setView("map")}
        >
          Map View
        </button>
      </div>

      {/* Listings */}
      {view === "cards" ? (
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="bg-white rounded-lg shadow p-4">
              <h4 className="font-semibold">Listing {id}</h4>
              <p className="text-sm text-gray-600">Brief details about listing...</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow h-[500px] flex items-center justify-center">
          <p>Map View Placeholder</p>
        </div>
      )}

      {/* Floating Action Button */}
      <button className="absolute bottom-6 right-6 bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700">
        +
      </button>
    </main>
  );
}

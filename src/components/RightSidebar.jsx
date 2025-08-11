// src/components/RightSidebar.jsx
import React from "react";

export default function RightSidebar() {
  return (
    <aside className="bg-white w-72 shadow-md p-4 flex flex-col gap-6">
      {/* Quick Chat List */}
      <section>
        <h3 className="font-semibold mb-2">Chats</h3>
        <div className="flex flex-col gap-2">
          {["Alice", "Bob", "Charlie"].map((name, i) => (
            <div key={i} className="flex items-center gap-3 hover:bg-purple-100 p-2 rounded-md">
              <img src={`/src/assets/avatar2.png`} alt={name} className="w-8 h-8 rounded-full" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard */}
      <section>
        <h3 className="font-semibold mb-2">Leaderboard</h3>
        <ol className="list-decimal pl-4 text-gray-700">
          <li>John Doe - 120 pts</li>
          <li>Jane Smith - 110 pts</li>
          <li>Mike Ross - 90 pts</li>
        </ol>
      </section>

      {/* Requests Timeline */}
      <section>
        <h3 className="font-semibold mb-2">Upcoming Requests</h3>
        <ul className="border-l-2 border-purple-400 pl-3 space-y-2">
          <li>
            <p className="text-sm">Help with moving - Aug 12</p>
          </li>
          <li>
            <p className="text-sm">Grocery delivery - Aug 14</p>
          </li>
        </ul>
      </section>
    </aside>
  );
}

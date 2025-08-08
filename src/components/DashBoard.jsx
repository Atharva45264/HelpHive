// Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Star, Bell } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen text-gray-900" style={{ paddingTop: "80px" }}>
      {/* Header */}
      <motion.header
        className="bg-purple-600 shadow-md p-6 flex justify-between items-center"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          HelpHive Dashboard
        </h1>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="text-center py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-purple-600 mb-4">
          Welcome to HelpHive 🐝
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Connecting people who need help with those willing to offer it, right in your local community.
          Post requests, volunteer your skills, and build a culture of kindness.
        </p>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <FeatureCard
          icon={<MapPin size={40} className="text-purple-500" />}
          title="Location-Based Matching"
          desc="Find and connect with nearby helpers or requesters using geolocation and pin-code filters."
        />
        <FeatureCard
          icon={<Users size={40} className="text-purple-500" />}
          title="Post or Offer Help"
          desc="Easily post your request or offer your skills by specifying category, urgency, and availability."
        />
        <FeatureCard
          icon={<Star size={40} className="text-purple-500" />}
          title="Trust & Reputation"
          desc="Ratings, reviews, and verification badges to ensure safety and trust in the community."
        />
        <FeatureCard
          icon={<Bell size={40} className="text-purple-500" />}
          title="Real-Time Alerts & Chat"
          desc="Instant notifications and in-app chat to coordinate help faster and more efficiently."
        />
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="bg-purple-100 py-12 px-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-purple-700 mb-4">
          Our Mission
        </h3>
        <p className="max-w-3xl mx-auto text-gray-800">
          We aim to empower local communities by creating a centralized, transparent, and easy-to-use platform that brings neighbors together for mutual aid.
          HelpHive is more than a platform — it's a movement towards kindness, collaboration, and trust.
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="text-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h4 className="text-2xl font-bold text-purple-600 mb-4">
          Ready to make a difference?
        </h4>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition">
          Post a Request / Offer Help
        </button>
      </motion.section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1"
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}

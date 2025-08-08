import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Ask Queries",
    description: "Facing doubts or challenges? Easily post your technical, academic, or project-related queries. Get solutions quickly from peers or experts. No question is too small — the platform encourages open discussion. Use tags for better visibility. Keep your learning on track with solid answers.",
    icon: "❓"
  },
  {
    title: "Community Support",
    description: "Collaborate with a growing network of learners and professionals. Verified users and moderators ensure the quality of answers. Discuss real-world use cases, debug issues, or brainstorm ideas together. Learn from diverse perspectives. Grow your reputation as a trusted contributor.",
    icon: "🤝"
  },
  {
    title: "Instant Alerts",
    description: "Stay informed without constantly checking the site. Get real-time notifications when someone answers your question or interacts with your post. Enable browser push notifications or receive email alerts. Never miss an important reply. Stay engaged, effortlessly.",
    icon: "🔔"
  }
];

function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 px-6 text-center bg-gradient-to-b from-white to-indigo-50"
    >
      <h3 className="text-4xl font-extrabold text-indigo-700 mb-12">Why Choose Us?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;

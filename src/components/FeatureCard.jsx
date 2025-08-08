import React from 'react';

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-primary-light text-gray-800 p-6 rounded-lg shadow-md transition duration-300">
      <div className="text-4xl mb-4 bg-indigo-100 dark:bg-yellow-600 p-3 rounded-full inline-flex items-center justify-center">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default FeatureCard;



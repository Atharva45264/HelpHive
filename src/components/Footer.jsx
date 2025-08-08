import React from 'react';

function Footer() {
  return (
    <footer className="bg-purple-200 dark:bg-purple-900 text-gray-800 dark:text-white text-center py-6 mt-10 transition-colors duration-300">
      <p>&copy; {new Date().getFullYear()} HelpHive. All rights reserved.</p>
    </footer>
  );
}

export default Footer;


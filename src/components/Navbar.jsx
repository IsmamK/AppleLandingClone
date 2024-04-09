// components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md py-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">My Website</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-white hover:text-gray-300 transition duration-300 font-medium">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 transition duration-300 font-medium">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 transition duration-300 font-medium">Products</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 transition duration-300 font-medium">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

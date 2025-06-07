import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow py-3">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <h1 className="text-lg font-semibold text-blue-600">Todo App</h1>
        <ul className="flex gap-10 list-none text-base text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">Products</li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">About</li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

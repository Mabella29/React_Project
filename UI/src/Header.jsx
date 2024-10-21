import React from 'react';
import { FiCalendar, FiDownload } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="bg-white px-8 py-4 flex justify-between items-center bg-gray-100">
      
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
      </div>


      <div className="flex items-center space-x-4">
      <button className="flex items-center bg-blue-50  py-2 px-4 rounded-full shadow-sm border border-black hover:bg-blue-100">
          <FiDownload className="mr-2" /> 
        </button>
        <div className="bg-green-50 text-gray-600 py-1.5 px-4 rounded-full shadow-inner flex items-center space-x-2">
          <span>June 22, 2023</span>
          <FiCalendar className="text-green-600" />
        </div>
        <button className="bg-red-500 text-white py-2 px-5 rounded-full flex items-center shadow-lg">
          <span className="font-semibold">Add Customer</span>
          <span className="text-2xl font-semibold ml-2">+</span>
        </button>
        
      </div>
    </div>
  );
};

export default Header;

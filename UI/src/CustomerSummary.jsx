import React from 'react';

const CustomerSummary = ({ title, value, percentage, increase }) => {
  return (
    <div className="bg-white p-4 rounded-lg h-32 my-5 flex flex-col justify-between relative">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <div className="flex flex-col items-center space-y-1 cursor-pointer">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      <hr className="border-t-1 border-gray-200 w-full my-2" />
      <div className="flex items-baseline space-x-2">
        <p className="text-4xl font-bold">{value}</p>
        <span className={`text-sm ${increase ? 'text-green-500' : 'text-red-500'}`}>
          {increase ? `▲ ${percentage}%` : `▼ ${percentage}%`}
        </span>
      </div>
      <p className="text-xs text-gray-400">from last week</p>
    </div>
  );
};

export default CustomerSummary;

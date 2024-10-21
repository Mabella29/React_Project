import React from 'react'

const NavBar = () => {
  return (
    <nav className="p-6 shadow-md bg-white flex items-center justify-between w-full  border-b border-gray-200 shadow-sm">
    <div className="space-x-4 flex">
      <a href="#" className="text-gray-600 hover:text-black">Dashboard</a>
      <a href="#" className="text-gray-600 hover:text-black">Statistik</a>
      <a href="#" className="text-gray-600 hover:text-black">Product</a>
      <a href="/Components/CustomerSummary" className="text-black font-bold border-b-2 border-orange-500">Customer</a>
      <a href="#" className="text-gray-600 hover:text-black">Review</a>
      <a href="#" className="text-gray-600 hover:text-black">Settings</a>
    </div>
  
    <button className="flex items-center">
      <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">N</div>
      <span className="ml-2">EN</span>
    </button>
  </nav>
  

   

  
    )
   
}

export default NavBar

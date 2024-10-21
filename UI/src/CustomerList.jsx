import React, { useState, useEffect } from 'react';

function CustomerList() {
  const mockCustomers = [
    { id: 1, name: "Caden Morse", email: "raines@live.com", billingDate: "June 12, 2023", plan: "Team", amount: "$5,000/year", a: "Average", totalUsers: 10 },
    { id: 2, name: "Santino Marsh", email: "whimsy@comcast.net", billingDate: "June 12, 2023", plan: "Team", amount: "$19,000/year", a: "Average", totalUsers: 44 },
    { id: 3, name: "Kristin Zavola", email: "garyb@ssbglobal.net", billingDate: "June 12, 2023", plan: "Team", amount: "$14,000/year", a: "Average", totalUsers: 32 },
    { id: 4, name: "Kristin Williams", email: "avans@me.com", billingDate: "June 12, 2023", plan: "Team", amount: "$5,700/year", a: "Average", totalUsers: 12 },
    { id: 5, name: "Cannon Paul", email: "groff@facul.com", billingDate: "June 12, 2023", plan: "Team", amount: "$7,200/year", a: "Average", totalUsers: 18 },
    { id: 6, name: "Marlee Merritt", email: "krisbtbc@yahoo.ca", billingDate: "June 12, 2023", plan: "Team", amount: "$13,800/year", a: "Average", totalUsers: 30 }
  ];

  const CustomerTable = () => {
    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [customersPerPage] = useState(5);

    useEffect(() => {
      setCustomers(mockCustomers);
    }, []);

    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
    const totalPages = Math.ceil(customers.length / customersPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="container mx-auto">
        {/* Customer header and filters */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold">Customer</h3>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-full">All Time</button>
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-full">Team Plan</button>
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-full">Active</button>
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-full">More Filters</button>
            <input type="text" placeholder="Search" className="px-4 py-2 border rounded-full" />
          </div>
        </div>

        {/* Customer List Table */}
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-600">
              <th className="py-3 px-4 border-b">Full Name - Mail</th>
              <th className="py-3 px-4 border-b">Billing Date</th>
              <th className="py-3 px-4 border-b">Plan</th>
              <th className="py-3 px-4 border-b">Amount</th>
              <th className="py-3 px-4 border-b">Total Users</th>
              <th className="py-3 px-4 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">
                  <div className="text-sm font-semibold">{customer.name}</div>
                  <div className="text-sm text-gray-500">{customer.email}</div>
                </td>
                <td className="py-3 px-4 border-b">{customer.billingDate}</td>
                <td className="py-3 px-4 border-b">
                  <span className="inline-block px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full">{customer.plan}</span>
                </td>
                <td className="py-3 px-4 border-b">
                  <div>{customer.amount}</div>
                  <div className="text-xs text-gray-500">{customer.a}</div>
                </td>
                <td className="py-3 px-4 border-b">{customer.totalUsers} Users</td>
                <td className="py-3 px-4 border-b">
                  <a href="#" className="text-blue-500 hover:underline">View Details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button 
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-red-400 text-white' : 'bg-gray-200'}`}
            >
              {index + 1}
            </button>
          ))}
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  return <CustomerTable />;
}

export default CustomerList;

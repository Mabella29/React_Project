import React, { useState, useEffect } from 'react';

function CustomerList() {
  const mockCustomers = [
    { id: 1, name: "Caden Morse", email: "raines@live.com", billingDate: "June 12, 2023", plan: "Team", amount: "$5,000/year", a: "average", totalUsers: 10 },
    { id: 2, name: "Santino Marsh", email: "whimsy@comcast.net", billingDate: "June 12, 2023", plan: "Team", amount: "$19,000/year", a: "average", totalUsers: 44 },
    { id: 3, name: "Kristin Zavola", email: "garyb@ssbglobal.net", billingDate: "June 12, 2023", plan: "Team", amount: "$14,000/year", a: "average", totalUsers: 32 },
    { id: 4, name: "Kristin Williams", email: "avans@me.com", billingDate: "June 12, 2023", plan: "Team", amount: "$5,700/year", a: "average", totalUsers: 12 },
    { id: 5, name: "Cannon Paul", email: "groff@facul.com", billingDate: "June 12, 2023", plan: "Team", amount: "$7,200/year", a: "average", totalUsers: 18 },
    { id: 6, name: "Marlee Merritt", email: "ktrotche@yahoo.ca", billingDate: "June 12, 2023", plan: "Team", amount: "$13,800/year", a: "average", totalUsers: 30 },
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
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Customer List</h2>
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-1 border-b">Full Name - Mail</th>
              <th className="py-2 px-4 border-b">Billing Date</th>
              <th className="py-2 px-4 border-b">Plan</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Total Users</th>
              <th className="py-2 px-4 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id}>
                <td className="py-2 px-4 border-b">
                  {customer.name}<br />{customer.email}
                </td>
                <td className="py-2 px-4 border-b">{customer.billingDate}</td>
                <td className="py-2 px-4 border-b">
                  <button className="py-2 px-4 bg-violet-300 text-violet rounded-xl border-b">{customer.plan}</button>
                </td>
                <td className="py-2 px-4 border-b">{customer.amount}<br />{customer.a}</td>
                <td className="py-2 px-4 border-b">{customer.totalUsers}</td>
                <td className="py-2 px-4 border-b">
                  <a className="text-blue-500 px-4 py-1 underline">
                    View Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            className={`mx-2 px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button 
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
            >
              {index + 1}
            </button>
          ))}
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className={`mx-2 px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
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

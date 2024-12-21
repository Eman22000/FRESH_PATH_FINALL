import React from 'react';

export function OrdersPanel() {
  const orders = [
    { id: 1, customer: 'John Doe', total: 150, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', total: 200, status: 'Shipped' },
    { id: 3, customer: 'Bob Johnson', total: 100, status: 'Delivered' },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Order ID</th>
            <th className="border border-gray-300 px-4 py-2">Customer</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td className="border border-gray-300 px-4 py-2">{order.id}</td>
              <td className="border border-gray-300 px-4 py-2">{order.customer}</td>
              <td className="border border-gray-300 px-4 py-2">${order.total}</td>
              <td className="border border-gray-300 px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

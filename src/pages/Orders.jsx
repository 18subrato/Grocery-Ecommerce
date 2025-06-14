import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";

const orderStatus = "Processing";


const Orders = () => {
  const { navigate, currency } = useShopContext();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="text-center py-10 lg:text-xl xl:text-3xl text-red-600">No orders found.</div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg  space-y-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">All Orders</h1>
        {orders.map((order, index) => {
          const { cartItems, userAddress, total, createdAt } = order;
          return (
            <div
              key={index}
              className="border p-4 rounded-md bg-gray-50"
            >
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  Order #{index + 1}
                </h2>
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium text-blue-500 bg-blue-100"
                >
                  Status: {orderStatus}
                </span>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>Date:</strong>{" "}
                {new Date(createdAt).toLocaleString()}
              </p>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-1">
                  Customer Info
                </h3>
                <p className="text-gray-600">
                  {userAddress?.userName || "No Name Provided"}
                </p>
                <p className="text-gray-600">
                  {userAddress?.street}, {userAddress?.city}, {userAddress?.state}
                </p>
              </div>
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row justify-between py-4 gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity} × {currency}{item.price}
                        </p>
                      </div>
                    </div>
                    <div className="text-right font-medium text-gray-700">
                      {currency}
                      {item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between font-semibold text-lg text-gray-700">
                <span>Total</span>
                <span>
                  {currency}
                  {total}
                </span>
              </div>
            </div>
          );
        })}

        <button
          onClick={()=>{navigate('/'),scrollTo(0,0)}}
          className="mt-6 w-full cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-500 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Orders;

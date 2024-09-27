import React from "react";
import { useSelector } from "react-redux";

const OrderComplete = () => {

    const orderDetails = useSelector((state)=> state.products.cart)

    const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
const calculateAmount = () => {
    return orderDetails.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  
  }
  return (
    <div className="container mx-auto py-12 px-6 lg:px-20 text-center">
      <h1 className="text-5xl font-bold mb-8">Complete!</h1>

      {/* Steps */}
      <div className="flex items-center justify-center mb-12 space-x-8">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">✔️</div>
          <span className="text-green-500">Shopping cart</span>
        </div>
        <div className="w-16 h-px bg-gray-300"></div>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">✔️</div>
          <span className="text-green-500">Checkout details</span>
        </div>
        <div className="w-16 h-px bg-gray-300"></div>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-300 text-white flex items-center justify-center">3</div>
          <span className="text-gray-500">Order complete</span>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-lg rounded-lg p-8 lg:p-16 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Thank you! 🎉</h2>
        <p className="text-lg mb-6">Your order has been received</p>

        {/* Order Items */}
        <div className="flex justify-center mb-6 space-x-8">
          { orderDetails.map((item ,index) => (
            <div key={item.id} className="flex flex-col items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mb-2" />
              <span className="text-lg font-semibold">{item.title}</span>
              <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full mt-2">{index + 1}</div>
            </div>
          ))}
        </div>

        {/* Order Details */}
        <div className="text-left space-y-2">
          <p className="text-lg">Order code: <span className="font-semibold">{Date.now()}</span></p>
          <p className="text-lg">Date: <span className="font-semibold">{formattedDate}</span></p>
          <p className="text-lg">Total: <span className="font-semibold">${calculateAmount() +15}</span></p>
          <p className="text-lg">Payment method: <span className="font-semibold">UPI</span></p>
        </div>

        {/* Button */}
        <button className="mt-8 px-6 py-3 bg-black text-white font-semibold rounded-md">Purchase History</button>
      </div>
    </div>
  );
};

export default OrderComplete;

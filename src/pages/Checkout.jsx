import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { decrementQuantity, incrementQuantity } from "../redux/slice/product";

const Checkout = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "card",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    coupon: ""
  });
  const dispatch = useDispatch()
  const itemsInCart = useSelector((state)=> state.products.cart)
  const calculateAmount = () => {
    return itemsInCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  
  }
  console.log(calculateAmount())

  const handleIncrement =(id)=>{
    dispatch(incrementQuantity(id))
  }
  const handleDecrement =(id)=>{
    dispatch(decrementQuantity(id))
  }
 
  const handlePlaceOrder =()=>{
    console.log("order placed")
  }

  // State for managing applied coupon
  const [couponApplied, setCouponApplied] = useState(false);
  const [total, setTotal] = useState(234.00); // Total price
  const discount = 25.00; // Coupon discount

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle coupon apply
  const handleApplyCoupon = () => {
    if (formData.coupon === "JenkateMW" && !couponApplied) {
      setTotal(total - discount);
      setCouponApplied(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Check Out</h1>
      
      {/* Checkout Steps */}
      <div className="flex items-center mb-8 space-x-8">
        <div className="flex items-center text-green-500 font-bold">
          <span className="mr-2">&#10003;</span> Shopping cart
        </div>
        <div className="text-black">2 Checkout details</div>
        <div className="text-gray-500">3 Order complete</div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Contact Information */}
        <div className="col-span-2">
          <div className="space-y-6">
            <div className="border p-6 rounded-lg bg-white shadow-lg">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="border px-4 py-2 w-full rounded-md"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="border px-4 py-2 w-full rounded-md"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number"
                  className="border px-4 py-2 w-full rounded-md"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border px-4 py-2 w-full rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="border p-6 rounded-lg bg-white shadow-lg">
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
              <div className="mb-4">
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="Street Address"
                  className="border px-4 py-2 w-full rounded-md"
                  value={formData.streetAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <select
                  name="country"
                  className="border px-4 py-2 w-full rounded-md"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </select>
                <input
                  type="text"
                  name="city"
                  placeholder="Town / City"
                  className="border px-4 py-2 w-full rounded-md"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="border px-4 py-2 w-full rounded-md"
                  value={formData.state}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  className="border px-4 py-2 w-full rounded-md"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="billingAddress"
                  className="mr-2"
                  onChange={handleChange}
                />
                <span>Use a different billing address (optional)</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="border p-6 rounded-lg bg-white shadow-lg">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    className="mr-2"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleChange}
                  />
                  Pay by Card Credit
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    className="mr-2"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleChange}
                  />
                  Paypal
                </div>
              </div>
              {formData.paymentMethod === "card" && (
                <div className="mt-4 space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    className="border px-4 py-2 w-full rounded-md"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      name="expirationDate"
                      placeholder="MM/YY"
                      className="border px-4 py-2 w-full rounded-md"
                      value={formData.expirationDate}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="cvc"
                      placeholder="CVC code"
                      className="border px-4 py-2 w-full rounded-md"
                      value={formData.cvc}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-black text-white rounded-md" onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border p-6 rounded-lg bg-white shadow-lg col-span-1">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {/* Sample Products */}
            {
                itemsInCart.map((item)=>
                    <div className="flex items-center space-x-4" key={item.id}>
                        <img src={item.image} alt={item.title} className="w-16 h-16 rounded-md" />
                        <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-gray-500">Color: Black</p>
                            <p className="font-bold">${item.price}</p>
                            <div className="flex items-center">
                            <button className="border px-2" onClick={()=>handleDecrement(item.id)}>-</button>
                            <span className="px-4">{item.quantity}</span>
                            <button className="border px-2" onClick={()=>handleIncrement(item.id)}>+</button>
                            </div>
                        </div>
                    </div>
                )
            }
            
            
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="coupon"
              placeholder="Input"
              className="border px-4 py-2 w-full rounded-md mb-2"
              value={formData.coupon}
              onChange={handleChange}
            />
            <button
              className="w-full px-4 py-2 bg-black text-white rounded-md"
              onClick={handleApplyCoupon}
            >
              Apply
            </button>
            {couponApplied && (
              <div className="flex justify-between items-center mt-2 text-green-500">
                <p>JenkateMW</p>
                <button
                  className="text-red-500"
                  onClick={() => {
                    setCouponApplied(false);
                    setTotal(total + discount);
                    setFormData({ ...formData, coupon: "" });
                  }}
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${calculateAmount()}</p>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p>${calculateAmount()+15}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

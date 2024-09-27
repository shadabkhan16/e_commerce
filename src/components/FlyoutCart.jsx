import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FlyoutCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const navigate = useNavigate();
  const handleCartPage = () => {
    navigate("/cart");
  };
  const handleCheckOut = () => {
    navigate("/checkout");
  };

  const cartItemsList = useSelector((state) => state.products.cart);

  return (
    <div className="relative">
      {/* Cart Button */}
      <button onClick={toggleCart}>
        <FaShoppingCart size={24} />
      </button>

      {/* Flyout Cart */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } w-80 flex flex-col`}
      >
        <h2 className="text-xl font-semibold mb-4 p-4">Cart</h2>
        <button
          onClick={toggleCart}
          className="absolute top-4 right-4 text-gray-600"
        >
          &times;
        </button>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItemsList.map((item) => (
            <div className="border-b py-2" key={item.id}>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))}
        </div>

        {/* Total and Checkout Button at the Bottom */}
        <div className="p-4 border-t">
          <h3 className="font-semibold">
            ${!cartItemsList.length ? "0.00" : "30.00"}
          </h3>
          <button
            className="mt-4 w-full bg-black text-center text-white rounded-lg py-2"
            onClick={handleCheckOut}
          >
            Checkout
          </button>
          <button
            className="mt-2 w-full text-center   py-2"
            onClick={handleCartPage}
          >
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlyoutCart;

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NoItemsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FaShoppingCart className="text-6xl text-gray-500 mb-4" />
      <h2 className="text-3xl font-semibold mb-2">No Items Found</h2>
      <p className="text-gray-600 mb-4">
        We couldn't find any items in your cart.
      </p>
      <Link
        to="/"
        className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default NoItemsFound;


import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'; // Import icons

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="#">3legant.</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-black transition duration-300">Home</a>
          <a href="#" className="hover:text-black transition duration-300">Shop</a>
          <a href="#" className="hover:text-black transition duration-300">Product</a>
          <a href="#" className="hover:text-black transition duration-300">Contact Us</a>
        </nav>

        {/* Icons Section */}
        <div className="flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-black transition duration-300">
            <FaSearch size={20} />
          </a>
          <a href="#" className="hover:text-black transition duration-300">
            <FaShoppingCart size={20} />
          </a>
          <a href="#" className="hover:text-black transition duration-300">
            <FaUser size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

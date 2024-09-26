
import { FaSearch, FaUser } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';
import  FlyoutCart  from './FlyoutCart';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link to ="/">3legant.</Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <Link to="/" className="hover:text-black transition duration-300">Home</Link>
          <Link to="/shop" className="hover:text-black transition duration-300">Shop</Link>
          <Link to="/products" className="hover:text-black transition duration-300">Product</Link>
          <Link to="/contact-us" className="hover:text-black transition duration-300">Contact Us</Link>
        </nav>

        {/* Icons Section */}
        <div className="flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-black transition duration-300">
            <FaSearch size={20} />
          </a>
          <a href="#" className="hover:text-black transition duration-300">
            <FlyoutCart/>
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

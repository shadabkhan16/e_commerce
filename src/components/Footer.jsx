
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4 border-t border-gray-300">
      <div className="container mx-auto px-4">
        {/* Upper Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-4">
          {/* Left Section: Logo, Line, and Text */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="text-2xl font-bold">3legant.</div>
            <div className="h-8 border-l border-gray-400"></div>
            <p className="text-gray-600">Gift & Decoration Store</p>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="flex space-x-8 text-gray-600">
            <a href="#" className="hover:text-black transition duration-300">Home</a>
            <a href="#" className="hover:text-black transition duration-300">Shop</a>
            <a href="#" className="hover:text-black transition duration-300">Blog</a>
            <a href="#" className="hover:text-black transition duration-300">Contact Us</a>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gray-300 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Copyright Information */}
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2023 3legant. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-black">Terms of Use</a>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-black transition duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-black transition duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-black transition duration-300">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

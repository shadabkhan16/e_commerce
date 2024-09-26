const Header = () => {
    return (
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">3legant.</div>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">Home</a>
            <a href="#" className="text-gray-600 hover:text-black">Shop</a>
            <a href="#" className="text-gray-600 hover:text-black">Product</a>
            <a href="#" className="text-gray-600 hover:text-black">Contact Us</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
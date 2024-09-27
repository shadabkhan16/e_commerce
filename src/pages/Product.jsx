import { useState } from "react";
import PageHeader from "../assets/PageHeader.png";
import Banner from "../components/Banner";
import { PiSquaresFourThin } from "react-icons/pi";
import { PiDotsNineBold } from "react-icons/pi";
import { FaBarsProgress } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ProductCards from "../components/ProductCards";
import { useSelector } from "react-redux";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("Living Room");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const navigate = useNavigate();
  const productItems = useSelector((state) => state.products.items);
  const handleProductDetails = (id) => {
    navigate(`/products/${id}`);
    // console.log("clicked")
  };
  const filtereProduct = productItems.filter((product) => {
    // Category filter
    const categoryMatch = product.category === selectedCategory;

    // Price filter
    let priceMatch = true;
    switch (selectedPrice) {
      case "Less than 50":
        priceMatch = product.price < 50;
        break;
      case "50 - 100":
        priceMatch = product.price >= 50 && product.price < 100;
        break;
      case "Greater than 100":
        priceMatch = product.price > 100;
        break;
      default:
        priceMatch = true;
    }

    // Return true if both category and price match
    return categoryMatch && priceMatch;
  });

  return (
    <div>
      <div>
        <Banner image={PageHeader} />
      </div>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          {/* Filter Section */}
          <div className="flex justify-between mb-8">
            <div className="flex space-x-4">
              <div>
                <p>CATRGORIES</p>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-52"
                >
                  <option value="Living Room">Living Room</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Kitchen">Kitchen</option>
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <p>PRICE</p>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-52"
                >
                  <option value="All Prices">All Prices</option>
                  <option value="Less than 50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="Greater than 100">Above $100</option>
                </select>
              </div>
            </div>

            {/* Sort By */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Sort by</span>
              <button className="text-gray-600 hover:text-black">
                <i className="fas fa-th-large"></i>
              </button>
              <button className="text-gray-600 hover:text-black">
                <i className="fas fa-th-list"></i>
              </button>
              <div className="flex border border-solid space-x-1 divide-x-4">
                <span className="text-2xl cursor-pointer ">
                  <PiDotsNineBold />
                </span>
                <span className="text-2xl cursor-pointer ">
                  <PiSquaresFourThin />
                </span>
                <span className="text-2xl cursor-pointer ">
                  <FaBarsProgress />
                </span>
                <span className="text-2xl rotate-90 cursor-pointer ">
                  <FaBarsProgress />
                </span>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtereProduct.map((product) => (
              <ProductCards
                key={product.id}
                product={product}
                className="bg-white p-4 rounded-lg shadow-lg }"
                onClick={() => handleProductDetails(product.id)}
              />
            ))}
          </div>

          {/* Show More Button */}
          <div className="flex justify-center mt-8">
            <button className=" px-6 py-2 border border-black rounded-lg">
              Show more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;

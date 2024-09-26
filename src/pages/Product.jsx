import { useState } from "react";
import PageHeader from "../assets/PageHeader.png"
import Banner from "../components/Banner"
import { PiSquaresFourThin } from "react-icons/pi";
import { PiDotsNineBold } from "react-icons/pi";
import { FaBarsProgress } from "react-icons/fa6";
import { productItems } from "../constants/fake_products";
import Rating from "../components/Rating"
import { useNavigate } from "react-router-dom";



const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('Living Room');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const navigate = useNavigate();

  const handleProductDetails =(id)=>{
    navigate(`/products/${id}`)
  }
  return (
    <div>
      <div>
        <Banner image={PageHeader}/>

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
            <option value="Under $50">Under $50</option>
            <option value="$50 - $100">$50 - $100</option>
            <option value="Above $100">Above $100</option>
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
            <div className="flex border border-solid space-x-1 divide-x-4" >
            <span className="text-2xl cursor-pointer "><PiDotsNineBold /></span>
              <span className="text-2xl cursor-pointer "><PiSquaresFourThin /></span>
              <span className="text-2xl cursor-pointer "><FaBarsProgress /></span>
              <span className="text-2xl rotate-90 cursor-pointer "><FaBarsProgress /></span>

             
          </div>
          </div>
          
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productItems.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg }" onClick={()=>handleProductDetails(product.id)}>
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
              {product.isNew && <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded-full">New</span>}
              <span> <Rating rating={product.rating}/></span>
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xl font-bold text-gray-900">{product.price}</span>
                <span className="text-gray-500 line-through">{product.oldPrice}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <button className=" px-6 py-2 border border-black rounded-lg">Show more</button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Product

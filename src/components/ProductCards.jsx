  import Rating from "./Rating"
  const ProductCards = ({product ,onClick}) => {
    return (
        <div onClick={onClick} className="bg-white p-4 rounded-lg shadow-lg cursor-pointer">
             <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
              {product.isNew && <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded-full">New</span>}
              <span> <Rating rating={product.rating}/></span>
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xl font-bold text-gray-900">{product.price}</span>
                <span className="text-gray-500 line-through">{product.oldPrice}</span>
              </div>

      </div>
    )
  }
  
  export default ProductCards        
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
         
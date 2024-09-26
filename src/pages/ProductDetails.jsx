import { useParams } from "react-router-dom"
import ProductCards from "../components/ProductCards";


const ProductDetails = () => {
    const {id} = useParams()
    const productImages = [
        "https://plus.unsplash.com/premium_photo-1667355489924-0ce0b2bd9961?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1667355489924-0ce0b2bd9961?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1667355489924-0ce0b2bd9961?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1667355489924-0ce0b2bd9961?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ];

    const relatedProducts = [
    { id: 1, name: "Side Table", price: 99.99, image: "https://plus.unsplash.com/premium_photo-1667355489924-0ce0b2bd9961?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Lamp", price: 49.99, image: "https://plus.unsplash.com/premium_photo-1667355489924-0ce0b2bd9961?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Cushion", price: 19.99, image: "https://plus.unsplash.com/premium_photo-1667355489924-0ce0b2bd9961?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Armchair", price: 299.99, image: "https://plus.unsplash.com/premium_photo-1667355489924-0ce0b2bd9961?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div className="space-y-4">
          <div className="relative">
            <img src={productImages[0]} alt="Main Product" className="rounded-md" />
            <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-sm rounded-md">-50%</div>
            <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 text-sm rounded-md">New</div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-2">
            {productImages.slice(1).map((image, index) => (
              <img key={index} src={image} alt={`Product ${index}`} className="rounded-md w-40" />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-3xl font-bold">Tray Table</h1>
          <div className="text-gray-600 mb-4">11 Reviews</div>
          <p className="text-2xl font-semibold text-black mb-2">$199.00 <span className="line-through text-gray-500">$400.00</span></p>
          <p className="text-gray-600 mb-4">Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>
          
          {/* Measurements */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">Measurements</h3>
            <p className="text-gray-600">17 1/2×20 5/8 " </p>
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">Choose Color</h3>
            <div className="flex space-x-4">
              <button className="w-8 h-8 bg-black rounded-full border border-gray-400"></button>
              <button className="w-8 h-8 bg-gray-400 rounded-full border border-gray-400"></button>
              <button className="w-8 h-8 bg-red-400 rounded-full border border-gray-400"></button>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center mb-6">
            <div className="flex border rounded-md overflow-hidden">
              <button className="px-3 py-1 border-r bg-gray-100">-</button>
              <span className="px-4 py-1">1</span>
              <button className="px-3 py-1 border-l bg-gray-100">+</button>
              <button className="ml-4 px-6 py-2 border w-96 border-black rounded-md">Wishlist</button>
            </div>
            
            
          </div>
          <button className="ml-4 px-6 py-2 bg-black text-white rounded-md w-full">Add to Cart</button>

          {/* Additional Info */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">Additional Info</h3>
            <div>
              <details className="mb-2">
                <summary className="cursor-pointer text-gray-600">Details</summary>
                <p className="text-gray-500 mt-2">You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit into any holes.</p>
              </details>
              <details>
                <summary className="cursor-pointer text-gray-600">Packaging</summary>
                <p className="text-gray-500 mt-2">Width: 20" Height: 1 ⅞" Length: 21 ⅝" Weight: 7 lb 8 oz</p>
              </details>
            </div>
          </div>

          {/* SKU and Category */}
          <div className="mb-4">
            <p className="text-gray-600">SKU: 1117</p>
            <p className="text-gray-600">CATEGORY: Living Room, Bedroom</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">You Might Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCards key={product.id} product={product} className="border rounded-md p-4 shadow-md" />   
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails





import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const productsList = useSelector((state) => state.products.items);

  const products = productsList.slice(0, 8);
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <Link to="/products">
          <h4 className="text-blue-500 cursor-pointer">More Products</h4>
        </Link>
      </div>

      {/* Horizontal scrolling container */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex space-x-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] flex-shrink-0 border p-4 rounded-lg shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewArrivals;

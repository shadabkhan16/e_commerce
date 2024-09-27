import { useSelector, useDispatch } from "react-redux";
import { removeFromCart  , incrementQuantity, decrementQuantity} from "../redux/slice/product"; 
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const itemsInCart = useSelector((state) => state.products.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Dispatch the action to remove the item
  };

  const handleCheckout = () => {
    navigate("/checkout")
    
  };
const handleIncrement=(id)=>{
  dispatch(incrementQuantity(id))
}
const handleDecrement =(id)=>{
  dispatch(decrementQuantity(id))
}
const calculateTotal = () => {
  return itemsInCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

}

  return (
    <div className="container mx-auto py-8 px-4">
    <h1 className="text-4xl font-bold mb-6">Cart</h1>

    {/* Cart Steps */}
    <div className="flex items-center mb-8 space-x-8">
      <div className="text-black font-bold">1 Shopping cart</div>
      <div className="text-gray-500">2 Checkout details</div>
      <div className="text-gray-500">3 Order complete</div>
    </div>

    {/* Cart Items */}
    <div className="grid grid-cols-3 gap-6 mb-6">
      <div className="col-span-2 space-y-4">
        <table className="w-full table-auto border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="text-left">Product</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Price</th>
              <th className="text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {itemsInCart.map(item => (
              <tr key={item.id} className="bg-white shadow-md rounded-md">
                <td className="flex items-center space-x-4">
                  <img src={item.imgSrc} alt={item.name} className="w-16 h-16 rounded-md" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Color: {item.color}</p>
                    <button className="text-red-500 mt-1" onClick={()=>handleRemoveFromCart(item.id)}>Remove</button>
                  </div>
                </td>
                <td>
                  <div className="flex items-center">
                    <button onClick={() => handleDecrement(item.id)} className="border px-2">-</button>
                    <span className="px-4">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)} className="border px-2">+</button>
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>${calculateTotal(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Summary */}
      <div className="border p-6 rounded-lg bg-white shadow-lg">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <div className="mb-4">
          <label className="block mb-2">Shipping Options</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input type="radio" name="shipping" value="free" className="mr-2" />
              Free shipping <span className="ml-auto">$0.00</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="shipping" value="express" className="mr-2" />
              Express shipping <span className="ml-auto">+$15.00</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="shipping" value="pickup" className="mr-2" />
              Pick Up <span className="ml-auto">%21.00</span>
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Subtotal</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total</span>
          <span>${(calculateTotal() + 15)}</span>
        </div>
        <button className="w-full mt-4 px-4 py-2 bg-black text-white rounded-md" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>

    {/* Coupon Section */}
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Have a coupon?</h3>
      <div className="flex mt-2">
        <input type="text" className="border px-4 py-2 w-full" placeholder="Coupon Code" />
        <button className="ml-4 px-4 py-2 bg-black text-white rounded-md">Apply</button>
      </div>
    </div>
  </div>
);
};

export default Cart;

  

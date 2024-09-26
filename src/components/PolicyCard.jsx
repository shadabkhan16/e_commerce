import { CiDeliveryTruck } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

const card = [
  { id: 1, name: 'Free Shipping', icon: <CiDeliveryTruck />, description: 'Order above $200' },
  { id: 2, name: 'Money-back', icon: <CiMoneyBill />, description: '30 days guarantee' },
  { id: 3, name: 'Secure Payments', icon: <CiLock />, description: 'Secured by Stripe' },
  { id: 4, name: '24/7 Support', icon: <LuPhone />, description: 'Phone and Email support' },
];

const PolicyCard = () => {
  return (
    <div className="container mx-auto py-8 px-4 flex  space-x-3 ">
      {card.map(item => (
        <div key={item.id} className="min-w-[250px] flex-shrink-0 border p-4 h-32 flex  space-x-3 flex-col bg-slate-200">
          {/* Render the icon */}
          <div className="text-4xl font-semibold pl-2">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PolicyCard;

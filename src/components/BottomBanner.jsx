
import { BsArrowRight } from 'react-icons/bs'; 
import ImagePlaceholder from "../assets/ImagePlaceholder.png";
import Newsletter from "../assets/Newsletter.png"

const BottomBanner = () => {
  return (
    <div>
            <div className="  pt-10  flex flex-col lg:flex-row items-center ">
        {/* Image Section */}
        <div className="flex-1 mb-6 lg:mb-0">
            <img 
            src={ImagePlaceholder}
            alt="Stylish Makeover" 
            className="w-full h-auto object-cover" 
            />
        </div>

        {/* Text Section */}
        <div className="flex-1 px-4 ml-8">
            <a href="" className="text-blue-500">SALE UP To 35% OFF </a>
            <h2 className="text-3xl font-bold mb-4">HUNDREDS Of <br/> New Lower Prices!</h2>
            <p className="text-gray-700 mb-6 text-2xl">
            It's more affordable than ever to give every <br/> room in your home a stylish makeover.
            </p>
            <a 
            href="/shop" 
            className="flex items-center text-blue-500 hover:underline"
            >
            Shop Now 
            <BsArrowRight className="ml-2" />
            </a>
        </div>
        </div>
        <div>
            <img src={Newsletter} alt="" />
        </div>
    </div>
  );
};

export default BottomBanner;

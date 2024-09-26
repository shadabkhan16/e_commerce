import Card from "../assets/card.png";
import Card2 from "../assets/cardRight1.png";
import Card3 from "../assets/cardRight2.png";

const PhotoGallery = () => {
  return (
    <div className="container mx-auto py-8 px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Large Image */}
        <div className="md:col-span-2 ">
          <img
            src={Card}
            alt="Large Image"
            className="w-full h-full object-fill rounded-lg"
          />
        </div>

        {/* Right Side: Two Small Images */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <img
              src={Card2}
              alt="Small Image 1"
              className="w-full h-full object-fill rounded-lg"
            />
          </div>
          <div className="">
            <img
              src={Card3}
              alt="Small Image 2"
              className="w-full h-full object-fill rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;



const Banner = ({image}) => {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="text-center">
        <img src={image} alt="Slider" />
      </div>
    </div>
  );
};

export default Banner;

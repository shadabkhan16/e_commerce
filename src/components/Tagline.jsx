const Tagline = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center">
        
        {/* Left Side: Tagline */}
        <div className="text-4xl font-bold text-gray-800">
          Simply Unique <span className="text-gray-500">/</span><br/>Simply Betters <span className="text-gray-500" >.</span>
        </div>
        
        {/* Right Side: Description */}
        <div className="text-gray-600 text-left  mt-4 md:mt-0 md:max-w-sm">
          3legant is a gift & decoration store based in HCMC, Vietnam. Est since 2019.
        </div>
      </div>
    </div>
  );
};

export default Tagline;

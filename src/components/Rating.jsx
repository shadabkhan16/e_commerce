const Rating = ({ rating }) => {
    const totalStars = 5;
    return (
      <div className="flex text-yellow-500">
        {Array.from({ length: totalStars }, (_, index) => (
          <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  export default Rating
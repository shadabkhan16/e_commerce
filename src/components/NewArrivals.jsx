import React from 'react';

const products = [
  { id: 1, name: 'Loveseat Sofa', price: 199.00, imgSrc: 'https://via.placeholder.com/600x400' },
  { id: 2, name: 'Table Lamp', price: 24.99, imgSrc: 'https://via.placeholder.com/600x400' },
  { id: 3, name: 'Chair', price: 49.99, imgSrc: 'https://via.placeholder.com/600x400' },
  { id: 4, name: 'Desk', price: 150.00, imgSrc: 'https://via.placeholder.com/600x400' },
  { id: 5, name: 'Bookshelf', price: 120.00, imgSrc: 'https://via.placeholder.com/600x400' },
  { id: 6, name: 'Rug', price: 89.99, imgSrc: 'https://via.placeholder.com/600x400' },
  { id: 7, name: 'Coffee Table', price: 99.99, imgSrc: 'https://via.placeholder.com/600x400' },
  { id: 8, name: 'Floor Lamp', price: 74.99, imgSrc: 'https://via.placeholder.com/600x400' },
  { id: 9, name: 'Mirror', price: 45.99, imgSrc: 'https://via.placeholder.com/600x400' },
];

const NewArrivals = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <h4 className="text-blue-500 cursor-pointer">More Products</h4>
      </div>

      {/* Horizontal scrolling container */}
      <div className="overflow-x-auto">
        <div className="flex space-x-6">
          {products.map(product => (
            <div key={product.id} className="min-w-[250px] flex-shrink-0 border p-4 rounded-lg shadow-lg">
              <img src={product.imgSrc} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewArrivals;
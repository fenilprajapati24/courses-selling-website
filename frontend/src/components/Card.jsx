import React from "react";

const Card = ({ item, handleadd }) => {
  return (
    <div className="mt-4 my-3 p-4">
      <div className="card shadow-xl border w-92">
        <figure>
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p className="text-sm text-gray-600">{item.title}</p>
          <div className="flex justify-between items-center mt-3">
            <div className="badge badge-outline">₹{item.price}</div>
            <button
              onClick={() => handleadd(item)} 
              className="border px-3 py-1 rounded-xl hover:bg-pink-500 hover:text-white transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;




import React, { useState } from "react";
import axios from "axios";

const Cart = ({ cartitems = [] }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const totalPrice = cartitems.reduce((sum, item) => sum + item.price, 0);
                                       
  const handleSaveCart = async () => {
    setLoading(true);
    setMessage("");
    try {
    const res = await axios.post("http://localhost:3019/cartrouter/cart", {cartItems:cartitems,});
      console.log("Cart saved:", res.data);
      setMessage("Cart saved to backend.");
    } catch (err) {
      console.log("Error saving cart:", err);
      setMessage(" Failed to save cart.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6  pb-2">
        Your Cart
      </h2>

      {cartitems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-5">
          {cartitems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-3"
            >
              <div>
                <h3 className="font-semibold text-lg text-gray-700">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
              <span className="text-pink-600 font-semibold text-lg">
                ₹{item.price}
              </span>
            </div>
          ))}

          <div className="text-right text-xl font-bold text-green-600 pt-4 border-t">
            Total: ₹{totalPrice.toFixed(2)}
          </div>

          {/* Save Cart Button */}
          <div className="text-right mt-6">
            <button
              onClick={handleSaveCart}
              disabled={loading}
              className={`${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              } text-white px-4 py-2 rounded transition`}
            >
              {loading ? "Saving..." : "Save Cart to Backend"}
            </button>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center mt-4 text-sm font-medium text-gray-700">
              {message}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;





import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Slider from "react-slick";
import Card from './Card.jsx';
import Cart from './Cart.jsx';

const Courses = () => {
  const [book, setbook] = useState([]);
  const [cartitems, setcartitems] = useState([]);
  const [showCart, setShowCart] = useState(false); // toggle cart

  const addtocart = (item) => {
    setcartitems(prevItems => [...prevItems, item]);
  };

 useEffect(() => {
  const getAllBooks = async () => {
    try {
      const res = await axios.get('http://localhost:3019/booksrouter');
        const freeBooks = res.data.filter((item) => item.category === "Free");
      setbook(res.data); // ✅ send all books directly
    } catch (err) {
      console.log(err);
    }
  };
  getAllBooks();
}, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:py-3.5 border border-t-emerald-900 h-auto">
        <div className="mb-4">
          <h2 className='font-semibold text-xl pb-2'>Free Courses</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="border max-w-screen-2xl mx-auto md:px-40 px-4 md:py-10 border-t-emerald-900 h-auto gap-1">
          {/* Cards slider */}
          <Slider {...settings}>
            {book.map(item => (
              <Card item={item} key={item.id} handleadd={addtocart} />
            ))}
          </Slider>

          {/* Show Cart Toggle Button (Below items) */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowCart(prev => !prev)}
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              {showCart ? "Hide Cart" : "Show Cart"}
            </button>
          </div>

          {/* Dropdown Cart */}
          {showCart && (
            <div className="mt-6 border-t pt-4 bg-white shadow rounded-md">
              <Cart cartitems={cartitems} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Courses;

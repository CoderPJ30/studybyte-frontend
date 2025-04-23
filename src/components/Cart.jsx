import React, { useEffect, useState } from 'react';
import apiCall from '../api/api.js'; // adjust path as needed
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await apiCall("/user/cart", { method: "GET" });
        setCart(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCart();
  }, []);

  const totalPrice = cart.reduce((sum, book) => sum + (book.book_price || 0), 0);

  const handleRemove = async (id) => {
    try {
      await apiCall(`/user/cart/book/${id}`, { method: "DELETE" });
      setCart(prev => prev.filter(book => book._id !== id));
    } catch (err) {
      console.error("Error removing book:", err);
    }
  };

  const handleClick = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="flex flex-col px-20 w-full min-h-screen bg-zinc-900 text-white pt-10">
      <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>

      <div className="flex justify-between items-center border-t border-zinc-700 py-5">
        <div className='flex space-x-4'>
          <h2 className="text-2xl">Total:</h2>
          <p className="text-2xl font-semibold">₹{totalPrice}</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg">
          Checkout
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {cart.map((book) => (
              <div
                key={book._id}
                className="relative bg-white text-black p-4 rounded-lg border border-zinc-300 min-w-60 cursor-pointer"
              >
                <div onClick={() => handleClick(book._id)}>
                  <img
                    src={book.book_cover}
                    alt={`Cover of ${book.book_title}`}
                    className="object-fit w-full h-64 rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold leading-tight">{book.book_title}</h3>
                    <p className="text-sm text-gray-600 mt-1">by {book.book_author}</p>
                    <p className="mt-2 font-semibold text-green-700">
                      {book.book_price === 0 ? 'Free' : `₹${book.book_price}`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(book._id)}
                  className="absolute bottom-2 right-2 px-3 py-1 bg-red-600 hover:bg-red-500 text-white text-sm rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

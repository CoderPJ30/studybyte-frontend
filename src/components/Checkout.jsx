import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import apiCall from "../api/api.js";
import { showSuccessToast, showErrorToast } from "../utils/toast.js";

const Checkout = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const cart = location.state?.cart || [];
  const bookIds = cart.map(book => book._id);
  const bookIdFromBookPage = location.state?.bookId;

  const booksToPurchase = bookIdFromBookPage
    ? [bookIdFromBookPage]
    : cart.length > 0
      ? bookIds
      : [];

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await apiCall(`/books/ids`, {
          method: "POST",
          body: { bookIds: booksToPurchase },
        });
        setBooks(response.data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    if (booksToPurchase.length > 0) fetchBookDetails();
  }, []);

  const handlePay = async () => {
    try {
      const response = await apiCall(`/user/book/buy`, {
        method: "POST",
        body: { bookIds: booksToPurchase },
      });
      if (response) {
        showSuccessToast("Payment successful! Book purchased.");
        navigate("/my-books");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      showErrorToast("Payment failed. Please try again.");
    }
  };

  const totalPrice = books.reduce((acc, book) => acc + (book.book_price || 0), 0);

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-8 sm:px-16 py-10">
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {books.length === 0 ? (
          <div className="col-span-3 text-center text-gray-500">
            Cart is empty. Please add books to your cart before proceeding to checkout.
          </div>
        ) : (
          books.map((book) => (
            <div
              key={book._id}
              className="bg-white text-black p-4 rounded-lg border border-zinc-300 min-w-60 cursor-pointer"
              onClick={() => navigate(`/book/${book._id}`)}
            >
              <img
                src={book.book_cover}
                alt={`Cover of ${book.book_title}`}
                className="object-cover w-full h-64 rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold leading-tight">{book.book_title}</h3>
                <p className="text-sm text-gray-600 mt-1">by {book.book_author}</p>
                <p className="text-sm text-neutral-500 mt-1">{book.book_genre}</p>
                <p className="mt-2 font-semibold text-green-700">
                  {book.book_price === 0 ? 'Free' : `₹${book.book_price}`}
                </p>
              </div>
            </div>
          ))
        )}

        {/* Checkout Summary */}
        {books.length > 0 && (
          <div className="lg:col-span-2 flex flex-col bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            {books.map((book) => (
              <div key={book._id} className="flex justify-between mb-2">
                <span>{book.book_title}</span>
                <span>{book.book_price === 0 ? 'Free' : `₹${book.book_price}`}</span>
              </div>
            ))}
            <div className="flex justify-between border-b border-zinc-700 pb-4 mb-4">
              <span className="text-red-500">Discount</span>
              <span className="text-red-500">- ₹0</span>
            </div>
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>{totalPrice === 0 ? 'Free' : `₹${totalPrice}`}</span>
            </div>
            <button
              onClick={handlePay}
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded text-white font-semibold text-lg"
            >
              Proceed to Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

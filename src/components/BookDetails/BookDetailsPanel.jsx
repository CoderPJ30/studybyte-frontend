import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import apiCall from "../../api/api.js";
import BookRating from "../common/BookRating.jsx";
import { showSuccessToast, showErrorToast } from "../../utils/toast.js";

const BookDetailsPanel = ({ book, user }) => {
  const navigate = useNavigate();
  const [isBookLiked, setIsBookLiked] = useState(user?.user_liked_books?.includes(book._id));
  const [isBookBookmarked, setIsBookBookmarked] = useState(user?.user_saved_books?.includes(book._id));
  const [isBookPurchased, setIsBookPurchased] = useState(user?.user_purchased_books?.includes(book._id));
  const [userRating, setUserRating] = useState(user?.user_rated_books?.find(
    ratedBook => ratedBook.book.toString() === book._id)?.rating
  );


  const likeBook = async () => {
    try {
      setIsBookLiked(!isBookLiked);
      await apiCall(`/user/book/${book._id}/like`, { method: "POST" });
    } catch (error) {
      console.error(error);
    }
  }

  const bookmarkBook = async () => {
    try {
      setIsBookBookmarked(!isBookBookmarked);
      await apiCall(`/user/book/${book._id}/bookmark`, { method: "POST" });
    } catch (error) {
      console.error(error);
    }
  }

  const rateBook = async (rating) => {
    try {
      await apiCall(`/user/book/${book._id}/rate`, { method: "POST", body: { rating } });
    } catch (error) {
      console.error(error);
    }
  }

  const handleAddToCart = async (bookId) => {
    try {
      await apiCall(`/user/cart/book/${bookId}`, { method: "POST" });
      showSuccessToast("Book added to cart successfully!");
    } catch (error) {
      console.error("Error adding book to cart:", error);
      showErrorToast("Failed to add book to cart. Please try again.");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "I found something interesting.",
          url: window.location.href,
        });
        console.log("Shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API not supported in this browser.");
    }
  };

  return (
    <section className="self-center max-w-[1356px] px-16 py-10 mt-4 w-full rounded-2xl bg-neutral-700 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center w-full max-md:mt-10">
            <div>
              <img
                src={book.book_cover}
                className="object-contain w-full rounded-lg"
              />
            </div>

            <BookRating rating={book.book_rating} />

            <div className="flex gap-1 mt-3 text-base leading-tight text-white whitespace-nowrap w-[65px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/84a6bfe9f7c258edff4db6b6858cc6a7e94bc873?placeholderIfAbsent=true"
                alt="Reviews"
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <span className="my-auto">{book.book_rating_count}</span>
            </div>
          </div>
        </div>

        <div className="ml-5 w-[52%] max-md:ml-0 max-md:w-full">
          <article className="flex flex-col grow text-base leading-tight text-zinc-100 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-2xl font-semibold tracking-tight max-md:max-w-full">
              {book.book_title}
            </h2>
            <p className="self-start mt-2 text-lg text-gray-300">{book.book_author}</p>
            <p className="mt-6 leading-6 max-md:max-w-full">
              {book.book_desc}
            </p>
          </article>
        </div>

        <div className="ml-5 w-[23%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-2 text-xl leading-tight text-white max-md:mt-10">
            {book.book_isPaid ? (
              <p className="self-start text-2xl">Rs.{book.book_price}</p>
            ) : (
              <p className="self-start text-2xl">Free</p>
            )}

            {book.book_isPaid && !isBookPurchased ? (
              <>
                <button className="overflow-hidden px-16 py-2 mt-5 rounded-xl bg-neutral-900 max-md:px-5 cursor-pointer"
                  onClick={() => navigate(`/checkout`, { state: { bookId: book._id } })}>
                  Buy now
                </button>
                <button
                  className="overflow-hidden px-14 py-2 mt-5 rounded-xl bg-zinc-500 max-md:px-5 cursor-pointer"
                  onClick={() => handleAddToCart(book._id)}
                >
                  Add to cart
                </button>
              </>
            ) : (
              <button className="overflow-hidden px-16 py-2 mt-7 rounded-xl bg-zinc-500 max-md:px-5 cursor-pointer"
                onClick={() => navigate(`/book/${book._id}/read`)}
              >
                Read now
              </button>
            )
            }

            <div className="flex w-full justify-center">
              <BookRating rating={userRating}
                onRate={(newRating) => { setUserRating(newRating); rateBook(newRating) }}
                interactive starStyle="text-2xl" starGap="3" />
            </div>

            <div className="flex mt-5 gap-10 w-full justify-center">
              <button onClick={likeBook}>
                <FontAwesomeIcon
                  icon={isBookLiked ? faHeartSolid : faHeart}
                  className="text-white text-2xl cursor-pointer" />
              </button>
              <button onClick={bookmarkBook}>
                <FontAwesomeIcon
                  icon={isBookBookmarked ? faBookmarkSolid : faBookmark}
                  className="text-white text-2xl cursor-pointer" />
              </button>
              <button onClick={handleShare}>
                <FontAwesomeIcon icon={faPaperPlane} className="text-white text-2xl cursor-pointer" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPanel;

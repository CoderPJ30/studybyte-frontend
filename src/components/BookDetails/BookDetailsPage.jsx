import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookDetailsPanel from "./BookDetailsPanel";
import BookGrid from "../common/BookGrid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import apiCall from "../../api/api.js";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [user, setUser] = useState({});
  const [moreLikeThisBooks, setMoreLikeThisBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const book = await apiCall(`/books/${bookId}`);
        const user = await apiCall("/user/profile");
        setBook(book.data);
        setUser(user.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, []);

  return (
    <main className="flex overflow-hidden w-full items-center flex-col relative px-5 pt-4 bg-zinc-900">
      <div className="flex justify-start w-full mt-6 max-md:ml-2.5">
        <FontAwesomeIcon icon={faArrowLeft} className="text-white text-3xl cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
      {loading ?
        <p className="text-white">Loading...</p> :
        <BookDetailsPanel book={book} user={user} />
      }
      <BookGrid title="More like this" books={moreLikeThisBooks} />
    </main>
  );
};

export default BookDetailsPage;

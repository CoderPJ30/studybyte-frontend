import React, { useEffect } from 'react'
import apiCall from '../api/api.js'
import BookCard from './common/BookCard.jsx'
import { useLocation, useNavigate } from "react-router-dom";

function SearchPage() {
  const [searchResults, setSearchResults] = React.useState([])
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("s");

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await apiCall(`/books/search?s=${query}`, { mehthod: "GET" });
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (query.length === 0) {
    navigate("/home");
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-zinc-900 text-white px-8 sm:px-16 py-10'>
        <h1 className='text-3xl font-semibold mb-8'>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-zinc-900 text-white px-8 sm:px-16 py-10'>
      <h1 className='text-3xl font-semibold mb-8'>Search Results for "{query}"</h1>
      {searchResults.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6'>
          {searchResults.map((book) => (
            <BookCard
              key={book._id}
              id={book._id}
              cover={book.book_cover}
              title={book.book_title}
              genre={book.book_genre}
              price={book.book_price}
            />
          ))}
        </div>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
}

export default SearchPage;

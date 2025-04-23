import React, { useEffect } from 'react'
import BookGrid from './common/BookGrid'
import apiCall from '../api/api.js';

function Books() {
  const [books, setBooks] = React.useState({});

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await apiCall("/books/all?limit=4", { method: "GET" });
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className='flex flex-col px-20 w-full min-h-screen bg-zinc-900'>
      {books && Object.entries(books).map(([genreName, genreBooks]) => (
        <div key={genreName}>
          <BookGrid
            title={genreName}
            books={genreBooks}
          />
        </div>
      ))}
    </div>
  )
}

export default Books

import React from "react";
import BookCard from "./common/BookCard";
import apiCall from "../api/api.js";

function MyBooks() {
  const categories = ["Reading", "Liked", "Saved", "Rated"];
  const [activeTab, setActiveTab] = React.useState("Reading");
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await apiCall(`/user/books?section=${activeTab}`);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [activeTab]);

  return (
    <>
      <div className="flex overflow-hidden flex-col items-center my-10 bg-zinc-900">
        <div className="flex flex-wrap gap-5 justify-between max-w-full text-base font-semibold text-white whitespace-nowrap w-[524px] max-md:mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`overflow-hidden px-8 py-2.5 rounded-md ${activeTab === category
                ? "bg-white text-black"
                : "bg-zinc-800 text-white"
                } max-md:px-5`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-w-[1356px] w-full">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} className="w-72 max-md:ml-0 max-md:w-full">
              <BookCard
                id={book._id}
                cover={book.book_cover}
                title={book.book_title}
                genre={book.book_genre}
                isDetailed={false}
                className="w-[200px] h-[300px] max-md:w-[150px] max-md:h-[250px]"
              />
            </div>
          ))
        ) : (
          <p className="flex text-white w-full justify-center">No books found in this category.</p>
        )}
      </div>
    </>

  );
}

export default MyBooks;

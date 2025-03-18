import React from "react";
import BookCard from "./BookCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BookGrid = ({ title, books, variant = "simple" }) => {
  return (
    <section className="mt-9 w-full max-w-[1200px] max-md:max-w-full">
      <div className="flex items-center justify-between mb-10 ml-5 max-md:ml-2.5">
        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>
        <div className="flex items-center gap-2 cursor-pointer">
          <button className="text-white cursor-pointer">
            More
          </button>
          <FontAwesomeIcon icon={faChevronRight} className="text-white" />
        </div>
      </div>
      <div className="flex gap-5 max-md:flex-col">
        {books.map((book, index) => (
          <div key={index} className="w-3/12 max-md:ml-0 max-md:w-full">
            <BookCard
              imageUrl={book.imageUrl}
              title={book.title}
              category={book.category}
              price={book.price}
              variant={variant}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookGrid;
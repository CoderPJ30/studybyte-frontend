import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import BookGrid from "../common/BookGrid";
import apiCall from "../../api/api.js";

export default function HomePage() {
  const [topBooks, setTopBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const topBooksResponse = await apiCall("/books?section=topbooks&limit=4");
        setTopBooks(topBooksResponse.data.books);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <main className="flex overflow-hidden flex-col items-center relative px-5 pt-4 border-black border-solid bg-zinc-900">
      <HeroSection />
      {/* <BookGrid title="Continue Reading" books={continueReadingBooks} /> */}
      {loading ?
        <p className="text-white">Loading...</p> :
        <BookGrid title="Top Books" books={topBooks} />
      }
    </main>
  );
}

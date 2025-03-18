import React from "react";
import NavigationBar from "../common/NavigationBar";
import HeroSection from "./HeroSection";
import BookGrid from "../common/BookGrid";
import Footer from "../common/Footer";

const continueReadingBooks = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9447587ff2aec26cda2e1ef6990e6f4457576e351e4652cd72fab6b6efb0415f?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726",
    title: "Harry Potter and the Phil....",
    category: "Fantasy",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bec5328e0c6eeb17f17d22f93643f045bb86741c20e6c1c4d0b0bb3b6acd64a?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726",
    title: "Title",
    category: "Category",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bec5328e0c6eeb17f17d22f93643f045bb86741c20e6c1c4d0b0bb3b6acd64a?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726",
    title: "Title",
    category: "Category",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bec5328e0c6eeb17f17d22f93643f045bb86741c20e6c1c4d0b0bb3b6acd64a?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726",
    title: "Title",
    category: "Category",
  },
];

const topBooks = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bec5328e0c6eeb17f17d22f93643f045bb86741c20e6c1c4d0b0bb3b6acd64a?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726",
    title: "Title",
    category: "Category",
    price: "Price",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bec5328e0c6eeb17f17d22f93643f045bb86741c20e6c1c4d0b0bb3b6acd64a?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726",
    title: "Title",
    category: "Category",
    price: "Price",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bec5328e0c6eeb17f17d22f93643f045bb86741c20e6c1c4d0b0bb3b6acd64a?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726",
    title: "Title",
    category: "Category",
    price: "Price",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bec5328e0c6eeb17f17d22f93643f045bb86741c20e6c1c4d0b0bb3b6acd64a?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726",
    title: "Title",
    category: "Category",
    price: "Price",
  },
];

export default function HomePage() {
  return (
    <main className="flex overflow-hidden flex-col items-center relative px-5 pt-4 border border-black border-solid bg-zinc-900">
      <NavigationBar />
      <HeroSection />
      <BookGrid title="Continue Reading" books={continueReadingBooks} />
      <BookGrid title="Top Books" books={topBooks} />
      <Footer />
    </main>
  );
}

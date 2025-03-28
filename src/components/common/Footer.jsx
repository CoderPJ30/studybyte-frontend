import React from "react";

const Footer = () => {
  return (
    <footer className="sticky top-[100vh] pt-8 pr-20 pl-8 mt-16 max-w-full bg-white border-t border-zinc-300 w-[1356px] max-md:px-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start min-h-[83px] max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6739ca0230094e343ddf8bbdac30a607da1e2d56f4625cbe8597e311c7386040?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726"
              alt="Logo icon"
              className="object-contain w-8 aspect-square"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dd2ea34ceb21db27cebbe29cf39e532179e310baaeab4b798a24393bac810b0?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726"
              alt="Logo text"
              className="object-contain mt-6 w-36 max-w-full aspect-[5.99]"
            />
          </div>
        </div>

        <nav className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-base leading-snug min-h-[262px] text-stone-900 max-md:mt-10">
            <h3 className="self-stretch pb-4 w-full font-semibold">
              Categories
            </h3>
            <ul>
              {[
                "Science fiction",
                "Biography",
                "Fantasy",
                "Education books",
                "Self help",
                "Textbooks",
              ].map((item) => (
                <li key={item} className="mt-3">
                  <a
                    href={`/category/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <nav className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-base leading-snug h-[262px] text-stone-900 max-md:mt-10">
            <h3 className="self-stretch pb-4 w-full font-semibold">Authors</h3>
            <ul>
              {[
                "Richard Hamming",
                "S.P Gupta",
                "R. D. Sharma",
                "H. C. Verma",
                "Isaac Asimov",
                "J. K. Rowling",
              ].map((author) => (
                <li key={author} className="mt-3">
                  <a
                    href={`/author/${author.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-blue-600"
                  >
                    {author}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <nav className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-base leading-snug h-[262px] text-stone-900 max-md:mt-10">
            <h3 className="self-stretch pb-4 w-full font-semibold">
              Publications
            </h3>
            <ul>
              {[
                "Penguin Random House India",
                "HarperCollins India",
                "Aleph Book Company",
                "Bloomsbury India",
                "Oxford University Press India",
                "Half Baked Beans",
              ].map((publisher) => (
                <li key={publisher} className="mt-3">
                  <a
                    href={`/publisher/${publisher.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-blue-600"
                  >
                    {publisher}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
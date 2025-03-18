import React from "react";

export const Logo = () => {
  return (
    <header className="flex relative gap-3 items-center mt-20 z-[1] max-md:mt-24 max-sm:flex-col max-sm:mt-16 max-sm:text-center">
      <h1 className="text-3xl font-bold text-white">StudyByte</h1>
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="book-icon"
        >
          <path
            d="M16 9.33333C16 7.91885 15.4381 6.56229 14.4379 5.5621C13.4377 4.5619 12.0811 4 10.6666 4H2.66663V24H12C13.0608 24 14.0782 24.4214 14.8284 25.1716C15.5785 25.9217 16 26.9391 16 28M16 9.33333V28M16 9.33333C16 7.91885 16.5619 6.56229 17.5621 5.5621C18.5623 4.5619 19.9188 4 21.3333 4H29.3333V24H20C18.9391 24 17.9217 24.4214 17.1715 25.1716C16.4214 25.9217 16 26.9391 16 28"
            stroke="#F3F3F3"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </header>
  );
};

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  return (
    <nav className="flex flex-wrap gap-5 justify-between self-stretch w-full max-md:max-w-full">
      <div className="flex gap-3 my-auto text-2xl font-bold text-white whitespace-nowrap cursor-default">
        <h1 className="grow">StudyByte</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fbd6b26af7b374342d6ce3d3c4421baa4deec4faf0ae86e46fed89c04564b13?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726"
          alt="StudyByte logo"
          className="object-contain shrink-0 self-start mt-1 w-6 aspect-square"
        />
      </div>
      <div className="flex gap-20 items-center">
        <div className="flex gap-12 items-center text-xl font-semibold text-neutral-400 max-md:max-w-full">
          <NavLink to="/home" className={({ isActive }) => `${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'} self-stretch my-auto`}>
            Home
          </NavLink>
          <NavLink to="/books" className={({ isActive }) => `${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'} self-stretch my-auto`}>
            Books
          </NavLink>
          <NavLink to="/my-books" className={({ isActive }) => `${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'} self-stretch my-auto`}>
            My books
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'} self-stretch my-auto`}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center self-stretch my-auto text-base text-zinc-500">
          <div className="flex overflow-hidden gap-4 self-stretch px-2.5 py-1 my-auto bg-white rounded-xl min-w-60 w-[360px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4043db299d9ceb138c2e374dca4840d7d3ff7f4252651ed455139c571b71f73?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726"
              alt="Search icon"
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <input
              type="search"
              placeholder="Search books by title, author, category"
              className="flex-auto my-auto w-[296px] bg-transparent outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Link to="\cart">
          <FontAwesomeIcon icon={faShoppingCart} className="text-3xl text-white" />
        </Link>
        <Link to="\profile">
          <FontAwesomeIcon icon={faUserCircle} className="text-4xl text-white" />
        </Link>
      </div>
    </nav >
  );
};

export default NavigationBar;
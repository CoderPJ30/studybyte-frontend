import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const { user } = useContext(UserContext);

  const navlinks = [
    { title: "Home", link: "/home" },
    { title: "Books", link: "/books" },
    { title: "My books", link: "/my-books" },
    { title: "Contact", link: "/contact" },
  ]

  const openProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <nav className="flex flex-wrap gap-5 pt-4 px-5 justify-between self-stretch w-full max-md:max-w-full bg-zinc-900">
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
          {navlinks.map((link) => (
            <NavLink key={link.title} to={link.link} className={({ isActive }) => `${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'} self-stretch my-auto`}>
              {link.title}
            </NavLink>
          ))}
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
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="text-3xl text-white" />
        </Link>
        <FontAwesomeIcon icon={faUserCircle}
          className="text-4xl text-white cursor-pointer"
          onClick={openProfileMenu}
        />

      </div>

      {profileMenuOpen && (
        <div className="absolute right-0 flex flex-col items-center min-w-40 gap-2 mt-16 bg-white rounded-lg shadow-lg z-30">
          {/* <Link to="/profile" className="px-5 py-2.5 text-lg text-neutral-900 rounded-lg hover:bg-zinc-100 w-full text-center"
            onClick={() => setProfileMenuOpen(false)}
          >
            Profile
          </Link> */}
          {/* <Link to="/settings" className="px-5 py-2.5 text-lg text-neutral-900 rounded-lg hover:bg-zinc-100">
            Settings
          </Link> */}
          <p className="px-3 py-3 text-lg">
            Hello, {user.user_fullname}!
          </p>
          <button className="px-5 py-2.5 text-lg text-neutral-900 w-full rounded-lg hover:bg-zinc-100 hover:cursor-pointer"
            onClick={() => {
              setProfileMenuOpen(false);
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}>
            Logout
          </button>
        </div>
      )}
    </nav >
  );
};

export default NavigationBar;
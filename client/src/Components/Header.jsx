import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="w-full px-4 bg-[#222222] text-white">
      <div className="h-16 flex justify-between items-center text-2xl font-bold">
        <Link to="/" className="">
          CodeCrafter
        </Link>
        <button
          type="button"
          onClick={() => setNav((prev) => !prev)}
          className="visible md:hidden"
        >
          <HiOutlineMenuAlt3 />
        </button>
        <div
          className={`justify-evenly gap-4 hidden md:flex items-center font-normal text-xl h-16`}
        >
          <Link
            to="/tutorials/Chapter1"
            className="px-2 py-1 hover:bg-white hover:text-[#222222] rounded-lg"
          >
            Tutorial
          </Link>
          <Link
            to="/quizes/quiz1"
            className="px-2 py-1 hover:bg-white hover:text-[#222222] rounded-lg"
          >
            Quiz
          </Link>
          <Link
            to="/projects"
            className="px-2 py-1 hover:bg-white hover:text-[#222222] rounded-lg"
          >
            Projects
          </Link>
          <Link
            to="/cppatglance"
            className="px-2 py-1 hover:bg-white hover:text-[#222222] rounded-lg"
          >
            C++ at Glance
          </Link>
        </div>
      </div>
      <div
        className={`flex justify-evenly pb-4 md:hidden ${
          nav ? null : "hidden"
        }`}
      >
        <Link
          to="/tutorials/Chapter1"
          className="px-2 py-1 hover:bg-white hover:text-[#222222] rounded-lg"
        >
          Tutorial
        </Link>
        <Link
          to="/quizes/quiz1"
          className="px-2 py-1 hover:bg-white hover:text-[#222222] rounded-lg"
        >
          Quiz
        </Link>
        <Link
          to="/projects"
          className="px-2 py-1 hover:bg-white hover:text-[#222222] rounded-lg"
        >
          Projects
        </Link>
        <Link
          to="/cppatglance"
          className="px-2 py-1 hover:bg-white hover:text-[#222222] rounded-lg"
        >
          C++ at Glance
        </Link>
      </div>
    </nav>
  );
};

export default Header;

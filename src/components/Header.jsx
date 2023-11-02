import React, { useState } from "react";
import {
  Bars3BottomRightIcon,
  BoltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="bg-gray-100 px-4 py-5 m-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex items-center justify-between">
        {/* logo section */}
        <Link to="/" className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-400"></BoltIcon>
          
          <span className="ml-2 text-2xl font-bold text-gray-800 tracking-wide">
            BookLY
          </span>
        </Link>
        {/* nav items section */}
        <ul className="items-center hidden space-x-8 lg:flex font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Books"
              className={({ isActive }) =>
                isActive ? "active" : "default"
              }
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "active" : "default"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        {/* Mobile navbar section */}
        <div className="lg:hidden">
          {/* DropDown open button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsOpenMenu(true)}
          >
            <Bars3BottomRightIcon className="w-5  text-gray-600"></Bars3BottomRightIcon>
          </button>
          {isOpenMenu && (
            <div className="absolute left-0  top-0 w-full z-10">
                 <div className="p-5 bg-white border rounded shadow-sm">
            {/*  logo and button section */}
    
               <div className="flex items-center justify-between mb-4">
              <div>
                <Link to="/" className="inline-flex items-center">
                  <BoltIcon className="h-6 w-6 text-blue-500" />
                  <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                  BookLY
                  </span>
                </Link>
              </div>
               {/* dropdown menu close button */}
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <XMarkIcon className="w-5 text-gray-500"></XMarkIcon>
                </button>
              </div>
            </div>
            {/* Mobile Nav Items Section */}
            <nav>
                <ul>
                    <li>
                        <Link to='/' className="default font-medium">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/books' className='font-medium tracking-wide text-gray-700 transition-colors duration-700 hover:text-blue-400'>
                        Books
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='font-medium tracking-wide text-gray-700 transition-colors duration-700 hover:text-blue-400'>
                        About Us
                        </Link>
                    </li>
                </ul>
            </nav>
     </div>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

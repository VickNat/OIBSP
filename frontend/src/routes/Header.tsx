import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../images/Logo.svg';
import phone from '../images/phone.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-black'>
      <nav className="bg-black fixed w-full z-20 top-0 start-0 shadow-md shadow-slate-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            className="flex items-center space-x-3 rtl:space-x-reverse"
            to={'/userHeader/userDashboard'}
          >
            <img
              src={logo}
              className="h-8"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex justify-center items-center gap-x-2 text-white bg-primaryOrange hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-50 font-medium rounded-sm text-sm px-4 py-2 text-center"
            >
              <img src={phone} alt='Phone' className='h-3 w-auto' />
              Contact Us
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primaryOrange rounded md:hidden hover:bg-gray-900 focus:outline-none border-none"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'
              } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded bg-black hover:bg-gray-900 hover:text-primaryOrange md:hover:bg-black transition duration-100 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded bg-black hover:bg-gray-900 hover:text-primaryOrange md:hover:bg-black transition duration-100 md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded bg-black hover:bg-gray-900 hover:text-primaryOrange md:hover:bg-black transition duration-100 md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded bg-black hover:bg-gray-900 hover:text-primaryOrange md:hover:bg-black transition duration-100 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className='pt-24'>
        <Outlet />
      </div>
    </div>
  )
}

export default Header
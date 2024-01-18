import React from 'react'
import logo from '../images/Logo.svg'

const Footer = () => {
  return (
    <footer className="bg-black rounded-lg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Flowbite
            </span>
          </a>
          <ul className="flex flex-wrap items-center gap-x-8 mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded bg-black hover:bg-gray-900 hover:text-primaryOrange md:hover:bg-black transition duration-100 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded bg-black hover:bg-gray-900 hover:text-primaryOrange md:hover:bg-black transition duration-100 md:p-0"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded bg-black hover:bg-gray-900 hover:text-primaryOrange md:hover:bg-black transition duration-100 md:p-0"
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded bg-black hover:bg-gray-900 hover:text-primaryOrange md:hover:bg-black transition duration-100 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-primaryOrange sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="https://github.com/VickNat" className="hover:underline">
            Vick
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
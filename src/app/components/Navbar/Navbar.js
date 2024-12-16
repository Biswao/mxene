'use client'
import { useState } from 'react';
import logo from '../../../../public/assets/MXeneLogoPng.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4" style={{position:'fixed',width:'100%',zIndex:'100',paddingBottom:'10px !important',paddingTop:'10px !important'}}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand */}
        {/* <div className="text-xl font-bold">Brand</div> */}
        <img src={logo.src} alt='logo' width='150' />

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`md:flex items-center space-x-6 ${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 text-center">
            <a
              href="#"
              className="hover:text-gray-300 md:px-4 py-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-gray-300 md:px-4 py-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-gray-300 md:px-4 py-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-gray-300 md:px-4 py-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          {/* <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56c-.89.39-1.85.65-2.85.77a4.92 4.92 0 002.15-2.72 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.37 4.48 13.94 13.94 0 01-10.1-5.13 4.92 4.92 0 001.52 6.56 4.88 4.88 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.83 4.92 4.92 0 01-2.22.08 4.92 4.92 0 004.6 3.41A9.85 9.85 0 010 20.54a13.94 13.94 0 007.55 2.22c9.06 0 14.01-7.5 14.01-14 0-.21 0-.42-.02-.63A10.01 10.01 0 0024 4.56z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h10.99v-9.29H9.69v-3.63h3.07V8.34c0-3.05 1.86-4.7 4.58-4.7 1.3 0 2.42.1 2.75.15v3.18h-1.89c-1.48 0-1.77.7-1.77 1.73v2.27h3.54l-.46 3.63h-3.08V24h6.03A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c5.5 0 9.96 4.45 9.96 9.96 0 5.52-4.46 9.96-9.96 9.96S2.04 17.52 2.04 12 6.5 2.04 12 2.04zm0 1.96a8 8 0 100 16 8 8 0 000-16zm1.93 5.38c.61 0 1.11.5 1.11 1.11v5.02c0 .61-.5 1.11-1.11 1.11h-3.86a1.11 1.11 0 01-1.11-1.11v-5.02c0-.61.5-1.11 1.11-1.11h3.86zM12 8.63a1.26 1.26 0 110 2.52 1.26 1.26 0 010-2.52z" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent shadow">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

        <div className="flex items-center">
          <a href="/home" className="flex items-center space-x-2">
            <img src={logo} alt="BizOra logo" className="w-auto h-8" />
            <span className="text-2xl font-bold text-gray-800 font-poppins">BizOra</span>
          </a>

          <nav aria-label="Primary" className="hidden sm:ml-8 sm:flex sm:space-x-6 sm:items-center">
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900 border-b-2 border-indigo-500">Home</a>
            <a href="#about" className="px-3 py-2 text-sm font-medium text-gray-900">About</a>
            <a href="#features" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Features</a>
            <a href="#pricing" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Pricing</a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        </div>


        <div className="flex items-center">
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="/signin" className="text-sm text-gray-600 hover:text-gray-800">Sign in</a>
            <a
              href="/signup"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-amber-400 hover:bg-cyan-700"
            >
              Sign up
            </a>
          </div>

          <div className="sm:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${open ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 text-base font-medium text-indigo-700 rounded-md bg-indigo-50">Home</a>
          <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50">Features</a>
          <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50">Pricing</a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50">Contact</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="px-4 space-y-1">
            <a href="#signin" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50">Sign in</a>
            <a
              href="#signup"
              className="block px-3 py-2 text-base font-medium text-white rounded-md bg-amber-400 hover:bg-cyan-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

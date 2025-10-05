import React from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="relative text-white bg-gradient-to-t from-cyan-700 to-cyan-200 ">
      <Navbar />
      <div className="px-4 py-20 mx-auto max-w-7xl sm:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Build better products, faster
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            BizOra helps teams ship reliable software with a simple,
            collaborative workflow and powerful integrations.
          </p>

          <div className="flex flex-col items-center justify-center mt-8 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button>
              <a
                href="#signup"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-transparent rounded-md shadow-sm bg-amber-400 text-cyan-800 hover:bg-cyan-500"
              >
                Get started
              </a>
            </button>

            <button>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md hover:bg-cyan-500"
              >
                Learn more
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

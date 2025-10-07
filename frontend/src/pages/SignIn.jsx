import React from "react"; 
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const SignIn = () => {
  return (
  <>
  <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-2xl dark:bg-gray-800 rounded-2xl dark:border-gray-700">
        <h1 className="mb-2 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-cyan-100 to-cyan-600 bg-clip-text">BizOra</h1>
        <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
          Sign in to your account
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-cyan-600 focus:ring-cyan-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
            </label>
            <a href="#" className="text-sm text-cyan-600 hover:text-cyan-700 hover:underline dark:text-cyan-400">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 font-semibold text-gray-900 transition duration-200 bg-gradient-to-r from-cyan-200 to-cyan-600 rounded-lg hover:from-cyan-700 hover:to-cyan-800 shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-cyan-600 hover:text-cyan-700 hover:underline dark:text-cyan-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  </>
    
  );
};

export default SignIn;

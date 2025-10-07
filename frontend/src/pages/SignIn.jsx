import React from "react"; 
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md p-8 bg-white shadow-lg dark:bg-gray-900 rounded-2xl">
        <h1 className="mb-2 text-3xl font-bold text-center text-indigo-600">BizOra</h1>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none dark:border-gray-700 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none dark:border-gray-700 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="text-indigo-600 rounded" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-medium text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

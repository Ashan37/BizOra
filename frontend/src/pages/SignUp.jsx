import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/users", formData);
      console.log("User registered:", response.data);
      alert("Signup successful!");
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-24 pb-24 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-2xl dark:bg-gray-800 rounded-2xl dark:border-gray-700">
          <h1 className="mb-2 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-cyan-100 to-cyan-600 bg-clip-text">
            BizOra
          </h1>
          <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
            Create your account
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 font-semibold text-gray-900 transition duration-200 bg-gradient-to-r from-cyan-200 to-cyan-600 rounded-lg hover:from-cyan-700 hover:to-cyan-800 shadow-md hover:shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-cyan-600 hover:text-cyan-700 hover:underline dark:text-cyan-400">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;

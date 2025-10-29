import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/v1/users", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Signup successful!");
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      if (error.response) {
        alert(`Signup failed: ${error.response.data}`);
      } else {
        alert("Server not responding");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-24 pb-24 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-2xl dark:bg-gray-800 rounded-2xl dark:border-gray-700">
          <h1 className="mb-2 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text">BizOra</h1>
          <p className="mb-6 text-center text-gray-600 dark:text-gray-400">Create your account</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input name="password" type="password" value={formData.password} onChange={handleChange} required minLength={6} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-cyan-500" />
            </div>
            <button type="submit" disabled={loading} className={`w-full py-2.5 font-semibold rounded-lg text-gray-900 bg-gradient-to-r from-cyan-200 to-cyan-600 ${loading ? "opacity-70 cursor-not-allowed" : "hover:from-cyan-700 hover:to-cyan-800"}`}>{loading ? "Signing Up..." : "Sign Up"}</button>
          </form>
          <p className="mt-6 text-center text-gray-600 dark:text-gray-400">Already have an account? <Link to="/signin" className="font-medium text-cyan-600 hover:text-cyan-700 hover:underline dark:text-cyan-400">Sign in</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignUp;

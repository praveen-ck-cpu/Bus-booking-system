import React, { useState } from 'react';
import imgNew from '../../assets/herobg.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", pass: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ email: "", pass: "" });

    axios.post("http://localhost:3000/log", data, {
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => console.log(res.data.message))
    .catch((err) => console.log(err));
  };

  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${imgNew})` }}
    >
      <div className="w-full max-w-sm sm:w-96 bg-neutral-950 border border-slate-600 rounded-lg p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white">Welcome</h1>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          {/* Email Input */}
          <div className="relative">
            <input 
              type="email"
              name="email"
              value={data.email}
              className="w-full py-2.5 px-3 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-red-500 transition-all"
              placeholder="Email Address"
              required
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input 
              type="password"
              name="pass"
              value={data.pass}
              className="w-full py-2.5 px-3 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-red-500 transition-all"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <p 
              className="text-sm text-center pt-2 text-gray-300 cursor-pointer hover:text-red-500 transition-all"
              onClick={() => navigate("/forpass")}
            >
              Forgot Password?
            </p>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="w-full py-2 text-base md:text-lg rounded bg-red-500 hover:bg-transparent border-2 border-red-500 text-white hover:text-red-500 transition-all duration-300"
          >
            Login
          </button>

          {/* OR Section */}
          <div className="text-center text-gray-300">
            <p>OR</p>
          </div>

          {/* Google Login Button */}
          <button 
            className="w-full py-2 text-base md:text-lg rounded bg-red-500 hover:bg-transparent border-2 border-red-500 text-white hover:text-red-500 transition-all duration-300"
          >
            Continue with Google
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-300">
            Don't have an account? 
            <span 
              className="text-red-500 text-lg cursor-pointer hover:text-white transition-all ml-1"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

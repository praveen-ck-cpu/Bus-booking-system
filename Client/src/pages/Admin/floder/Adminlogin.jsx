import React, { useState } from 'react';
import imgNew from '../../../assets/herobg.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'sonner';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); 
  const adminid = localStorage.getItem("user");
  console.log(adminid)

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:3105/admin/adminlogin/?email=${email}`);
      setStep(2);
    } catch (error) {
      console.error("Error sending OTP", error);
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3105/admin/adminlogin-validate/?email=${email}&otp=${otp}`);
      const {adminid} = response.data;
      if (response.status == 200) {
        localStorage.setItem("user", adminid)
        navigate("/admin",{state:adminid});
      } else {
        toast.error("Invalid OTP");
      }
    } catch (error) {
      toast.error("OTP verification failed");
      console.log(error)
    }
  };

  return (
    <>
    <Toaster/>
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${imgNew})` }}
    >
      <div className="w-full h-500px max-w-sm sm:w-96 bg-neutral-950 border border-slate-600 rounded-lg p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white">Welcome</h1>
        
        {step === 1 ? (
          <form onSubmit={handleEmailSubmit} className="space-y-5 mt-6">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email Address" 
              className="w-full py-2.5 px-3 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-red-500" 
              required
            />
            <button 
              type="submit" 
              className="w-full py-2 text-lg rounded bg-red-500 hover:bg-transparent border-2 border-red-500 text-white hover:text-red-500 transition-all"
            >
              Get OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-5 mt-6">
            <input 
              type="text" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
              placeholder="Enter OTP" 
              className="w-full py-2.5 px-3 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-red-500" 
              required
            />
            <button 
              type="submit" 
              className="w-full py-2 text-lg rounded bg-red-500 hover:bg-transparent border-2 border-red-500 text-white hover:text-red-500 transition-all"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
    </>
    
  );
};

export default AdminLogin;
